import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./RedThread.css";

const PULL_RADIUS = 160;
const PULL_STRENGTH = 0.4;
const SPRING = 0.12;
const MAX_DISPLACEMENT = 30;
const SMOOTH_NEIGHBOR_WEIGHT = 0.22;

// Parses a "M x y C x1 y1 x2 y2 x y C ..." path into a flat list of points
// plus a structure describing how to regroup them back into commands.
function parsePath(d) {
  const structure = [];
  const flat = [];
  const re = /([MC])([^MCZ]*)/gi;
  let match;
  while ((match = re.exec(d))) {
    const type = match[1].toUpperCase();
    const nums = (match[2].trim().match(/-?\d*\.?\d+(?:e-?\d+)?/gi) || []).map(Number);
    if (type === "M") {
      structure.push({ type: "M" });
      flat.push({ x: nums[0], y: nums[1] });
    } else if (type === "C") {
      for (let i = 0; i + 5 < nums.length; i += 6) {
        structure.push({ type: "C" });
        flat.push({ x: nums[i], y: nums[i + 1] });
        flat.push({ x: nums[i + 2], y: nums[i + 3] });
        flat.push({ x: nums[i + 4], y: nums[i + 5] });
      }
    }
  }
  return { structure, flat };
}

function serializePath(structure, points) {
  let d = "";
  let i = 0;
  for (const cmd of structure) {
    if (cmd.type === "M") {
      const p = points[i++];
      d += `M ${p.x.toFixed(2)} ${p.y.toFixed(2)} `;
    } else {
      const c1 = points[i++];
      const c2 = points[i++];
      const end = points[i++];
      d += `C ${c1.x.toFixed(2)} ${c1.y.toFixed(2)} ${c2.x.toFixed(2)} ${c2.y.toFixed(2)} ${end.x.toFixed(2)} ${end.y.toFixed(2)} `;
    }
  }
  return d + "Z";
}

export default function RedThread({ src, className = "" }) {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const structureRef = useRef([]);
  const pointsRef = useRef([]); // { ox, oy, x, y }
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });
  const rafRef = useRef(null);

  const [viewBox, setViewBox] = useState(null);
  const [originalD, setOriginalD] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetch(src)
      .then((res) => res.text())
      .then((text) => {
        if (cancelled) return;
        const doc = new DOMParser().parseFromString(text, "image/svg+xml");
        const svgEl = doc.querySelector("svg");
        const pathEl = doc.querySelector("path");
        if (!svgEl || !pathEl) return;
        const d = pathEl.getAttribute("d");
        const { structure, flat } = parsePath(d);
        structureRef.current = structure;
        pointsRef.current = flat.map((p) => ({ ox: p.x, oy: p.y, x: p.x, y: p.y }));
        setViewBox(svgEl.getAttribute("viewBox"));
        setOriginalD(d);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [src]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const toLocal = (clientX, clientY) => {
      const ctm = svg.getScreenCTM();
      if (!ctm) return null;
      const pt = svg.createSVGPoint();
      pt.x = clientX;
      pt.y = clientY;
      const local = pt.matrixTransform(ctm.inverse());
      return { x: local.x, y: local.y };
    };

    const handleMove = (e) => {
      const local = toLocal(e.clientX, e.clientY);
      if (local) mouseRef.current = { x: local.x, y: local.y, active: true };
    };
    const handleLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [viewBox]);

  useEffect(() => {
    function tick() {
      const pts = pointsRef.current;
      const mouse = mouseRef.current;

      if (pts.length && pathRef.current) {
        for (let i = 0; i < pts.length; i++) {
          const p = pts[i];
          let tx = p.ox;
          let ty = p.oy;

          if (mouse.active) {
            const dx = mouse.x - p.ox;
            const dy = mouse.y - p.oy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < PULL_RADIUS) {
              const eased = (1 - dist / PULL_RADIUS) ** 2;
              let ddx = dx * eased * PULL_STRENGTH;
              let ddy = dy * eased * PULL_STRENGTH;
              const dlen = Math.sqrt(ddx * ddx + ddy * ddy);
              if (dlen > MAX_DISPLACEMENT) {
                const scale = MAX_DISPLACEMENT / dlen;
                ddx *= scale;
                ddy *= scale;
              }
              tx = p.ox + ddx;
              ty = p.oy + ddy;
            }
          }

          p.x += (tx - p.x) * SPRING;
          p.y += (ty - p.y) * SPRING;
        }

        // Light smoothing pass across neighboring points so a localized pull
        // doesn't tear tight loops. Smooths the *displacement* from the
        // original point, not the absolute position, so the thread is
        // pixel-identical to the source path at rest (zero displacement).
        const centerWeight = 1 - SMOOTH_NEIGHBOR_WEIGHT * 2;
        const smoothed = new Array(pts.length);
        for (let i = 0; i < pts.length; i++) {
          const prev = pts[i > 0 ? i - 1 : i];
          const next = pts[i < pts.length - 1 ? i + 1 : i];
          const cur = pts[i];
          const curDx = cur.x - cur.ox;
          const curDy = cur.y - cur.oy;
          const prevDx = prev.x - prev.ox;
          const prevDy = prev.y - prev.oy;
          const nextDx = next.x - next.ox;
          const nextDy = next.y - next.oy;
          smoothed[i] = {
            x: cur.ox + curDx * centerWeight + prevDx * SMOOTH_NEIGHBOR_WEIGHT + nextDx * SMOOTH_NEIGHBOR_WEIGHT,
            y: cur.oy + curDy * centerWeight + prevDy * SMOOTH_NEIGHBOR_WEIGHT + nextDy * SMOOTH_NEIGHBOR_WEIGHT,
          };
        }

        pathRef.current.setAttribute("d", serializePath(structureRef.current, smoothed));
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className={`red-thread ${className}`}>
      {viewBox && (
        <motion.svg
          ref={svgRef}
          className="red-thread__svg"
          viewBox={viewBox}
          preserveAspectRatio="none"
          initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.8, ease: [0.65, 0, 0.35, 1] }}
        >
          <path ref={pathRef} className="red-thread__path" d={originalD} />
        </motion.svg>
      )}
    </div>
  );
}
