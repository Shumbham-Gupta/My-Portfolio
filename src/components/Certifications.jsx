import React from "react";
import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaChartBar,
  FaPython,
  FaReact,
  FaServer,
  FaAward,
} from "react-icons/fa";

const MotionH2 = motion.h2;
const MotionP = motion.p;
const MotionDiv = motion.div;

const certifications = [
  {
    title: "Power BI & Business Intelligence Analytics",
    issuer: "Data Analytics & BI Professional",
    icon: FaChartBar,
    badgeColor: "from-amber-500 to-yellow-400",
    date: "2025 – 2026",
    description:
      "Mastery in enterprise data transformation, star-schema data modeling, custom DAX measures, automated Power Query ETL pipelines, and executive KPI reporting.",
    skills: ["Power BI", "DAX Formulas", "Power Query ETL", "Data Modeling", "SQL"],
    credentialUrl: "https://github.com/Shumbham-Gupta",
  },
  {
    title: "Problem Solving & Python Certification",
    issuer: "HackerRank Verified",
    icon: FaPython,
    badgeColor: "from-emerald-500 to-teal-400",
    date: "2025",
    description:
      "Demonstrated proficiency in algorithmic problem solving, time-space complexity optimization, data structure manipulation, and backend logic with Python.",
    skills: ["Python 3", "Data Structures", "Algorithms", "Optimization"],
    credentialUrl: "https://www.hackerrank.com/certificates",
  },
  {
    title: "Frontend Developer (React.js & Modern UI)",
    issuer: "HackerRank & Meta Certified",
    icon: FaReact,
    badgeColor: "from-cyan-500 to-blue-500",
    date: "2025",
    description:
      "Validated ability to build high-performance React applications, custom state management hooks, responsive Tailwind layouts, and accessible UI components.",
    skills: ["React 19", "JavaScript (ES6+)", "Tailwind CSS", "SPA Architecture"],
    credentialUrl: "https://www.hackerrank.com/certificates",
  },
  {
    title: "Full Stack MERN Architecture & REST APIs",
    issuer: "Full Stack Engineering Suite",
    icon: FaServer,
    badgeColor: "from-purple-600 to-indigo-500",
    date: "2025 – 2026",
    description:
      "Comprehensive certification covering Node.js event-driven architecture, Express middleware pipelines, MongoDB database indexing, JWT token security, and cloud deployment.",
    skills: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
    credentialUrl: "https://github.com/Shumbham-Gupta",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative px-4 py-8 sm:py-16 md:py-20 lg:py-24 sm:px-6 section-surface overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 h-72 w-72 glow-cyan rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 h-72 w-72 glow-purple rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-500">
            Validated Expertise
          </p>
          <MotionH2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold section-title"
          >
            Certifications & Credentials
          </MotionH2>
          <MotionP
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-5 text-base md:text-lg leading-relaxed text-[var(--color-muted)]"
          >
            A track record of continuous learning, proven technical skills, and validated competencies across full-stack web engineering and business intelligence.
          </MotionP>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {certifications.map((cert, index) => {
            const Icon = cert.icon || FaAward;

            return (
              <MotionDiv
                key={cert.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.55 }}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[var(--shadow-soft)] backdrop-blur transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${cert.badgeColor} text-white shadow-md`}
                      >
                        <Icon className="text-xl" />
                      </div>
                      <div>
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400">
                          <FaCheckCircle className="text-[10px]" /> {cert.issuer}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-[var(--color-text)] leading-snug mt-0.5">
                          {cert.title}
                        </h3>
                      </div>
                    </div>

                    <span className="hidden sm:inline-block rounded-full border border-[var(--color-border)] bg-white/5 px-2.5 py-0.5 text-[11px] font-semibold text-[var(--color-muted)] shrink-0">
                      {cert.date}
                    </span>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[var(--color-muted)]">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--color-border)]">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-[var(--color-border)] bg-white/5 px-2 py-0.5 text-[10px] sm:text-xs font-medium text-[var(--color-text)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 transition-colors hover:text-cyan-300 hover:underline shrink-0"
                    >
                      <span>Verify Credential</span>
                      <FaExternalLinkAlt className="text-[9px]" />
                    </a>
                  </div>
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
