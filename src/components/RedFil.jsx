import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./RedFil.css";

// Red hand-drawn "fil" (design system) that draws itself in left-to-right.
// A wrapper keeps a full-size layout box for the IntersectionObserver; the inner
// element scales in. Size/position come from the class passed by the caller.
export default function RedFil({ className = "", delay = 0.2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <span ref={ref} className={`red-fil ${className}`} aria-hidden="true">
      <motion.span
        className="red-fil__stroke"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: inView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay }}
      />
    </span>
  );
}
