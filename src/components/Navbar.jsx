import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaEnvelope,
  FaFolderOpen,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaTimes,
  FaTools,
  FaUser,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const MotionHeader = motion.header;
const MotionH1 = motion.h1;
const MotionLi = motion.li;
const MotionDiv = motion.div;

const navItems = [
  { id: "home", label: "Home", icon: FaHome },
  { id: "about", label: "About", icon: FaUser },
  { id: "skills", label: "Skills", icon: FaTools },
  { id: "projects", label: "Projects", icon: FaFolderOpen },
  { id: "contact", label: "Contact", icon: FaEnvelope },
];

const socialLinks = [
  {
    href: "https://github.com/Shumbham-Gupta",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/shubham16gupta/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
];

const drawerList = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.055, delayChildren: 0.12 },
  },
};

const drawerItem = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

const ThemeToggle = ({ isDark, onToggleTheme, labelVisible = false }) => (
  <button
    onClick={onToggleTheme}
    type="button"
    aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    title={`Switch to ${isDark ? "light" : "dark"} theme`}
    className="flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-toggle)] px-2 py-1.5 text-sm shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400"
  >
    {labelVisible && (
      <span className="pl-2 font-semibold text-[var(--color-text)]">
        {isDark ? "Dark mode" : "Light mode"}
      </span>
    )}
    <span className="relative flex h-7 w-14 items-center rounded-full">
      <span
        className={`absolute flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_12px_rgba(34,211,238,0.45)] transition-transform duration-300 ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {isDark ? <FaMoon size={14} /> : <FaSun size={14} />}
      </span>
    </span>
  </button>
);

const Navbar = ({ isDark, onToggleTheme }) => {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);
  const toggleNav = () => setNavOpen((current) => !current);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeNav();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  return (
    <>
    <MotionHeader
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-nav)] text-[var(--color-text)] backdrop-blur-md transition-colors duration-500 lg:backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <Link
          to="home"
          smooth
          duration={500}
          offset={-80}
          onClick={closeNav}
          className="min-w-0 cursor-pointer"
        >
          <MotionH1
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="truncate text-lg font-extrabold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 sm:text-2xl lg:text-3xl"
          >
            Shubham Gupta
          </MotionH1>
        </Link>

        <ul className="hidden items-center gap-1 rounded-full border border-[var(--color-border)] bg-white/10 p-1 text-sm font-semibold shadow-[var(--shadow-soft)] backdrop-blur lg:flex">
          {navItems.map((item) => (
            <MotionLi
              key={item.id}
              whileHover={{ y: -1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={item.id}
                smooth
                spy
                duration={500}
                offset={-76}
                activeClass="text-cyan-500"
                className="block cursor-pointer rounded-full px-4 py-2 text-[var(--color-text)] transition-all hover:bg-cyan-500/10 hover:text-cyan-500"
              >
                {item.label}
              </Link>
            </MotionLi>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-purple-500 transition-all hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-500"
              aria-label={label}
            >
              {React.createElement(Icon)}
            </a>
          ))}
          <ThemeToggle isDark={isDark} onToggleTheme={onToggleTheme} />
        </div>

        <button
          onClick={toggleNav}
          type="button"
          aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={navOpen}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-toggle)] text-lg text-[var(--color-text)] shadow-[var(--shadow-soft)] transition-all hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 sm:h-11 sm:w-11 sm:text-xl lg:hidden"
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </MotionHeader>

    <AnimatePresence>
        {navOpen && (
          <>
            <MotionDiv
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[55] bg-slate-950/60 lg:hidden"
              onClick={closeNav}
            ></MotionDiv>

            <MotionDiv
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={{ left: 0, right: 0.4 }}
              onDragEnd={(event, info) => {
                if (info.offset.x > 90 || info.velocity.x > 500) {
                  closeNav();
                }
              }}
              className="fixed inset-y-0 right-0 z-[60] flex w-[86%] max-w-sm touch-pan-y flex-col border-l border-[var(--color-border)] bg-[var(--color-mobile-menu)] pb-[env(safe-area-inset-bottom)] shadow-[-12px_0_40px_rgb(0_0_0/0.35)] lg:hidden"
            >
              <span className="absolute left-2 top-1/2 h-12 w-1 -translate-y-1/2 rounded-full bg-[var(--color-border)]"></span>

              <div className="flex items-center justify-between gap-4 border-b border-[var(--color-border)] px-5 py-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-500">
                    Menu
                  </p>
                  <p className="mt-1 text-lg font-bold text-[var(--color-text)]">
                    Shubham Gupta
                  </p>
                </div>
                <button
                  onClick={closeNav}
                  type="button"
                  aria-label="Close navigation menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-toggle)] text-[var(--color-text)] transition hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <FaTimes />
                </button>
              </div>

              <MotionDiv
                variants={drawerList}
                initial="hidden"
                animate="visible"
                className="flex-1 overflow-y-auto px-4 py-4"
              >
                <div className="grid gap-1.5">
                  {navItems.map(({ id, label, icon }) => (
                    <MotionDiv key={id} variants={drawerItem}>
                      <Link
                        onClick={closeNav}
                        to={id}
                        smooth
                        spy
                        duration={500}
                        offset={-72}
                        activeClass="border-cyan-400 bg-cyan-500/10 text-cyan-500"
                        className="flex cursor-pointer items-center gap-4 rounded-2xl border border-transparent px-4 py-3.5 text-base font-semibold text-[var(--color-text)] transition-colors active:bg-cyan-500/10 hover:border-cyan-400/50 hover:text-cyan-500"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-purple-600/20 to-cyan-500/20 text-sm text-cyan-500">
                          {React.createElement(icon)}
                        </span>
                        {label}
                      </Link>
                    </MotionDiv>
                  ))}
                </div>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="border-t border-[var(--color-border)] px-4 py-4"
              >
                <div className="mb-3 flex items-center justify-between gap-4 rounded-2xl border border-[var(--color-border)] bg-white/10 px-4 py-3">
                  <p className="text-sm font-semibold text-[var(--color-text)]">Theme</p>
                  <ThemeToggle isDark={isDark} onToggleTheme={onToggleTheme} />
                </div>

                <div className="flex gap-3">
                  {socialLinks.map(({ href, label, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-cyan-400 hover:text-cyan-500"
                      aria-label={label}
                    >
                      {React.createElement(Icon)}
                      {label}
                    </a>
                  ))}
                </div>
              </MotionDiv>
            </MotionDiv>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
