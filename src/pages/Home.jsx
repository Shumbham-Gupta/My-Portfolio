import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import {
  FaArrowRight,
  FaCode,
  FaFolderOpen,
  FaGraduationCap,
  FaCertificate,
  FaEnvelope,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaFilePdf,
  FaBolt,
  FaRocket,
  FaBriefcase,
} from "react-icons/fa";

// Teaser projects for landing page
import taskinfusImg from "../assets/project_taskinfus.png";
import expenseImg from "../assets/project_ai_expense_tracker.png";
import launchedImg from "../assets/project_launched_global.png";

const metrics = [
  { label: "Built & Deployed", value: "9+ Projects", sub: "MERN, Python & BI", path: "/projects" },
  { label: "Current Position", value: "Full Stack Dev", sub: "LaunchEd Global", path: "/experience" },
  { label: "Core Expertise", value: "React 19 & Node", sub: "Express, Mongo, APIs", path: "/skills" },
  { label: "Hiring Availability", value: "Open for Hire", sub: "Full-Time / Remote", path: "/contact" },
];

const recruiterShortcuts = [
  { label: "Preview Resume", icon: FaFilePdf, isResume: true },
  { label: "All 9 Projects", icon: FaFolderOpen, path: "/projects" },
  { label: "Career Journey", icon: FaBriefcase, path: "/experience" },
  { label: "Skills Matrix", icon: FaBolt, path: "/skills" },
  { label: "Certifications", icon: FaCertificate, path: "/certifications" },
  { label: "Contact & Hire", icon: FaEnvelope, path: "/contact" },
];

const featuredTeasers = [
  {
    title: "TaskInfus — Enterprise EMS",
    description: "Enterprise MERN Employee Management with multi-tier RBAC, attendance clocking, department analytics, and CSV export.",
    image: taskinfusImg,
    tech: ["React 19", "Node.js", "Express", "MongoDB", "JWT"],
    demo: "https://employee-management-system-frontend-5opl.onrender.com/login",
  },
  {
    title: "AI Expense Intelligence",
    description: "Real-time expense logging via Telegram bot chat & OCR receipt scanning, Gemini AI financial advisor, and budget alerts.",
    image: expenseImg,
    tech: ["Python", "Gemini AI", "Telegram Bot", "OCR", "Docker"],
    demo: "https://ai-expense-tracker-968h.onrender.com/",
  },
  {
    title: "LaunchEd Global Platform",
    description: "Production overseas education portal with mentor-led catalogs, student counseling funnels, and Razorpay checkout.",
    image: launchedImg,
    tech: ["React 19", "Node.js", "MongoDB", "Razorpay"],
    demo: "https://launchedglobal.in",
  },
];

