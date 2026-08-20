import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "./ProjectCard";
import "./ProjectCards.css";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

// The horizontal-on-vertical pinned scroll only makes sense with a mouse; on
// touch we keep the native horizontal swipe.
function useIsDesktop() {
  const [d, setD] = useState(true);
  useEffect(() => {
    const m = window.matchMedia("(min-width: 901px)");
    const on = () => setD(m.matches);
    on();
    m.addEventListener("change", on);
    return () => m.removeEventListener("change", on);
  }, []);
  return d;
}

export default function ProjectCards({ projects }) {
  const isDesktop = useIsDesktop();
  const pinRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollDist, setScrollDist] = useState(0);

  const { scrollYProgress } = useScroll({ target: pinRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDist]);

  useEffect(() => {
    if (!isDesktop) {
      setScrollDist(0);
      return;
    }
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setScrollDist(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    const t = setTimeout(measure, 300); // re-measure once layout/images settle
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, [isDesktop, projects]);

  // Mobile / small screens: native horizontal scroll (unchanged behaviour).
  if (!isDesktop) {
    return (
      <motion.section
        className="project-cards"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </motion.section>
    );
  }

  // Desktop: pin the section and translate the cards horizontally as you scroll down.
  return (
    <section
      className="project-cards-pin"
      ref={pinRef}
      style={{ height: `calc(100vh + ${scrollDist}px)` }}
    >
      <div className="project-cards-sticky">
        <motion.div className="project-cards-track" ref={trackRef} style={{ x }}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
