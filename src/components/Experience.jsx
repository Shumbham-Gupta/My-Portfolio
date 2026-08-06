import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCertificate,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

const MotionH2 = motion.h2;
const MotionP = motion.p;
const MotionDiv = motion.div;

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

const experienceData = [
  {
    role: "Full Stack MERN & Analytics Developer",
    organization: "Independent Projects & Client Builds",
    period: "Present",
    type: "Full-Stack & BI Work",
    description:
      "Architected and deployed 6+ full-stack web applications and interactive BI dashboards with focus on production reliability and clean UX.",
    achievements: [
      "Integrated Google Gemini AI API into an AI Virtual Assistant MERN application.",
      "Designed secure JWT authentication flows with password hashing and protected routes.",
      "Developed high-impact Power BI dashboards for EV sales and retail analytics.",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Milestones" },
    { id: "education", label: "Education", icon: FaGraduationCap },
    { id: "certifications", label: "Certifications", icon: FaCertificate },
    { id: "experience", label: "Experience & Roles", icon: FaBriefcase },
  ];

  const showEducation = activeTab === "all" || activeTab === "education";
  const showCertifications = activeTab === "all" || activeTab === "certifications";
  const showExperience = activeTab === "all" || activeTab === "experience";

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
            Background & Credentials
          </p>
          <MotionH2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="section-title text-4xl font-extrabold md:text-5xl"
          >
            Education, Certifications & Milestones
          </MotionH2>
          <MotionP
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="mt-5 text-base leading-relaxed text-[var(--color-muted)] md:text-lg"
          >
            My academic foundation in Computer Science paired with industry-relevant full-stack and data analytics credentials.
          </MotionP>
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
            className="grid gap-8 lg:grid-cols-2"
          >
            {/* Left Column: Education & Experience */}
            {(showEducation || showExperience) && (
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
                        initial={{ opacity: 0, x: -20 }}
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

                {showExperience && (
                  <div className="pt-2">
                    <div className="mb-6 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-purple-600/20 to-cyan-500/20 text-cyan-500">
                        <FaBriefcase className="text-lg" />
                      </span>
                      <h3 className="text-2xl font-bold text-[var(--color-text)]">Experience & Projects</h3>
                    </div>

                    {experienceData.map((exp, idx) => (
                      <MotionDiv
                        key={exp.role}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="themed-card rounded-3xl border p-6 shadow-[var(--shadow-soft)] transition-all hover:shadow-[0_0_26px_rgba(139,92,246,0.3)]"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <h4 className="text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
                              {exp.role}
                            </h4>
                            <p className="text-sm font-semibold text-purple-500 mt-1">{exp.organization}</p>
                          </div>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-500">
                            {exp.period}
                          </span>
                        </div>

                        <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                          {exp.description}
                        </p>

                        <ul className="mt-4 space-y-2">
                          {exp.achievements.map((item, i) => (
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
              </div>
            )}

            {/* Right Column: Certifications */}
            {showCertifications && (
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-purple-600/20 to-cyan-500/20 text-cyan-500">
                    <FaCertificate className="text-lg" />
                  </span>
                  <h3 className="text-2xl font-bold text-[var(--color-text)]">Certifications & Expertise</h3>
                </div>

                <div className="space-y-5">
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
          </MotionDiv>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Experience;
