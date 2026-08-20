import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import "./DraggableCarousel.css";

const AUTO_SPEED = 28; // px per second

export default function DraggableCarousel({ images, className = "" }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const x = useMotionValue(0);
  const directionRef = useRef(-1);
  const pausedRef = useRef(false);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!containerRef.current || !trackRef.current) return;
      const overflow = trackRef.current.scrollWidth - containerRef.current.clientWidth;
      setMaxScroll(Math.max(0, overflow));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [images]);

  useAnimationFrame((_, delta) => {
    if (pausedRef.current || maxScroll <= 0) return;
    const step = (AUTO_SPEED * delta) / 1000;
    let next = x.get() + directionRef.current * step;

    if (next <= -maxScroll) {
      next = -maxScroll;
      directionRef.current = 1;
    } else if (next >= 0) {
      next = 0;
      directionRef.current = -1;
    }

    x.set(next);
  });

  return (
    <div
      ref={containerRef}
      className={`draggable-carousel ${className}`}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <motion.div
        ref={trackRef}
        className="draggable-carousel__track"
        drag="x"
        dragConstraints={{ left: -maxScroll, right: 0 }}
        dragElastic={0.12}
        style={{ x }}
        onDragStart={() => (pausedRef.current = true)}
        onDragEnd={() => (pausedRef.current = false)}
      >
        {images.map((src) => (
          <motion.img
            key={src}
            src={src}
            alt=""
            draggable={false}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </motion.div>
    </div>
  );
}
