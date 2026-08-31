import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaEnvelope,
  FaFolderOpen,
  FaGithub,
  FaGraduationCap,
  FaHome,
  FaLinkedin,
  FaMoon,
  FaSun,
  FaTimes,
  FaTools,
  FaUser,
  FaFilePdf,
  FaCertificate,
  FaSearch,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const MotionHeader = motion.header;
const MotionH1 = motion.h1;
const MotionLi = motion.li;
const MotionDiv = motion.div;

const navItems = [
  { path: "/", label: "Home", icon: FaHome },
  { path: "/about", label: "About", icon: FaUser },
  { path: "/skills", label: "Skills", icon: FaTools },
  { path: "/projects", label: "Projects", icon: FaFolderOpen },
  { path: "/certifications", label: "Certifications", icon: FaCertificate },
  { path: "/experience", label: "Experience", icon: FaGraduationCap },
  { path: "/contact", label: "Contact", icon: FaEnvelope },
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

const Navbar = ({ isDark, onToggleTheme, onOpenResume, onOpenCommandPalette }) => {
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
        <nav className="mx-auto flex h-16 max-w-[1560px] items-center justify-between gap-2 px-2 sm:px-4 lg:px-5 sm:h-[72px]">
          <Link
            to="/"
            onClick={closeNav}
            className="group flex items-center gap-2 min-w-0 cursor-pointer shrink-0"
          >
            <MotionDiv
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/40 bg-linear-to-br from-purple-600/30 via-slate-900 to-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400 group-hover:shadow-[0_0_22px_rgba(34,211,238,0.55)] sm:h-10 sm:w-10"
            >
              <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-black tracking-tighter text-sm sm:text-base">
                SG
              </span>
            </MotionDiv>
            <MotionH1
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col min-w-0 font-['Plus_Jakarta_Sans',sans-serif]"
            >
              <span className="truncate text-base font-extrabold tracking-tight text-[var(--color-text)] transition-colors duration-300 group-hover:text-cyan-400 sm:text-lg lg:text-xl">
                Shubham <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Gupta</span>
              </span>
              <span className="hidden text-[9px] font-bold uppercase tracking-[0.22em] text-cyan-400/80 sm:block font-['Inter',sans-serif]">
                Full Stack Developer
              </span>
            </MotionH1>
          </Link>

          <ul className="hidden items-center gap-0.5 xl:gap-1 rounded-full border border-[var(--color-border)] bg-white/10 p-1 text-sm font-semibold shadow-[var(--shadow-soft)] backdrop-blur lg:flex">
            {navItems.map((item) => (
              <MotionLi
                key={item.path}
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `block cursor-pointer rounded-full px-2.5 py-1.5 transition-all text-xs xl:text-sm font-semibold ${
                      isActive
                        ? "bg-cyan-500/15 text-cyan-400 border border-cyan-400/30 shadow-[0_0_12px_rgba(34,211,238,0.25)]"
                        : "text-[var(--color-text)] hover:bg-cyan-500/10 hover:text-cyan-400 border border-transparent"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </MotionLi>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex shrink-0">
            <button
              type="button"
              onClick={onOpenCommandPalette}
              title="Open Command Search (Ctrl+K)"
              className="inline-flex items-center justify-between gap-2.5 rounded-full border border-[var(--color-border)] bg-white/5 pl-3 pr-2 py-1.5 text-xs text-[var(--color-muted)] hover:border-cyan-400 hover:text-cyan-400 transition-all hover:scale-105 min-w-[130px] xl:min-w-[190px]"
            >
              <div className="flex items-center gap-2">
                <FaSearch className="text-[11px] text-cyan-400" />
                <span className="text-xs text-[var(--color-subtle)] font-medium">Search...</span>
              </div>
              <kbd className="rounded border border-[var(--color-border)] bg-white/10 px-1.5 py-0.5 text-[10px] font-mono text-[var(--color-muted)]">
                Ctrl K
              </kbd>
            </button>

            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-400 transition-all hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-105"
            >
              <FaFilePdf className="text-xs" />
              <span>Resume</span>
            </button>
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] text-purple-500 transition-all hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-500"
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
              className="fixed inset-y-0 right-0 z-[60] flex w-full max-w-xs flex-col border-l border-[var(--color-border)] bg-[var(--color-nav)] text-[var(--color-text)] shadow-2xl backdrop-blur-xl sm:max-w-sm lg:hidden"
            >
              <div className="flex h-16 items-center justify-between border-b border-[var(--color-border)] px-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/40 bg-linear-to-br from-purple-600/30 via-slate-900 to-cyan-500/30 text-xs font-black">
                    <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">SG</span>
                  </div>
                  <div>
                    <p className="text-base font-extrabold text-[var(--color-text)] font-['Plus_Jakarta_Sans',sans-serif]">
                      Shubham <span className="bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Gupta</span>
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-500 mt-1">
                      Full Stack Developer
                    </p>
                  </div>
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
                  {navItems.map(({ path, label, icon }) => (
                    <MotionDiv key={path} variants={drawerItem}>
                      <NavLink
                        onClick={closeNav}
                        to={path}
                        end={path === "/"}
                        className={({ isActive }) =>
                          `flex cursor-pointer items-center gap-4 rounded-2xl border px-4 py-3.5 text-base font-semibold transition-colors ${
                            isActive
                              ? "border-cyan-400 bg-cyan-500/10 text-cyan-400"
                              : "border-transparent text-[var(--color-text)] hover:border-cyan-400/50 hover:text-cyan-400"
                          }`
                        }
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-purple-600/20 to-cyan-500/20 text-sm text-cyan-400">
                          {React.createElement(icon)}
                        </span>
                        {label}
                      </NavLink>
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
                <button
                  type="button"
                  onClick={() => {
                    closeNav();
                    if (onOpenResume) onOpenResume();
                  }}
                  className="mb-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-cyan-400/40 bg-cyan-500/15 py-3 text-sm font-bold text-cyan-400 shadow-sm transition-colors hover:bg-cyan-500/25"
                >
                  <FaFilePdf className="text-base" />
                  Preview Resume / CV
                </button>

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
