import { motion } from "framer-motion";
import "./Footer.css";

export default function Footer({ footer }) {
  return (
    <motion.footer
      className="site-footer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <p className="site-footer__copyright label">{footer.copyright}</p>

      <div className="site-footer__center">
        <p className="site-footer__name h3">samy achab</p>
        <div className="site-footer__info label">
          <a href="https://www.linkedin.com/in/samyachab/" target="_blank" rel="noopener">
            Linkedin
          </a>
          <a href="/assets/cv-samy-achab.pdf" target="_blank" rel="noopener">
            {footer.resumeLabel}
          </a>
          <a href="mailto:myachab@gmail.com">myachab@gmail.com</a>
          <span>+33 7 82 28 56 76</span>
        </div>
      </div>

      <img className="site-footer__icon" src="/assets/images/footer-icon.svg" alt="" />
    </motion.footer>
  );
}
