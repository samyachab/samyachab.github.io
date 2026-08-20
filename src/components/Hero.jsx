import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import "./Hero.css";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const AUTO_ADVANCE_DELAY = 10000;

export default function Hero({ hero, filters }) {
  const [activeFilter, setActiveFilter] = useState(filters[0].key);
  const active = filters.find((f) => f.key === activeFilter);
  const intervalRef = useRef(null);

  const startAutoAdvance = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveFilter((current) => {
        const index = filters.findIndex((f) => f.key === current);
        return filters[(index + 1) % filters.length].key;
      });
    }, AUTO_ADVANCE_DELAY);
  };

  useEffect(() => {
    startAutoAdvance();
    return () => clearInterval(intervalRef.current);
  }, [filters]);

  const handleSelectFilter = (key) => {
    setActiveFilter(key);
    startAutoAdvance();
  };

  return (
    <motion.section className="hero" variants={containerVariants} initial="hidden" animate="show">
      <motion.video
        className="hero__video"
        src="/assets/video/hero-background.mp4"
        autoPlay
        muted
        loop
        playsInline
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="hero__overlay" />

      <motion.h1 className="hero__title h1" variants={fadeUp}>
        {hero.title}
      </motion.h1>

      <div className="hero__content">
        <motion.div className="hero__photo" variants={fadeUp}>
          <img src="/assets/images/samy.png" alt="Samy Achab" />
        </motion.div>

        <motion.div className="hero__info" variants={fadeUp}>
          <div className="hero__filters">
            {filters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                className={`hero__filter-btn h3${filter.key === activeFilter ? " hero__filter-btn--active" : ""}`}
                onClick={() => handleSelectFilter(filter.key)}
                aria-pressed={filter.key === activeFilter}
              >
                {filter.label}
                {filter.key === activeFilter && (
                  <motion.span
                    layoutId="hero-filter-indicator"
                    className="hero__filter-indicator"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="hero__description">
            <AnimatePresence mode="wait">
              <motion.p
                key={active.key}
                className="h3"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {active.text}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <MagneticButton
        href={hero.ctaHref}
        label={hero.cta}
        className="hero__cta label"
        arrowColor="white"
        variants={fadeUp}
      />
    </motion.section>
  );
}
