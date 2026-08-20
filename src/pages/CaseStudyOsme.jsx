import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RedThread from "../components/RedThread";
import MagneticButton from "../components/MagneticButton";
import Lightbox from "../components/Lightbox";
import { content } from "../data/content";
import "./CaseStudyOsme.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const viewport = { once: true, amount: 0.2 };
const stagger = (staggerChildren = 0.08) => ({ hidden: {}, show: { transition: { staggerChildren } } });

export default function CaseStudyOsme({ locale }) {
  const t = content[locale];
  const c = t.caseOsme;
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <Header nav={t.nav} langSwitch={t.langSwitch} current="case-study" />

      <div className="osme">
        <RedThread className="osme__thread" src="/assets/images/osme-bg-vector.svg" />

        {/* Hero */}
        <motion.section className="osme__hero" initial="hidden" animate="show" variants={stagger(0.12)}>
          <motion.img className="osme__logo" src={c.logo} alt="OSME" variants={fadeUp} draggable={false} />
          <motion.p className="osme__tagline" variants={fadeUp}>
            {c.tagline}
          </motion.p>
          <motion.div className="osme__tags" variants={stagger(0.04)}>
            {c.tags.map((tag) => (
              <motion.span className="osme__tag" key={tag} variants={fadeUp}>
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.section>

        {/* Text sections + overlapping frame composition */}
        <section className="osme__main">
          <motion.div
            className="osme__sections"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger(0.15)}
          >
            {c.sections.map((s) => (
              <motion.div className="osme__block" key={s.title} variants={fadeUp}>
                <h2 className="osme__block-title">{s.title}</h2>
                <p className="osme__block-text body">{s.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="osme__frames">
            {c.frames.map((src, i) => (
              <motion.img
                key={src}
                className={`osme__frame osme__frame--${i}`}
                src={src}
                alt=""
                draggable={false}
                onClick={() => setLightbox({ images: c.frames, index: i })}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                whileHover={{ y: -10, zIndex: 10 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}
          </div>
        </section>

        {/* Supporting photos */}
        <motion.div
          className="osme__photos"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger(0.08)}
        >
          {c.photos.map((src, i) => (
            <motion.img
              key={src}
              className="osme__photo"
              src={src}
              alt=""
              draggable={false}
              variants={fadeUp}
              onClick={() => setLightbox({ images: c.photos, index: i })}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <div className="osme__cta-wrap">
          {c.prevCta && (
            <MagneticButton
              href={c.prevCta.href}
              label={c.prevCta.label}
              className="osme__cta"
              arrowColor="#3F5632"
              reverse
            />
          )}
          <MagneticButton href={c.cta.href} label={c.cta.label} className="osme__cta" arrowColor="#3F5632" />
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
