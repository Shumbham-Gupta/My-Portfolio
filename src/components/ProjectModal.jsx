import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaGithub,
  FaLayerGroup,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaCheckCircle,
  FaBolt,
  FaChartBar,
} from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const Icon = project.icon || FaLayerGroup;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 my-auto flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] shadow-[0_0_50px_rgba(0,0,0,0.6)] backdrop-blur-xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[var(--color-border)] bg-white/5 px-5 py-4 sm:px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-r from-purple-600/30 to-cyan-600/30 text-cyan-400 border border-cyan-400/30">
                <Icon className="text-lg" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[var(--color-text)]">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-cyan-400">{project.category}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                type="button"
                aria-label="Close modal"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--color-border)] bg-white/5 text-[var(--color-muted)] transition-all hover:bg-white/15 hover:text-[var(--color-text)] hover:scale-105"
              >
                <FaTimes className="text-base" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-[var(--color-border)] bg-white/5 px-5 sm:px-7 overflow-x-auto no-scrollbar">
            {[
              { id: "overview", label: "Overview & Features" },
              { id: "architecture", label: "System Architecture" },
              { id: "challenges", label: "Engineering Challenges" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                type="button"
                className={`relative px-4 py-3 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "text-cyan-400"
                    : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-purple-500 to-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Scrollable Content Body */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Visual Image Banner */}
                <div className="relative overflow-hidden rounded-xl border border-[var(--color-border)] aspect-video sm:aspect-21/9 bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-md bg-slate-900/80 px-2.5 py-1 text-xs font-semibold text-cyan-300 backdrop-blur border border-white/10">
                      {project.group === "mern" ? "Full Stack Application" : "Analytics Solution"}
                    </span>
                    <div className="flex gap-2">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg bg-linear-to-r from-purple-600 to-cyan-600 px-3 py-1.5 text-xs font-bold text-white shadow-md hover:scale-105 transition-all"
                      >
                        <FaExternalLinkAlt className="text-[10px]" /> Live App
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-slate-900/80 px-3 py-1.5 text-xs font-bold text-white backdrop-blur hover:bg-slate-800 transition-all"
                      >
                        <FaGithub className="text-[10px]" /> GitHub
                      </a>
                    </div>
                  </div>
                </div>

                {/* Problem & Solution */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-[var(--color-border)] bg-white/5 p-4 sm:p-5">
                    <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-purple-400">
                      <FaBolt className="text-xs" /> The Problem
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                      {project.problem ||
                        "Manual processes, fragmented tracking, and lack of real-time visibility create workflow bottlenecks and delayed decision-making."}
                    </p>
                  </div>

                  <div className="rounded-xl border border-[var(--color-border)] bg-white/5 p-4 sm:p-5">
                    <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-400">
                      <FaCheckCircle className="text-xs" /> The Solution
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                      {project.solution ||
                        project.description}
                    </p>
                  </div>
                </div>

                {/* Key Capabilities */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text)] mb-3">
                    Core Capabilities & Highlights
                  </h4>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {project.highlights?.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 rounded-xl border border-[var(--color-border)] bg-white/5 p-3"
                      >
                        <FaCheckCircle className="mt-0.5 shrink-0 text-cyan-400 text-xs" />
                        <span className="text-xs sm:text-sm font-medium text-[var(--color-text)]">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text)] mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech?.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-[var(--color-border)] bg-linear-to-r from-purple-700/15 to-cyan-700/15 px-3 py-1.5 text-xs font-semibold text-[var(--color-text)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "architecture" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-5"
              >
                <div className="rounded-xl border border-[var(--color-border)] bg-white/5 p-4 sm:p-5">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-2">
                    Architecture Overview
                  </h4>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                    {project.archOverview ||
                      "Designed with decoupled modular architecture ensuring high maintainability, rapid load times, resilient error handling, and scalable data throughput."}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-[var(--color-border)] bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                      <FaServer />
                      <span>Frontend Layer</span>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-[var(--color-muted)]">
                      {project.frontendArch ||
                        "React client with component-level modularity, custom reactive hooks, responsive Tailwind styles, and fluid Framer Motion animations."}
                    </p>
                  </div>

                  <div className="rounded-xl border border-[var(--color-border)] bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                      <FaServer />
                      <span>Backend & APIs</span>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-[var(--color-muted)]">
                      {project.backendArch ||
                        "RESTful service tier built on Node.js/Express, structured controllers, centralized middleware, validation schemas, and robust error handlers."}
                    </p>
                  </div>

                  <div className="rounded-xl border border-[var(--color-border)] bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                      <FaDatabase />
                      <span>Data Modeling & Storage</span>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-[var(--color-muted)]">
                      {project.dataArch ||
                        "MongoDB schemas / SQL datasets designed with optimized indexes, referential relationships, DAX measures, and aggregated query pipelines."}
                    </p>
                  </div>

                  <div className="rounded-xl border border-[var(--color-border)] bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                      <FaShieldAlt />
                      <span>Security & Performance</span>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-[var(--color-muted)]">
                      {project.securityArch ||
                        "JWT session tokens, encrypted password hashing (bcrypt), CORS policies, environment encapsulation, and fast asset caching."}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "challenges" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                {(project.challengesList || [
                  {
                    title: "State Synchronization & Workflow Consistency",
                    desc: "Handled asynchronous multi-step updates across components to eliminate race conditions and keep UI state strictly aligned with server response data.",
                  },
                  {
                    title: "Access Control & Role Permissions",
                    desc: "Engineered robust middleware to verify token permissions per route, shielding sensitive endpoints and dynamically configuring UI views.",
                  },
                  {
                    title: "Performance & Responsive Rendering",
                    desc: "Applied selective memoization, responsive layout breakpoints, and asset compression to ensure smooth 60fps interaction on mobile devices.",
                  },
                ]).map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-[var(--color-border)] bg-white/5 p-4 sm:p-5"
                  >
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                      <FaBolt className="text-xs text-purple-400" />
                      <span>{item.title}</span>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Footer Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border)] bg-white/5 px-5 py-4 sm:px-7">
            <button
              onClick={onClose}
              type="button"
              className="rounded-xl border border-[var(--color-border)] px-4 py-2 text-xs sm:text-sm font-semibold text-[var(--color-muted)] hover:bg-white/10 hover:text-[var(--color-text)] transition-all"
            >
              Close Window
            </button>

            <div className="flex items-center gap-2.5">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold text-[var(--color-text)] hover:border-cyan-400 hover:text-cyan-400 transition-all"
              >
                <FaGithub /> View Source
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-cyan-600 px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:scale-105 transition-all"
              >
                <FaExternalLinkAlt /> Open Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
