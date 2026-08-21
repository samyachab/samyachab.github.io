import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { toHash } from "../utils/href";
import "./ProjectCard.css";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const tagsContainerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
};

const tagVariants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function ProjectCard({ project }) {
  const ref = useRef(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
  const bgX = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const bgY = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const glowX = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 });
  const glowY = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 });
  const glowOpacity = useSpring(useMotionValue(0), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 8);
    rotateX.set(-py * 8);
    bgX.set(px * -16);
    bgY.set(py * -16);
    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
    glowOpacity.set(1);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    bgX.set(0);
    bgY.set(0);
    glowOpacity.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={toHash(project.href)}
      className={`project-card project-card--${project.slug}`}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
    >
      {project.logo && (
        <motion.img
          className="project-card__logo"
          src={project.logo}
          alt=""
          style={{ x: bgX, y: bgY }}
        />
      )}
      <motion.div
        className="project-card__bg"
        style={{ backgroundImage: `url(${project.bgVector})`, x: bgX, y: bgY }}
      />
      <motion.div
        className="project-card__glow"
        style={{ left: glowX, top: glowY, opacity: glowOpacity }}
      />

      <p className="project-card__category sous-titre">{project.category}</p>

      <div className="project-card__body">
        <div className="project-card__title-slot">
          {project.titleImage ? (
            <img className="project-card__title-img" src={project.titleImage} alt={project.title} />
          ) : (
            <p className="project-card__title">{project.title}</p>
          )}
        </div>
        <motion.div className="project-card__tags" variants={tagsContainerVariants}>
          {project.tags.map((tag) => (
            <motion.span key={tag} className="project-card__tag label" variants={tagVariants}>
              {tag}
            </motion.span>
          ))}
        </motion.div>
        <p className="project-card__desc body">{project.description}</p>
      </div>
    </motion.a>
  );
}
