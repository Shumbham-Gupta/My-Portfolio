import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const MotionHeader = motion.header;
const MotionH1 = motion.h1;
const MotionLi = motion.li;
const MotionDiv = motion.div;

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
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
    <MotionHeader
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-nav)] text-[var(--color-text)] backdrop-blur-xl transition-all duration-500"
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
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
            className="truncate text-xl font-extrabold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 sm:text-2xl lg:text-3xl"
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
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-toggle)] text-xl text-[var(--color-text)] shadow-[var(--shadow-soft)] transition-all hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 lg:hidden"
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <AnimatePresence>
        {navOpen && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 bottom-0 top-[72px] z-40 bg-slate-950/30 px-4 py-4 backdrop-blur-sm lg:hidden"
            onClick={closeNav}
          >
            <MotionDiv
              initial={{ opacity: 0, x: 28, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 28, scale: 0.98 }}
              transition={{ duration: 0.24 }}
              onClick={(event) => event.stopPropagation()}
              className="ml-auto flex max-h-[calc(100vh-104px)] w-full max-w-[360px] flex-col gap-5 overflow-y-auto rounded-3xl border border-[var(--color-border)] bg-[var(--color-mobile-menu)] p-4 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-start justify-between gap-4 border-b border-[var(--color-border)] pb-4">
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

              <div className="grid gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    onClick={closeNav}
                    to={item.id}
                    smooth
                    spy
                    duration={500}
                    offset={-76}
                    activeClass="text-cyan-500"
                    className="cursor-pointer rounded-2xl border border-[var(--color-border)] bg-linear-to-r from-purple-700/10 to-cyan-700/10 px-4 py-3 text-base font-semibold text-[var(--color-text)] transition-all hover:border-cyan-400 hover:text-cyan-500"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="rounded-2xl border border-[var(--color-border)] bg-white/10 p-4">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text)]">Theme</p>
                  </div>
                  <ThemeToggle
                    isDark={isDark}
                    onToggleTheme={onToggleTheme}
                  />
                </div>

                <div className="flex gap-3">
                  {socialLinks.map(({ href, label, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm font-semibold text-[var(--color-text)] transition-all hover:border-cyan-400 hover:text-cyan-500"
                      aria-label={label}
                    >
                      {React.createElement(Icon)}
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </MotionDiv>
          </MotionDiv>
        )}
      </AnimatePresence>
    </MotionHeader>
  );
};

export default Navbar;
