import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RedThread from "../components/RedThread";
import RedFil from "../components/RedFil";
import HorizontalScroller from "../components/HorizontalScroller";
import MagneticButton from "../components/MagneticButton";
import Lightbox from "../components/Lightbox";
import { content } from "../data/content";
import "./CaseStudyEightlines.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const viewport = { once: true, amount: 0.2 };
const stagger = (staggerChildren = 0.08) => ({ hidden: {}, show: { transition: { staggerChildren } } });

// Gallery photos cascade in when the row scrolls into view.
const galleryContainer = { hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } } };
const galleryItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};
const galleryAnim = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.15 },
  variants: galleryContainer,
};

export default function CaseStudyEightlines({ locale }) {
  const t = content[locale];
  const c = t.caseEightlines;
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <Header nav={t.nav} langSwitch={t.langSwitch} current="case-study" />

      <div className="el">
        <RedThread className="el__thread" src="/assets/images/el-bg-fil-warped.svg" />

        {/* Hero */}
        <motion.section className="el__hero" initial="hidden" animate="show" variants={stagger(0.12)}>
          <motion.img className="el__logo" src={c.logo} alt="Eightlines" variants={fadeUp} draggable={false} />
          <motion.p className="el__tagline" variants={fadeUp}>
            {c.tagline}
          </motion.p>
          <motion.div className="el__tags" variants={stagger(0.04)}>
            {c.tags.map((tag) => (
              <motion.span className="el__tag" key={tag} variants={fadeUp}>
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.section>

        <section className="el__section">
          <motion.h2
            className="el__section-title"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp}
          >
            {c.sectionTitle}
          </motion.h2>
        </section>

        {/* Events */}
        {c.events.map((event) => {
          const allImages = [event.poster, ...event.gallery];
          return (
            <section className={`el__event el__event--${event.align}`} key={event.title}>
              <div className="el__event-head">
                <span className="el__event-index" aria-hidden="true">
                  {event.index}
                </span>

                <motion.div
                  className="el__event-text"
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  variants={stagger(0.1)}
                >
                  <motion.h3 className="el__event-title" variants={fadeUp}>
                    {event.title}
                  </motion.h3>
                  <motion.p className="el__event-date" variants={fadeUp}>
                    {event.date}
                  </motion.p>
                  <motion.p className="el__event-text-body body" variants={fadeUp}>
                    {event.text}
                  </motion.p>
                  <motion.div className="el__event-tags" variants={stagger(0.04)}>
                    {event.tags.map((tag) => (
                      <motion.span className="el__event-tag" key={tag} variants={fadeUp}>
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.img
                  className="el__poster"
                  src={event.poster}
                  alt={event.title}
                  draggable={false}
                  onClick={() => setLightbox({ images: allImages, index: 0 })}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  whileHover={{ y: -6, rotate: event.align === "right" ? -1.5 : 1.5 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>

              <HorizontalScroller className="el__gallery" anim={galleryAnim}>
                {event.gallery.map((src, i) => (
                  <motion.img
                    key={src}
                    className="el__photo"
                    src={src}
                    alt=""
                    draggable={false}
                    variants={galleryItem}
                    onClick={() => setLightbox({ images: allImages, index: i + 1 })}
                  />
                ))}
              </HorizontalScroller>
            </section>
          );
        })}

        {/* Scale */}
        <section className="el__section">
          <motion.h2 className="el__section-title" initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp}>
            {c.scale.title}
          </motion.h2>
          <motion.div
            className="el__scale"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger(0.15)}
          >
            {c.scale.items.map((item) => (
              <motion.div className="el__scale-item" key={item.label} variants={fadeUp}>
                <p className="el__scale-number">{item.number}</p>
                <p className="el__scale-label body">{item.label}</p>
                <RedFil className="el__scale-fil" delay={0.25} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <div className="el__cta-wrap">
          {c.prevCta && (
            <MagneticButton
              href={c.prevCta.href}
              label={c.prevCta.label}
              className="el__cta"
              arrowColor="#3F5632"
              reverse
            />
          )}
          <MagneticButton href={c.cta.href} label={c.cta.label} className="el__cta" arrowColor="#3F5632" />
        </div>

        <Footer footer={t.footer} />
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onIndex={(i) => setLightbox((lb) => ({ ...lb, index: i }))}
        />
      )}
    </>
  );
}
