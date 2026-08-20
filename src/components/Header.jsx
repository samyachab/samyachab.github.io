import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Header.css";

export default function Header({ nav, langSwitch, current }) {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const highlighted = hovered ?? current;

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
      <div className="site-header__left">
        <a href={nav[0].href} className="site-header__logo h3">
          samy achab
        </a>
        <a href={langSwitch.href} className="site-header__lang label">
          {langSwitch.label}
        </a>
      </div>
      <nav className="site-header__nav" onMouseLeave={() => setHovered(null)}>
        {nav.map((link) => (
          <a
            key={link.key}
            href={link.href}
            className={`site-header__link label${link.key === current ? " site-header__link--active" : ""}`}
            onMouseEnter={() => setHovered(link.key)}
          >
            {link.label}
            {link.key === highlighted && (
              <motion.span
                layoutId="nav-indicator"
                className="site-header__indicator"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
          </a>
        ))}
      </nav>
    </header>
  );
}
