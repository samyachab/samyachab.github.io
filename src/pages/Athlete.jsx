import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RedThread from "../components/RedThread";
import MagneticButton from "../components/MagneticButton";
import DraggableCarousel from "../components/DraggableCarousel";
import { content } from "../data/content";
import "./Athlete.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const timelineItemVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25, delayChildren: 0.05 } },
};

const timelineIconVariants = {
  hidden: { opacity: 0, scale: 0.3, rotate: -35 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 260, damping: 14 },
  },
};

const timelineContentVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const carouselImages = [
  "/assets/images/athlete-carousel-1.jpg",
  "/assets/images/athlete-carousel-2.jpg",
  "/assets/images/athlete-carousel-3.jpg",
  "/assets/images/athlete-carousel-4.jpg",
  "/assets/images/athlete-carousel-5.jpg",
  "/assets/images/athlete-carousel-6.jpg",
  "/assets/images/athlete-carousel-7.jpg",
];

export default function Athlete({ locale }) {
  const t = content[locale];
  const a = t.athlete;

  return (
    <>
      <Header nav={t.nav} langSwitch={t.langSwitch} current="athlete" />

      <div className="athlete">
        <RedThread className="athlete__thread" src="/assets/images/athlete-bg-vector.svg" />

        <motion.div
          className="athlete__intro"
          initial="hidden"
          animate="show"
          variants={staggerContainer}
        >
          <motion.h1 className="athlete__title h1" variants={fadeUp}>
            {a.title}
          </motion.h1>
          <motion.p className="athlete__subtitle sous-titre" variants={fadeUp}>
            {a.subtitle}
          </motion.p>
        </motion.div>

        <section className="athlete__journey">
          <motion.h2
            className="athlete__section-title h2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {a.journeyTitle}
          </motion.h2>

          <div className="athlete__journey-body">
            <div className="athlete__portrait-frame">
              <img className="athlete__portrait" src="/assets/images/athlete1-transparent.png" alt="" />
            </div>

            <div className="athlete__timeline">
              {a.timeline.map((item) => (
                <motion.div
                  className="athlete__timeline-item"
                  key={item.year}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={timelineItemVariants}
                >
                  <motion.img
                    className="athlete__timeline-icon"
                    src="/assets/images/athlete-dot.svg"
                    alt=""
                    variants={timelineIconVariants}
                  />
                  <motion.div className="athlete__timeline-content" variants={timelineContentVariants}>
                    <p className="athlete__timeline-year h3">{item.year}</p>
                    <p className="athlete__timeline-text body">{item.text}</p>
                    {item.text2 && <p className="athlete__timeline-text body">{item.text2}</p>}
                    {item.learnings && (
                      <div className="athlete__learnings">
                        <p className="athlete__learnings-title sous-titre">{item.learningsTitle}</p>
                        <ul className="athlete__learnings-list">
                          {item.learnings.map((line) => (
                            <li key={line} className="body">
                              {line}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <DraggableCarousel className="athlete__carousel" images={carouselImages} />

        <section className="athlete__lessons">
          <motion.h2
            className="athlete__section-title h2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {a.lessonsTitle}
          </motion.h2>

          <div className="athlete__lessons-grid">
            <div className="athlete__lessons-col">
              <div className="athlete__lesson">
                <p className="athlete__lesson-title h3">{a.lessons[0].title}</p>
                <p className="athlete__lesson-text body">{a.lessons[0].text}</p>
              </div>
              <div className="athlete__lesson">
                <p className="athlete__lesson-title h3">{a.lessons[1].title}</p>
                <p className="athlete__lesson-text body">{a.lessons[1].text}</p>
              </div>
            </div>

            <motion.img
              className="athlete__lessons-photo"
              src="/assets/images/athlete-center.jpg"
              alt=""
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />

            <div className="athlete__lessons-col athlete__lessons-col--right">
              <div className="athlete__lesson athlete__lesson--right">
                <p className="athlete__lesson-title h3">{a.lessons[2].title}</p>
                <p className="athlete__lesson-text body">{a.lessons[2].text}</p>
              </div>
              <div className="athlete__lesson athlete__lesson--right">
                <p className="athlete__lesson-title h3">{a.lessons[3].title}</p>
                <p className="athlete__lesson-text body">{a.lessons[3].text}</p>
              </div>
            </div>
          </div>
        </section>

        <motion.div
          className="athlete__cta"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="athlete__cta-text sous-titre">{a.ctaText}</p>
          <MagneticButton
            href={a.ctaHref}
            label={a.ctaLabel}
            className="athlete__cta-button label"
            arrowColor="#728e63"
          />
        </motion.div>

        <Footer footer={t.footer} />
      </div>
    </>
  );
}
