import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RedThread from "../components/RedThread";
import { content } from "../data/content";
import "./About.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const introStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const sectionTitle = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const eduList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.05 } },
};

const eduIcon = {
  hidden: { opacity: 0, scale: 0.3, rotate: -35 },
  show: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 260, damping: 14 } },
};

const eduContent = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function About({ locale }) {
  const t = content[locale];
  const a = t.about;
  const c = a.contact;

  return (
    <>
      <Header nav={t.nav} langSwitch={t.langSwitch} current="about" />

      <div className="about">
        <RedThread className="about__thread" src="/assets/images/about-bg-vector.svg" />

        <motion.div
          className="about__head"
          initial="hidden"
          animate="show"
          variants={introStagger}
        >
          <motion.h1 className="about__title h1" variants={fadeUp}>
            {a.title}
          </motion.h1>
          <motion.p className="about__subtitle sous-titre" variants={fadeUp}>
            {a.subtitle}
          </motion.p>
        </motion.div>

        <section className="about__introduction">
          <motion.h2
            className="about__section-title h2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionTitle}
          >
            {a.introTitle}
          </motion.h2>

          <div className="about__intro-body">
            <motion.div
              className="about__intro-text"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={introStagger}
            >
              {a.introBody.map((para, i) => (
                <motion.p key={i} className="about__intro-para body" variants={fadeUp}>
                  {para}
                </motion.p>
              ))}
            </motion.div>

            <motion.img
              className="about__portrait"
              src={a.portrait}
              alt=""
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </section>

        <section className="about__contact">
          <motion.h2
            className="about__section-title h2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionTitle}
          >
            {a.contactTitle}
          </motion.h2>

          <motion.div
            className="about__contact-info sous-titre"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            variants={introStagger}
          >
            <motion.a
              className="about__contact-link"
              href={c.linkedinHref}
              target="_blank"
              rel="noopener"
              variants={fadeUp}
            >
              {c.linkedinLabel}
            </motion.a>
            <motion.a
              className="about__contact-link"
              href={c.resumeHref}
              target="_blank"
              rel="noopener"
              variants={fadeUp}
            >
              {c.resumeLabel}
            </motion.a>
            <motion.a className="about__contact-link" href={`mailto:${c.email}`} variants={fadeUp}>
              {c.email}
            </motion.a>
            <motion.span className="about__contact-phone" variants={fadeUp}>
              {c.phone}
            </motion.span>
          </motion.div>
        </section>

        <section className="about__education">
          <motion.img
            className="about__bridge"
            src="/assets/images/sfbridge.png"
            alt=""
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="about__education-inner">
            <motion.h2
              className="about__section-title h2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              variants={sectionTitle}
            >
              {a.educationTitle}
            </motion.h2>

            <div className="about__education-list">
              {a.education.map((item) => (
                <motion.div
                  className="about__education-item"
                  key={item.degree}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={eduList}
                >
                  <motion.img
                    className="about__education-icon"
                    src="/assets/images/athlete-dot.svg"
                    alt=""
                    variants={eduIcon}
                  />
                  <motion.div className="about__education-content" variants={eduContent}>
                    <p className="about__education-degree h3">{item.degree}</p>
                    <p className="about__education-school sous-titre">{item.school}</p>
                    <p className="about__education-dates sous-titre">{item.dates}</p>
                    <p className="about__education-desc body">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <motion.div
          className="about__logos"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={introStagger}
        >
          {a.logos.map((logo) => (
            <motion.img
              key={logo.src}
              className="about__logo"
              src={logo.src}
              alt={logo.alt}
              variants={fadeUp}
            />
          ))}
        </motion.div>

        <motion.p
          className="about__closing sous-titre"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {a.closing}
        </motion.p>

        <Footer footer={t.footer} />
      </div>
    </>
  );
}
