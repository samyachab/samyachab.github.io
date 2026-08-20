import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RedThread from "../components/RedThread";
import HorizontalScroller from "../components/HorizontalScroller";
import Lightbox from "../components/Lightbox";
import { content } from "../data/content";
import "./Creations.css";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const viewport = { once: true, amount: 0.3 };

// Thumbnails cascade in when their row scrolls into view.
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

// A horizontal gallery whose photos cascade in and open the lightbox on click.
function Gallery({ images, skipIndex = -1, onOpen }) {
  return (
    <HorizontalScroller className="creations__gallery" anim={galleryAnim}>
      {images.map((src, ci) =>
        ci === skipIndex ? null : (
          <motion.img
            key={src}
            className="creations__photo"
            src={src}
            alt=""
            draggable={false}
            variants={galleryItem}
            onClick={() => onOpen(ci)}
          />
        )
      )}
    </HorizontalScroller>
  );
}

// A large feature photo kept whole, revealed with a gentle fade + settle.
function Hero({ src, onClick }) {
  return (
    <div className="creations__feature-hero-wrap">
      <motion.img
        className="creations__feature-hero"
        src={src}
        alt=""
        draggable={false}
        onClick={onClick}
        initial={{ opacity: 0, y: 30, scale: 1.04 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

export default function Creations({ locale }) {
  const t = content[locale];
  const c = t.creations;
  const [lightbox, setLightbox] = useState(null);
  const [activePoster, setActivePoster] = useState(null);

  // On touch devices (no hover), tapping a poster toggles its description overlay.
  const togglePoster = (title) => {
    if (window.matchMedia("(hover: none)").matches) {
      setActivePoster((cur) => (cur === title ? null : title));
    }
  };

  return (
    <>
      <Header nav={t.nav} langSwitch={t.langSwitch} current="creations" />

      <div className="creations">
        <RedThread className="creations__thread" src="/assets/images/creations-bg-vector.svg" />

        <motion.div
          className="creations__head"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
        >
          <motion.h1 className="creations__title h1" variants={fadeUp}>
            {c.title}
          </motion.h1>
          <motion.p className="creations__subtitle sous-titre" variants={fadeUp}>
            {c.subtitle}
          </motion.p>
        </motion.div>

        {/* Posters */}
        <section className="creations__section">
          <motion.div
            className="creations__section-head"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h2 className="creations__section-title" variants={fadeUp}>
              {c.posters.title}
            </motion.h2>
            <motion.p className="creations__section-desc body" variants={fadeUp}>
              {c.posters.description}
            </motion.p>
          </motion.div>

          <HorizontalScroller className="creations__posters" speed={0.25}>
            {c.posters.items.map((item) => (
              <div className="creations__poster" key={item.title}>
                <div
                  className={`creations__poster-frame${activePoster === item.title ? " is-active" : ""}`}
                  onClick={() => togglePoster(item.title)}
                >
                  <img className="creations__poster-img" src={item.src} alt={item.title} draggable={false} />
                  <div className="creations__poster-overlay">
                    <p className="creations__poster-desc">{item.desc}</p>
                  </div>
                </div>
                <p className="creations__poster-title">{item.title}</p>
              </div>
            ))}
          </HorizontalScroller>
        </section>

        {/* Film photo series */}
        <section className="creations__section">
          <motion.div
            className="creations__section-head"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={{ hidden: {}, show: {} }}
          >
            <motion.h2 className="creations__section-title" variants={fadeUp}>
              {c.filmTitle}
            </motion.h2>
          </motion.div>

          {c.series.map((serie) =>
            serie.layout === "split" ? (
              /* China: two labelled parts (portraits / landscapes) with a
                 full-width landscape band bridging them. */
              <div className="creations__series" key={serie.title}>
                <motion.div
                  className="creations__series-head"
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  variants={{ hidden: {}, show: {} }}
                >
                  <motion.h3 className="creations__series-title" variants={fadeUp}>
                    {serie.title}
                  </motion.h3>
                </motion.div>

                {[serie.portraits, serie.landscapes].map((part) => (
                  <div className="creations__part" key={part.label}>
                    <motion.div
                      className="creations__part-head"
                      initial="hidden"
                      whileInView="show"
                      viewport={viewport}
                      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                    >
                      <motion.h4 className="creations__part-title" variants={fadeUp}>
                        {part.label}
                      </motion.h4>
                      <motion.p className="creations__series-desc body" variants={fadeUp}>
                        {part.text}
                      </motion.p>
                    </motion.div>

                    <Hero
                      src={part.images[part.heroIndex]}
                      onClick={() => setLightbox({ images: part.images, index: part.heroIndex })}
                    />

                    <Gallery
                      images={part.images}
                      skipIndex={part.heroIndex}
                      onOpen={(i) => setLightbox({ images: part.images, index: i })}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="creations__series" key={serie.title}>
                <motion.div
                  className="creations__series-head"
                  initial="hidden"
                  whileInView="show"
                  viewport={viewport}
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                >
                  <motion.h3 className="creations__series-title" variants={fadeUp}>
                    {serie.title}
                  </motion.h3>
                  <motion.p className="creations__series-desc body" variants={fadeUp}>
                    {serie.description}
                  </motion.p>
                </motion.div>

                {serie.feature === "hero" && (
                  <Hero
                    src={serie.rows[0][serie.heroIndex]}
                    onClick={() => setLightbox({ images: serie.rows[0], index: serie.heroIndex })}
                  />
                )}

                {serie.rows.map((row, ri) => (
                  <Gallery
                    key={ri}
                    images={row}
                    skipIndex={serie.feature === "hero" && ri === 0 ? serie.heroIndex : -1}
                    onOpen={(i) => setLightbox({ images: row, index: i })}
                  />
                ))}
              </div>
            )
          )}
        </section>

        {/* Videos */}
        <section className="creations__section creations__section--videos">
          <motion.div
            className="creations__section-head"
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={{ hidden: {}, show: {} }}
          >
            <motion.h2 className="creations__section-title" variants={fadeUp}>
              {c.videos.title}
            </motion.h2>
          </motion.div>

          <motion.div
            className="creations__videos-body"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {c.videos.video && (
              <video
                className="creations__video"
                src={c.videos.video}
                controls
                playsInline
                preload="metadata"
              />
            )}

            <div className="creations__videos-text-col">
              <p className="creations__videos-text body">
                {c.videos.description.map((seg, i) =>
                  typeof seg === "string" ? (
                    seg
                  ) : (
                    <a
                      key={i}
                      className="creations__inline-link"
                      href={seg.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {seg.label}
                    </a>
                  )
                )}
              </p>

              {c.videos.socials && (
                <div className="creations__socials">
                  {c.videos.socials.map((s) => (
                    <a
                      key={s.label}
                      className="creations__social"
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                    >
                      <span
                        className="creations__social-icon"
                        style={{ WebkitMaskImage: `url(${s.icon})`, maskImage: `url(${s.icon})` }}
                      />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </section>

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
