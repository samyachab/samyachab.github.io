import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./HorizontalScroller.css";

// Full-bleed horizontal gallery. Auto-scrolls gently (ping-pong), pausing while
// hovered or dragged. Drag with the mouse to scroll, or use a trackpad / wheel.
// Click-through is preserved unless the pointer actually moved.
// `anim` (optional) spreads framer-motion props onto the container so children
// can cascade in via variants.
export default function HorizontalScroller({ children, className = "", autoScroll = true, speed = 0.5, anim }) {
  const ref = useRef(null);
  const drag = useRef({ down: false, startX: 0, scroll: 0, moved: false });
  const paused = useRef(false);
  const dir = useRef(1);
  const pos = useRef(0); // float position; scrollLeft rounds sub-pixel steps to 0, so we accumulate here
  const lastSet = useRef(0);

  useEffect(() => {
    if (!autoScroll) return;
    let raf;
    const tick = () => {
      const el = ref.current;
      if (el && !paused.current && !drag.current.down) {
        const max = el.scrollWidth - el.clientWidth;
        if (max > 1) {
          // Resync if the user scrolled the element another way (wheel/trackpad).
          if (Math.abs(el.scrollLeft - lastSet.current) > 1.5) pos.current = el.scrollLeft;
          pos.current += dir.current * speed;
          if (pos.current <= 0) {
            pos.current = 0;
            dir.current = 1;
          } else if (pos.current >= max) {
            pos.current = max;
            dir.current = -1;
          }
          el.scrollLeft = pos.current;
          lastSet.current = el.scrollLeft;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [autoScroll, speed]);

  const onDown = (e) => {
    drag.current = { down: true, startX: e.pageX, scroll: ref.current.scrollLeft, moved: false };
  };
  const onMove = (e) => {
    if (!drag.current.down) return;
    const dx = e.pageX - drag.current.startX;
    if (Math.abs(dx) > 3) drag.current.moved = true;
    ref.current.scrollLeft = drag.current.scroll - dx;
  };
  const onUp = () => {
    drag.current.down = false;
  };
  const onClickCapture = (e) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`h-scroller ${className}`}
      onMouseDown={onDown}
      onMouseMove={onMove}
      onMouseUp={onUp}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => {
        paused.current = false;
        drag.current.down = false;
      }}
      onClickCapture={onClickCapture}
      onDragStart={(e) => e.preventDefault()}
      {...anim}
    >
      {children}
    </motion.div>
  );
}
