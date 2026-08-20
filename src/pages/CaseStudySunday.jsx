import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RedThread from "../components/RedThread";
import RedFil from "../components/RedFil";
import MagneticButton from "../components/MagneticButton";
import { content } from "../data/content";
import "./CaseStudySunday.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const viewport = { once: true, amount: 0.2 };
const stagger = (staggerChildren = 0.08) => ({ hidden: {}, show: { transition: { staggerChildren } } });

export default function CaseStudySunday({ locale }) {
  const t = content[locale];
  const c = t.caseSunday;

  return (
    <>
      <Header nav={t.nav} langSwitch={t.langSwitch} current="case-study" />

      <div className="sunday">
        <RedThread className="sunday__thread" src="/assets/images/sunday-bg-vector.svg" />

        {/* Hero */}
        <motion.section className="sunday__hero" initial="hidden" animate="show" variants={stagger(0.12)}>
          <motion.img className="sunday__logo" src={c.logo} alt="Sunday" variants={fadeUp} draggable={false} />
          <div className="sunday__hero-row">
            <motion.p className="sunday__tagline" variants={fadeUp}>
              {c.tagline}
            </motion.p>
            <motion.p className="sunday__confidential" variants={fadeUp}>
              {c.confidential}
            </motion.p>
          </div>
          <motion.div className="sunday__tags" variants={stagger(0.04)}>
            {c.tags.map((tag) => (
              <motion.span className="sunday__tag" key={tag} variants={fadeUp}>
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.section>

        {/* Sections, alternating left/right alignment */}
        {c.sections.map((section) => (
          <section className={`sunday__section sunday__section--${section.align}`} key={section.title}>
            <div className="sunday__section-inner">
              <motion.h2
                className="sunday__section-title"
                initial="hidden"
                whileInView="show"
                viewport={viewport}
                variants={fadeUp}
              >
                {section.title}
              </motion.h2>
              <motion.div
                className="sunday__blocks"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                variants={stagger(0.12)}
              >
                {section.blocks.map((block) => (
                  <motion.div className="sunday__block" key={block.title} variants={fadeUp}>
                    <h3 className="sunday__block-title">{block.title}</h3>
                    <p className="sunday__block-text body">{block.text}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        ))}

        {/* Results */}
        <section className="sunday__section">
          <div className="sunday__section-inner">
            <motion.h2 className="sunday__section-title" initial="hidden" whileInView="show" viewport={viewport} variants={fadeUp}>
              {c.results.title}
            </motion.h2>
            <motion.div
              className="sunday__results"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger(0.15)}
            >
              {c.results.items.map((item) => (
                <motion.div className="sunday__result" key={item.label} variants={fadeUp}>
                  <p className="sunday__result-number">{item.number}</p>
                  <p className="sunday__result-label body">{item.label}</p>
                  <RedFil className="sunday__result-fil" delay={0.25} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <div className="sunday__cta-wrap">
          {c.prevCta && (
            <MagneticButton
              href={c.prevCta.href}
              label={c.prevCta.label}
              className="sunday__cta"
              arrowColor="#3F5632"
              reverse
            />
          )}
          <MagneticButton href={c.cta.href} label={c.cta.label} className="sunday__cta" arrowColor="#3F5632" />
        </div>

        <Footer footer={t.footer} />
      </div>
    </>
  );
}