const Home = ({ onOpenResume }) => {
  return (
    <div className="space-y-12 sm:space-y-20 pb-16">
      {/* Hero Section */}
      <Hero onOpenResume={onOpenResume} />

      {/* 1. Minimal 4-Stat Impact Proof Bar */}
      <section className="relative px-4 sm:px-6 mx-auto max-w-7xl -mt-6 sm:-mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {metrics.map((m, idx) => (
            <Link
              key={m.label}
              to={m.path}
              className="group flex flex-col justify-between rounded-xl sm:rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-3.5 sm:p-4 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-cyan-400 hover:scale-[1.02] backdrop-blur"
            >
              <div className="flex items-center justify-between text-[11px] text-[var(--color-muted)] font-medium">
                <span>{m.label}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 group-hover:animate-ping" />
              </div>
              <div className="mt-1 sm:mt-1.5">
                <p className="text-sm sm:text-base md:text-lg font-bold text-[var(--color-text)] group-hover:text-cyan-400 transition-colors">
                  {m.value}
                </p>
                <p className="text-[10px] sm:text-[11px] text-[var(--color-subtle)] truncate">
                  {m.sub}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 2. Recruiter Fast Track Shortcuts */}
      <section className="relative px-4 sm:px-6 mx-auto max-w-7xl">
        <div className="mb-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 flex items-center gap-1.5">
            <FaBolt className="text-[10px]" /> Recruiter Quick Actions
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {recruiterShortcuts.map((s) => {
            const Icon = s.icon;
            if (s.isResume) {
              return (
                <button
                  key={s.label}
                  onClick={onOpenResume}
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-3.5 py-2 text-xs font-bold text-cyan-400 transition-all hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-105 shadow-sm"
                >
                  <Icon className="text-xs" />
                  <span>{s.label}</span>
                </button>
              );
            }

            return (
              <Link
                key={s.label}
                to={s.path}
                className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-3.5 py-2 text-xs font-semibold text-[var(--color-text)] transition-all hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 shadow-sm"
              >
                <Icon className="text-xs text-cyan-400" />
                <span>{s.label}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Projects Teaser Section */}
      <section className="relative px-4 sm:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-3">
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400 mb-1 sm:mb-2">
              Featured Work
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
              Top Engineering Highlights
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[var(--color-muted)] max-w-2xl">
              A curated look at my latest production full-stack systems and AI integrations.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-xs sm:text-sm font-bold text-cyan-400 transition-all hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-105 shrink-0 self-start md:self-auto"
          >
            <span>View All 9 Projects</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>

        <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 md:grid-cols-3">
          {featuredTeasers.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
            >
              <div className="relative aspect-[16/9] sm:aspect-video max-h-40 sm:max-h-none overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-3">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-[var(--color-border)] bg-white/5 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold text-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--color-text)] group-hover:text-cyan-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mt-3.5 sm:mt-5 pt-3 sm:pt-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 sm:gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300"
                  >
                    <span>Live Demo</span>
                    <FaExternalLinkAlt className="text-[9px]" />
                  </a>
                  <Link
                    to="/projects"
                    className="text-xs font-semibold text-[var(--color-muted)] hover:text-cyan-400 flex items-center gap-1"
                  >
                    Case Study <FaArrowRight className="text-[9px]" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Category Navigation Cards Grid */}
      <section className="relative px-4 sm:px-6 mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400 mb-1.5">
            Explore Portfolio
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text)]">
            Explore Specific Sections
          </h2>
        </div>

        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            to="/about"
            className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-cyan-400 transition-all hover:scale-105 shadow-[var(--shadow-soft)] flex flex-col justify-between"
          >
            <div>
              <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3 sm:mb-4 text-base sm:text-lg">
                <FaCode />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[var(--color-text)] group-hover:text-cyan-400 transition-colors">
                About & Background
              </h3>
              <p className="text-xs text-[var(--color-muted)] mt-1 sm:mt-1.5 leading-relaxed">
                Learn about my engineering journey, problem-solving mindset, and education.
              </p>
            </div>
            <span className="mt-3 sm:mt-4 inline-flex items-center gap-1 text-xs font-bold text-cyan-400">
              Read Bio <FaArrowRight className="text-[9px]" />
            </span>
          </Link>

          <Link
            to="/skills"
            className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-cyan-400 transition-all hover:scale-105 shadow-[var(--shadow-soft)] flex flex-col justify-between"
          >
            <div>
              <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3 sm:mb-4 text-base sm:text-lg">
                <FaFolderOpen />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[var(--color-text)] group-hover:text-cyan-400 transition-colors">
                Skills & Tech Stack
              </h3>
              <p className="text-xs text-[var(--color-muted)] mt-1 sm:mt-1.5 leading-relaxed">
                Explore proficiency across React 19, Node.js, Python, MongoDB, and Power BI.
              </p>
            </div>
            <span className="mt-3 sm:mt-4 inline-flex items-center gap-1 text-xs font-bold text-cyan-400">
              Explore Stack <FaArrowRight className="text-[9px]" />
            </span>
          </Link>

          <Link
            to="/experience"
            className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-cyan-400 transition-all hover:scale-105 shadow-[var(--shadow-soft)] flex flex-col justify-between"
          >
            <div>
              <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 sm:mb-4 text-base sm:text-lg">
                <FaGraduationCap />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[var(--color-text)] group-hover:text-cyan-400 transition-colors">
                Work Experience
              </h3>
              <p className="text-xs text-[var(--color-muted)] mt-1 sm:mt-1.5 leading-relaxed">
                Full Stack Developer at LaunchEd Global and internship journey at JiPanditJi.
              </p>
            </div>
            <span className="mt-3 sm:mt-4 inline-flex items-center gap-1 text-xs font-bold text-cyan-400">
              View Timeline <FaArrowRight className="text-[9px]" />
            </span>
          </Link>

          <Link
            to="/certifications"
            className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-cyan-400 transition-all hover:scale-105 shadow-[var(--shadow-soft)] flex flex-col justify-between"
          >
            <div>
              <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3 sm:mb-4 text-base sm:text-lg">
                <FaCertificate />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[var(--color-text)] group-hover:text-cyan-400 transition-colors">
                Certifications
              </h3>
              <p className="text-xs text-[var(--color-muted)] mt-1 sm:mt-1.5 leading-relaxed">
                Verified Power BI, Python, React, and Full-Stack MERN credentials.
              </p>
            </div>
            <span className="mt-3 sm:mt-4 inline-flex items-center gap-1 text-xs font-bold text-cyan-400">
              View Credentials <FaArrowRight className="text-[9px]" />
            </span>
          </Link>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="relative px-4 sm:px-6 mx-auto max-w-7xl">
        <div className="rounded-2xl sm:rounded-3xl border border-cyan-400/30 bg-linear-to-r from-purple-950/40 via-slate-900/90 to-cyan-950/40 p-6 sm:p-10 text-center backdrop-blur-xl shadow-[0_0_50px_rgba(34,211,238,0.15)]">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
            Looking for a High-Impact Developer?
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            I am currently open to full-time Full-Stack Developer, Frontend/Backend, and Data Analytics opportunities. Let&apos;s build something great together.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-purple-600 to-cyan-500 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
            >
              <FaEnvelope className="text-xs" />
              <span>Get In Touch</span>
            </Link>
            <button
              onClick={onOpenResume}
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition-all hover:bg-white/20 hover:scale-105"
            >
              <span>Preview Resume</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
