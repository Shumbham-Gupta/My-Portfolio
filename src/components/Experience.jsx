import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCertificate,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaArrowUp,
  FaRocket,
  FaCodeBranch,
  FaAward,
} from "react-icons/fa";

const MotionH2 = motion.h2;
const MotionP = motion.p;
const MotionDiv = motion.div;

const careerRoadmap = [
  {
    stage: "Stage 01",
    stageTag: "Internship & Foundation",
    role: "Full Stack Intern",
    company: "JiPanditJi",
    url: "https://jipanditji.com/",
    period: "Jan 2026 – Apr 2026",
    location: "India",
    status: "Completed Milestone",
    isCurrent: false,
    badgeColor: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
    summary:
      "Joined as Full Stack Intern to build web modules and user flows for an online spiritual and Pandit booking platform across India.",
    highlights: [
      "Built responsive client interfaces and booking inquiry workflows for verified pandit services (Griha Pravesh, Havan, Vastu).",
      "Assisted in backend REST API endpoint development and Cashfree payment checkout integration.",
      "Optimized site performance, asset loading, and mobile responsiveness across diverse devices.",
      "Collaborated on database queries, booking status tracking, and automated form validation.",
    ],
    skills: ["React.js", "Node.js", "Express.js", "JavaScript", "REST APIs", "Payment Gateway", "Responsive UI"],
  },
  {
    stage: "Stage 02",
    stageTag: "Core Platform Engineer",
    role: "Full Stack Developer",
    company: "LaunchEd Global",
    url: "https://launchedglobal.in",
    period: "May 2026 – Present",
    location: "India",
    status: "Active Role",
    isCurrent: true,
    badgeColor: "from-purple-500/25 to-cyan-500/25 text-cyan-400 border-cyan-400/40",
    summary:
      "Promoted to lead full-stack web engineering, feature implementation, and infrastructure maintenance for India's premier overseas education & upskilling platform.",
    highlights: [
      "Engineered, scaled, and continuously maintain the primary platform architecture with React.js, Node.js, Express, and MongoDB.",
      "Architected core modules including mentor-led tech course catalogs, internship accelerators, and student counseling portals.",
      "Integrated secure Razorpay checkout flows, multi-channel lead funnels, and enterprise structured JSON-LD SEO schema.",
      "Drove end-to-end responsiveness, load-time optimizations, and mobile UI polish for thousands of active visitors.",
      "Implemented security best practices including API rate limiting, robust error handling, and uptime monitoring.",
    ],
    skills: ["React 19", "Node.js", "Express.js", "MongoDB", "Razorpay", "Tailwind CSS", "SEO Schema", "Platform Maintenance"],
  },
];

const educationData = [
  {
    title: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "Computer Science & Engineering Graduate",
    location: "India",
    period: "Graduate",
    highlights: [
      "Specialized in core Data Structures, Algorithms, Web Development, and Database Systems.",
      "Built multiple capstone MERN stack web applications and data analytics dashboards.",
      "Developed strong problem-solving skills across full-stack development and business intelligence.",
    ],
  },
];

