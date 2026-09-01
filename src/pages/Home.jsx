import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import CoreCapabilitiesBento from "../components/CoreCapabilitiesBento";
import TechMarquee from "../components/TechMarquee";
import FeaturedProjectsCarousel from "../components/FeaturedProjectsCarousel";
import {
  FaArrowRight,
  FaCode,
  FaFolderOpen,
  FaGraduationCap,
  FaCertificate,
  FaEnvelope,
  FaFilePdf,
  FaBolt,
  FaBriefcase,
} from "react-icons/fa";

const metrics = [
  { label: "Built & Deployed", value: "9+ Projects", sub: "MERN, Python & BI", path: "/projects" },
  { label: "Current Position", value: "Full Stack Dev", sub: "LaunchEd Global", path: "/experience" },
  { label: "Core Expertise", value: "React 19 & Node", sub: "Express, Mongo, APIs", path: "/skills" },
  { label: "Hiring Availability", value: "Open for Hire", sub: "Full-Time / Remote", path: "/contact" },
];

const recruiterShortcuts = [
  { label: "Preview Resume", icon: FaFilePdf, isResume: true },
  { label: "All Projects", icon: FaFolderOpen, path: "/projects" },
  { label: "Career Journey", icon: FaBriefcase, path: "/experience" },
  { label: "Skills Matrix", icon: FaBolt, path: "/skills" },
  { label: "Certifications", icon: FaCertificate, path: "/certifications" },
  { label: "Contact & Hire", icon: FaEnvelope, path: "/contact" },
];

const Home = ({ onOpenResume }) => {
  return (
    <div className="space-y-10 sm:space-y-16 md:space-y-20 pb-16">
      {/* Hero Section */}
      <Hero onOpenResume={onOpenResume} />

      {/* 1. Minimal 4-Stat Impact Proof Bar */}
      <section className="relative px-4 sm:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {metrics.map((m) => (
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

      {/* 3. Modern Interactive 9-Project Carousel Section */}
      <FeaturedProjectsCarousel />

      {/* 4. Modern Infinite Tech Stack Marquee (Technical Arsenal • Always Moving Forward) */}
      <TechMarquee />

      {/* 5. Core Capabilities Bento Grid */}
      <CoreCapabilitiesBento />

      {/* 5. Quick Category Navigation Cards Grid */}
      <section className="relative px-4 sm:px-6 mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-purple-700 dark:text-cyan-400 mb-1.5">
            Explore Portfolio
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text)]">
            Explore Specific Sections
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          <Link
            to="/about"
            className="group p-3 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-cyan-400 transition-all hover:scale-105 shadow-[var(--shadow-soft)] flex flex-col justify-between"
          >
            <div>
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-purple-500/20 text-purple-500 dark:text-purple-400 flex items-center justify-center mb-2.5 sm:mb-4 text-sm sm:text-lg">
                <FaCode />
              </div>
              <h3 className="font-bold text-xs sm:text-sm md:text-base text-[var(--color-text)] group-hover:text-cyan-400 transition-colors leading-snug">
                About & Background
              </h3>
              <p className="text-[10px] sm:text-xs text-[var(--color-muted)] mt-1 sm:mt-1.5 leading-relaxed line-clamp-2">
                Engineering journey, mindset, and education.
              </p>
            </div>
            <span className="mt-2.5 sm:mt-4 inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-purple-700 dark:text-cyan-400">
              Read Bio <FaArrowRight className="text-[8px] sm:text-[9px]" />
            </span>
          </Link>

          <Link
            to="/skills"
            className="group p-3 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-cyan-400 transition-all hover:scale-105 shadow-[var(--shadow-soft)] flex flex-col justify-between"
          >
            <div>
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-2.5 sm:mb-4 text-sm sm:text-lg">
                <FaFolderOpen />
              </div>
              <h3 className="font-bold text-xs sm:text-sm md:text-base text-[var(--color-text)] group-hover:text-cyan-400 transition-colors leading-snug">
                Skills & Tech Stack
              </h3>
              <p className="text-[10px] sm:text-xs text-[var(--color-muted)] mt-1 sm:mt-1.5 leading-relaxed line-clamp-2">
                React 19, Node.js, Python, MongoDB, Power BI.
              </p>
            </div>
            <span className="mt-2.5 sm:mt-4 inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-purple-700 dark:text-cyan-400">
              Explore Stack <FaArrowRight className="text-[8px] sm:text-[9px]" />
            </span>
          </Link>

          <Link
            to="/experience"
            className="group p-3 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-cyan-400 transition-all hover:scale-105 shadow-[var(--shadow-soft)] flex flex-col justify-between"
          >
            <div>
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2.5 sm:mb-4 text-sm sm:text-lg">
                <FaGraduationCap />
              </div>
              <h3 className="font-bold text-xs sm:text-sm md:text-base text-[var(--color-text)] group-hover:text-cyan-400 transition-colors leading-snug">
                Work Experience
              </h3>
              <p className="text-[10px] sm:text-xs text-[var(--color-muted)] mt-1 sm:mt-1.5 leading-relaxed line-clamp-2">
                LaunchEd Global & JiPanditJi journey.
              </p>
            </div>
            <span className="mt-2.5 sm:mt-4 inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-purple-700 dark:text-cyan-400">
              View Timeline <FaArrowRight className="text-[8px] sm:text-[9px]" />
            </span>
          </Link>

          <Link
            to="/certifications"
            className="group p-3 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-cyan-400 transition-all hover:scale-105 shadow-[var(--shadow-soft)] flex flex-col justify-between"
          >
            <div>
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg sm:rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-2.5 sm:mb-4 text-sm sm:text-lg">
                <FaCertificate />
              </div>
              <h3 className="font-bold text-xs sm:text-sm md:text-base text-[var(--color-text)] group-hover:text-cyan-400 transition-colors leading-snug">
                Certifications
              </h3>
              <p className="text-[10px] sm:text-xs text-[var(--color-muted)] mt-1 sm:mt-1.5 leading-relaxed line-clamp-2">
                Verified Power BI, Python, React credentials.
              </p>
            </div>
            <span className="mt-2.5 sm:mt-4 inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-purple-700 dark:text-cyan-400">
              View Credentials <FaArrowRight className="text-[8px] sm:text-[9px]" />
            </span>
          </Link>
        </div>
      </section>

      {/* 6. Direct Contact Banner */}
      <section className="relative px-4 sm:px-6 mx-auto max-w-7xl">
        <div className="rounded-2xl sm:rounded-3xl border border-purple-200/80 dark:border-cyan-400/30 bg-linear-to-r from-purple-100/90 via-white to-cyan-100/90 dark:from-purple-950/40 dark:via-slate-900/90 dark:to-cyan-950/40 p-6 sm:p-10 text-center backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_0_50px_rgba(34,211,238,0.15)]">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
            Looking for a High-Impact Developer?
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
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
              className="inline-flex items-center gap-2 rounded-full border border-purple-300 dark:border-white/20 bg-white dark:bg-white/10 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 dark:text-white transition-all hover:bg-purple-50 dark:hover:bg-white/20 hover:scale-105 shadow-xs"
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
