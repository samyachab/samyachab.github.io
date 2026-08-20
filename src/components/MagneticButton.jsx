import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MagneticButton({
  href,
  label,
  className = "",
  arrowColor = "currentColor",
  variants,
  reverse = false,
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const arrow = (
    <motion.svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={false}
      style={reverse ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M11.354 5.354a.5.5 0 0 0 0-.708L8.172.464a.5.5 0 1 0-.708.708L10.293 5l-2.83 2.828a.5.5 0 1 0 .708.708l3.182-3.182ZM0 5.5h11v-1H0v1Z"
        fill={arrowColor}
      />
    </motion.svg>
  );

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      variants={variants}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {reverse && arrow}
      {label}
      {!reverse && arrow}
    </motion.a>
  );
}