const certificationData = [
  {
    title: "Data Analytics & Power BI Specialist",
    issuer: "Data & BI Analytics",
    year: "Featured Certification",
    skills: ["Power BI", "DAX", "Power Query", "Data Modeling", "SQL"],
    description:
      "Mastered interactive dashboard construction, financial & sales data modeling, DAX measure creation, and ETL transformations.",
  },
  {
    title: "Full Stack MERN Web Development",
    issuer: "Web Development",
    year: "Featured Certification",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
    description:
      "Comprehensive training in building REST APIs, state management, secure user authentication flows, and cloud deployments.",
  },
  {
    title: "SQL & Database Management",
    issuer: "Database & Backend Systems",
    year: "Core Competency",
    skills: ["PostgreSQL / MySQL", "Complex Queries", "Schema Design", "Joins & Aggregations"],
    description:
      "Hands-on expertise in relational schema design, query optimization, indexing, and multi-table data analytics.",
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState("roadmap");

  const tabs = [
    { id: "roadmap", label: "Career Progression Roadmap", icon: FaRocket },
    { id: "all", label: "All Milestones", icon: FaCodeBranch },
    { id: "education", label: "Education", icon: FaGraduationCap },
    { id: "certifications", label: "Certifications", icon: FaCertificate },
  ];

  const showRoadmap = activeTab === "roadmap" || activeTab === "all";
  const showEducation = activeTab === "all" || activeTab === "education";
  const showCertifications = activeTab === "all" || activeTab === "certifications";

  return (
    <section
      id="experience"
      className="relative overflow-hidden section-surface px-5 py-24 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0">
        <div className="absolute right-1/4 top-1/3 h-72 w-72 glow-purple rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/5 h-72 w-72 glow-cyan rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-500">
            Career Evolution
          </p>
          <MotionH2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="section-title text-4xl font-extrabold md:text-5xl"
          >
            Engineering Roadmap & Experience
          </MotionH2>
          <MotionP
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="mt-5 text-base leading-relaxed text-[var(--color-muted)] md:text-lg"
          >
            From foundational internship engineering to leading full-stack platform architecture and feature delivery.
          </MotionP>
        </div>

        {/* Career Pipeline Summary Ribbon */}
        <div className="mx-auto mb-12 max-w-4xl overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white/10 p-4 shadow-[var(--shadow-soft)] backdrop-blur">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500/20 text-orange-400">
                <FaBriefcase className="text-sm" />
              </span>
              <div>
                <p className="text-xs font-semibold text-[var(--color-subtle)]">Jan 2026 – Apr 2026</p>
                <p className="text-sm font-bold text-[var(--color-text)]">Full Stack Intern @ JiPanditJi</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-cyan-400">
              <span className="hidden sm:inline-block h-0.5 w-12 bg-linear-to-r from-orange-400 via-purple-500 to-cyan-400"></span>
              <span className="inline-flex items-center gap-1 rounded-full border border-cyan-400/40 bg-cyan-500/15 px-3 py-1 text-xs font-bold text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                <FaArrowUp className="text-xs" /> Progression Level-Up
              </span>
              <span className="hidden sm:inline-block h-0.5 w-12 bg-linear-to-r from-cyan-400 to-purple-500"></span>
            </div>

            <div className="flex items-center gap-3">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400">
                <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-cyan-400 animate-ping"></span>
                <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-cyan-500"></span>
                <FaRocket className="text-sm" />
              </span>
              <div>
                <p className="text-xs font-semibold text-cyan-400">May 2026 – Present</p>
                <p className="text-sm font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">
                  Full Stack Developer @ LaunchEd
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Filter */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                type="button"
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-cyan-400 bg-linear-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                    : "border-[var(--color-border)] bg-white/10 text-[var(--color-text)] hover:border-cyan-400 hover:text-cyan-500"
                }`}
              >
                {Icon && <Icon className="text-base" />}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Container */}
        <AnimatePresence mode="wait">
          <MotionDiv
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`grid gap-10 ${activeTab === "roadmap" ? "max-w-4xl mx-auto" : "lg:grid-cols-2"}`}
          >
            {/* Career Progression Roadmap */}
            {showRoadmap && (
              <div className="space-y-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-purple-600/20 to-cyan-500/20 text-cyan-500">
                    <FaRocket className="text-lg" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--color-text)]">Career Progression Roadmap</h3>
                    <p className="text-xs text-[var(--color-subtle)]">Chronological evolution of roles & engineering milestones</p>
                  </div>
                </div>

                <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-[11px] sm:before:left-[19px] before:top-4 before:bottom-4 before:w-[3px] before:bg-linear-to-b before:from-amber-500 before:via-purple-500 before:to-cyan-400">
                  {careerRoadmap.map((item, idx) => (
                    <div key={item.company} className="relative">
                      {/* Node Bullet */}
                      <div className={`absolute -left-[30px] sm:-left-[47px] top-6 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full border-2 bg-slate-950 ${item.isCurrent ? "border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" : "border-amber-400"}`}>
                        <span className={`h-2.5 w-2.5 rounded-full ${item.isCurrent ? "bg-cyan-400 animate-pulse" : "bg-amber-400"}`}></span>
                      </div>

                        <MotionDiv
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1, duration: 0.5 }}
                          className={`themed-card rounded-3xl border p-6 transition-all duration-300 ${
                            item.isCurrent
                              ? "border-cyan-400/60 shadow-[0_0_30px_rgba(34,211,238,0.22)] ring-1 ring-cyan-400/30"
                              : "shadow-[var(--shadow-soft)] hover:shadow-[0_0_24px_rgba(139,92,246,0.25)]"
                          }`}
                        >
                          {/* Card Header */}
                          <div className="flex flex-wrap items-start justify-between gap-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${item.badgeColor}`}>
                                  {item.stage} • {item.stageTag}
                                </span>
                                {item.isCurrent && (
                                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/40 px-2.5 py-0.5 text-[11px] font-bold text-emerald-400 animate-pulse">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                                    Current Role
                                  </span>
                                )}
                              </div>
                              <h4 className="text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-cyan-400 to-white">
                                {item.role}
                              </h4>
                              <div className="flex items-center gap-2 mt-1">
                                <a
                                  href={item.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-400 hover:text-cyan-400 transition-colors"
                                >
                                  {item.company}
                                  <FaExternalLinkAlt className="text-xs" />
                                </a>
                                <span className="text-xs text-[var(--color-subtle)]">• {item.location}</span>
                              </div>
                            </div>

                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white/10 px-3 py-1 text-xs font-semibold text-[var(--color-text)]">
                              <FaCalendarAlt className="text-xs text-cyan-400" />
                              {item.period}
                            </span>
                          </div>

                          {/* Summary */}
                          <p className="mt-3.5 text-sm leading-relaxed text-[var(--color-muted)]">
                            {item.summary}
                          </p>

                          {/* Bullet Highlights */}
                          <ul className="mt-4 space-y-2.5">
                            {item.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-text)]">
                                <FaCheckCircle className="mt-1 shrink-0 text-xs text-cyan-400" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Skills Pills */}
                          <div className="mt-5 flex flex-wrap gap-2 pt-2 border-t border-[var(--color-border)]">
                            {item.skills.map((skill) => (
                              <span
                                key={skill}
                                className="rounded-full border border-[var(--color-border)] bg-linear-to-r from-purple-700/10 to-cyan-700/10 px-2.5 py-0.5 text-xs font-medium text-[var(--color-text)]"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </MotionDiv>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Education & Certifications (when tab is All, Education, or Certifications) */}
            {(showEducation || showCertifications) && activeTab !== "roadmap" && (
              <div className="space-y-8">
                {showEducation && (
                  <div>
                    <div className="mb-6 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-purple-600/20 to-cyan-500/20 text-cyan-500">
                        <FaGraduationCap className="text-lg" />
                      </span>
                      <h3 className="text-2xl font-bold text-[var(--color-text)]">Education</h3>
                    </div>

                    {educationData.map((edu, idx) => (
                      <MotionDiv
                        key={edu.title}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="themed-card rounded-3xl border p-6 shadow-[var(--shadow-soft)] transition-all hover:shadow-[0_0_26px_rgba(139,92,246,0.3)]"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <h4 className="text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
                              {edu.title}
                            </h4>
                            <p className="text-sm font-semibold text-purple-500 mt-1">{edu.field}</p>
                          </div>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-500">
                            <FaCalendarAlt className="text-xs" />
                            {edu.period}
                          </span>
                        </div>

                        <div className="mt-3 flex items-center gap-2 text-xs text-[var(--color-subtle)]">
                          <FaMapMarkerAlt className="text-cyan-500" />
                          <span>{edu.institution} • {edu.location}</span>
                        </div>

                        <ul className="mt-4 space-y-2">
                          {edu.highlights.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--color-muted)]">
                              <FaCheckCircle className="mt-1 shrink-0 text-xs text-cyan-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </MotionDiv>
                    ))}
                  </div>
                )}

                {showCertifications && (
                  <div>
                    <div className="mb-6 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-purple-600/20 to-cyan-500/20 text-cyan-500">
                        <FaCertificate className="text-lg" />
                      </span>
                      <h3 className="text-2xl font-bold text-[var(--color-text)]">Certifications & Expertise</h3>
                    </div>

                    <div className="space-y-4">
                      {certificationData.map((cert, idx) => (
                        <MotionDiv
                          key={cert.title}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1, duration: 0.5 }}
                          whileHover={{ y: -3 }}
                          className="themed-card rounded-3xl border p-5 shadow-[var(--shadow-soft)] transition-all hover:shadow-[0_0_28px_rgba(34,211,238,0.35)]"
                        >
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <div>
                              <h4 className="text-lg font-bold text-[var(--color-text)]">
                                {cert.title}
                              </h4>
                              <p className="text-xs font-semibold text-purple-500 mt-0.5">{cert.issuer}</p>
                            </div>
                            <span className="rounded-full border border-[var(--color-border)] bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-500">
                              {cert.year}
                            </span>
                          </div>

                          <p className="mt-3 text-sm text-[var(--color-muted)] leading-relaxed">
                            {cert.description}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-1.5">
                            {cert.skills.map((skill) => (
                              <span
                                key={skill}
                                className="rounded-full border border-[var(--color-border)] bg-linear-to-r from-purple-700/10 to-cyan-700/10 px-2.5 py-0.5 text-xs font-medium text-[var(--color-text)]"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </MotionDiv>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </MotionDiv>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;

