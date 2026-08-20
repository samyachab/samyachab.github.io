import { motion } from "framer-motion";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import RedThread from "../components/RedThread";
import { content } from "../data/content";
import "./CaseStudy.css";

const titleVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.9 } },
};

const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.6, delayChildren: 1.5 },
  },
};

export default function CaseStudy({ locale }) {
  const t = content[locale];
  const title = t.nav.find((link) => link.key === "case-study").label;

  return (
    <>
      <Header nav={t.nav} langSwitch={t.langSwitch} current="case-study" />

      <div className="case-study">
        <RedThread className="case-study__thread" src="/assets/images/case-study-thread.svg" />

        <motion.h1
          className="case-study__title h1"
          initial="hidden"
          animate="show"
          variants={titleVariants}
        >
          {title}
        </motion.h1>

        <motion.div className="case-study__grid" initial="hidden" animate="show" variants={gridVariants}>
          {t.projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.div>

        <Footer footer={t.footer} />
      </div>
    </>
  );
}
