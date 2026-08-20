import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import CaseStudyIko from "./pages/CaseStudyIko";
import CaseStudySunday from "./pages/CaseStudySunday";
import CaseStudyEightlines from "./pages/CaseStudyEightlines";
import CaseStudyOsme from "./pages/CaseStudyOsme";
import Athlete from "./pages/Athlete";
import About from "./pages/About";
import Creations from "./pages/Creations";
import CustomCursor from "./components/CustomCursor";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.35 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Routes location={location}>
          <Route path="/" element={<Home locale="en" />} />
          <Route path="/fr" element={<Home locale="fr" />} />
          <Route path="/case-study" element={<CaseStudy locale="en" />} />
          <Route path="/fr/case-study" element={<CaseStudy locale="fr" />} />
          <Route path="/case-study-iko" element={<CaseStudyIko locale="en" />} />
          <Route path="/fr/case-study-iko" element={<CaseStudyIko locale="fr" />} />
          <Route path="/case-study-sunday" element={<CaseStudySunday locale="en" />} />
          <Route path="/fr/case-study-sunday" element={<CaseStudySunday locale="fr" />} />
          <Route path="/case-study-eightlines" element={<CaseStudyEightlines locale="en" />} />
          <Route path="/fr/case-study-eightlines" element={<CaseStudyEightlines locale="fr" />} />
          <Route path="/case-study-osme" element={<CaseStudyOsme locale="en" />} />
          <Route path="/fr/case-study-osme" element={<CaseStudyOsme locale="fr" />} />
          <Route path="/athlete" element={<Athlete locale="en" />} />
          <Route path="/fr/athlete" element={<Athlete locale="fr" />} />
          <Route path="/about" element={<About locale="en" />} />
          <Route path="/fr/about" element={<About locale="fr" />} />
          <Route path="/creations" element={<Creations locale="en" />} />
          <Route path="/fr/creations" element={<Creations locale="fr" />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HashRouter>
      <CustomCursor />
      <AnimatedRoutes />
    </HashRouter>
  );
}
