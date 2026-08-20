import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RedThread from "../components/RedThread";
import RedFil from "../components/RedFil";
import MagneticButton from "../components/MagneticButton";
import Lightbox from "../components/Lightbox";
import { content } from "../data/content";
import "./CaseStudyIko.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const viewport = { once: true, amount: 0.2 };

// Pin the problem/solution section on desktop only.
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
const stagger = (staggerChildren = 0.08) => ({ hidden: {}, show: { transition: { staggerChildren } } });

// Simple browser-chrome frame for the product mockups.
function BrowserFrame({ src, onClick, className = "" }) {
  return (
    <div className={`iko-frame ${className}`}>
      <div className="iko-frame__bar">
        <span />
        <span />
        <span />
      </div>
      <img className="iko-frame__img" src={src} alt="" draggable={false} onClick={onClick} />
    </div>
  );
}

export default function CaseStudyIko({ locale }) {
  const t = content[locale];
  const c = t.caseIko;

  const home = c.product.mockups[0].src; // portrait homepage
  const dash = c.product.mockups[1].src; // landscape dashboard
  const lbImages = [c.logoDesign.image, home, dash];
  const [lb, setLb] = useState(null);

  // Parallax for the overlapping product composition.
  const overlapRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: overlapRef, offset: ["start end", "end start"] });
  const yBase = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yOver = useTransform(scrollYProgress, [0, 1], [-55, 55]);

  // Pinned problem/solution: scroll progress reveals the 3 solutions in turn,
  // and the section unpins right after the last one lands.
  const isDesktop = useIsDesktop();
  const pinRef = useRef(null);
  const { scrollYProgress: pbP } = useScroll({ target: pinRef, offset: ["start start", "end end"] });
  // Latched reveal: crossing each threshold (scrolling down) reveals a solution
  // that then STAYS; the count only drops when scrolling back up past it.
  const [revealed, setRevealed] = useState(0);
  useMotionValueEvent(pbP, "change", (v) => {
    const n = v >= 0.68 ? 3 : v >= 0.4 ? 2 : v >= 0.12 ? 1 : 0;
    setRevealed((prev) => (prev === n ? prev : n));
  });

  return (
    <>
      <Header nav={t.nav} langSwitch={t.langSwitch} current="case-study" />

      <div className="iko">
        <RedThread className="iko__thread" src="/assets/images/case-study-thread.svg" />

        {/* Hero */}
        <motion.section className="iko__hero" initial="hidden" animate="show" variants={stagger(0.12)}>
          <motion.img className="iko__logo" src={c.logo} alt="IKO" variants={fadeUp} draggable={false} />
          <motion.p className="iko__tagline" variants={fadeUp}>
            {c.tagline}
          </motion.p>
          <motion.div className="iko__tags" variants={stagger(0.05)}>
            {c.tags.map((tag) => (
              <motion.span className="iko__tag" key={tag} variants={fadeUp}>
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.section>

        {/* Logo design */}
        <section className="iko__section">
          <motion.h2 className="iko__section-title" initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp}>
            {c.logoDesign.title}
          </motion.h2>
          <div className="iko__logo-design">
            <motion.img
              className="iko__logo-image"
              src={c.logoDesign.image}
              alt=""
              draggable={false}
              onClick={() => setLb(0)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.p className="iko__logo-text body" initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp}>
              {c.logoDesign.text}
            </motion.p>
          </div>
        </section>

        {/* Problem -> Solution comparison (pinned; solutions reveal on scroll) */}
        <section className="iko__pbsol-outer">
          <div className="iko__pbsol-pin" ref={pinRef}>
            <div className="iko__pbsol-sticky">
              <h2 className="iko__section-title iko__pbsol-title">{c.pbSolution.title}</h2>
              <div className="iko__pbsol">
                <div className="iko__pbsol-row iko__pbsol-headrow">
                  <span className="iko__pbsol-collabel">{c.pbSolution.problemLabel}</span>
                  <span className="iko__pbsol-collabel iko__pbsol-collabel--sol">{c.pbSolution.solutionLabel}</span>
                </div>
                {c.pbSolution.rows.map((row, i) => (
                  <div className="iko__pbsol-row" key={row.actor}>
                    <div className="iko__pbsol-cell iko__pbsol-cell--problem">
                      <h3 className="iko__pbsol-actor">{row.actor}</h3>
                      {row.problems.map((p) => (
                        <div className="iko__pbsol-pb" key={p.name}>
                          <p className="iko__pbsol-name">{p.name}</p>
                          <p className="iko__pbsol-text body">{p.text}</p>
                        </div>
                      ))}
                    </div>
                    <motion.div
                      className="iko__pbsol-cell iko__pbsol-cell--solution"
                      initial={isDesktop ? { opacity: 0, x: 70 } : false}
                      animate={
                        isDesktop
                          ? { opacity: i < revealed ? 1 : 0, x: i < revealed ? 0 : 70 }
                          : { opacity: 1, x: 0 }
                      }
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="iko__pbsol-text body">{row.solution}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product preview — overlapping composition (home large, dashboard over) */}
        <section className="iko__product iko__product--dark">
          <div className="iko__product-inner">
            <motion.h2 className="iko__product-title" initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp}>
              {c.product.title}
            </motion.h2>
            <div className="iko__overlap" ref={overlapRef}>
              <motion.div className="iko__overlap-base" style={{ y: yBase }}>
                <BrowserFrame src={home} onClick={() => setLb(1)} />
              </motion.div>
              <motion.div className="iko__overlap-over" style={{ y: yOver }}>
                <BrowserFrame src={dash} onClick={() => setLb(2)} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3 key differentiators */}
        <section className="iko__section">
          <motion.h2 className="iko__section-title" initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp}>
            {c.differentiators.title}
          </motion.h2>
          <motion.div
            className="iko__diffs"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger(0.15)}
          >
            {c.differentiators.items.map((item) => (
              <motion.div className="iko__diff" key={item.title} variants={fadeUp}>
                <h3 className="iko__diff-title">{item.title}</h3>
                <p className="iko__diff-text body">{item.text}</p>
                <RedFil className="iko__diff-fil" delay={0.25} />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Current status */}
        <section className="iko__section">
          <motion.h2 className="iko__section-title" initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp}>
            {c.status.title}
          </motion.h2>
          <motion.div
            className="iko__status"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger(0.12)}
          >
            {c.status.items.map((item) => (
              <motion.div className="iko__status-row" key={item.label} variants={fadeUp}>
                <img className="iko__status-drop" src="/assets/images/athlete-dot.svg" alt="" draggable={false} />
                <span className="iko__status-number">{item.number}</span>
                <span className="iko__status-label body">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <div className="iko__cta-wrap">
          <MagneticButton href={c.cta.href} label={c.cta.label} className="iko__cta" arrowColor="#3F5632" />
        </div>

        <Footer footer={t.footer} />
      </div>

      {lb !== null && (
        <Lightbox images={lbImages} index={lb} onClose={() => setLb(null)} onIndex={(i) => setLb(i)} />
      )}
    </>
  );
}
