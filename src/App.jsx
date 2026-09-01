import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { MotionConfig, motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AIAssistantWidget from "./components/AIAssistantWidget";
import ResumeModal from "./components/ResumeModal";
import ProjectModal from "./components/ProjectModal";
import CommandPalette from "./components/CommandPalette";

// Pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import CertificationsPage from "./pages/CertificationsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";

// Scroll to top on route change
function ScrollToTopOnRoute() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
};

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme;
    }

    return "light";
  });

  const isDark = theme === "dark";
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [isDark, theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTopOnRoute />
      <div className="min-h-screen flex flex-col bg-[var(--color-page)] text-[var(--color-text)] transition-colors duration-500">
        {/* Top Scroll Reading Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 z-50 origin-left shadow-[0_0_12px_rgba(34,211,238,0.8)]"
          style={{ scaleX }}
        />

        <Navbar
          isDark={isDark}
          onToggleTheme={toggleTheme}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        />

        <main className="flex-1 pt-14 sm:pt-16 lg:pt-18">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <motion.div {...pageTransition}>
                    <Home onOpenResume={() => setIsResumeOpen(true)} />
                  </motion.div>
                }
              />
              <Route
                path="/about"
                element={
                  <motion.div {...pageTransition}>
                    <AboutPage />
                  </motion.div>
                }
              />
              <Route
                path="/skills"
                element={
                  <motion.div {...pageTransition}>
                    <SkillsPage />
                  </motion.div>
                }
              />
              <Route
                path="/projects"
                element={
                  <motion.div {...pageTransition}>
                    <ProjectsPage />
                  </motion.div>
                }
              />
              <Route
                path="/certifications"
                element={
                  <motion.div {...pageTransition}>
                    <CertificationsPage />
                  </motion.div>
                }
              />
              <Route
                path="/experience"
                element={
                  <motion.div {...pageTransition}>
                    <ExperiencePage />
                  </motion.div>
                }
              />
              <Route
                path="/contact"
                element={
                  <motion.div {...pageTransition}>
                    <ContactPage />
                  </motion.div>
                }
              />
              <Route
                path="*"
                element={
                  <motion.div {...pageTransition}>
                    <Home onOpenResume={() => setIsResumeOpen(true)} />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
        <AIAssistantWidget
          isDark={isDark}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenProject={(proj) => setSelectedProject(proj)}
        />

        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
          isDark={isDark}
          onToggleTheme={toggleTheme}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      </div>
    </MotionConfig>
  );
}

export default App;
