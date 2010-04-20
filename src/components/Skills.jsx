import React from "react";
import { motion } from "framer-motion";
import {
  FaChartBar,
  FaCode,
  FaDatabase,
  FaServer,
  FaTools,
} from "react-icons/fa";

const MotionH2 = motion.h2;
const MotionP = motion.p;
const MotionDiv = motion.div;

const skillGroups = [
  {
    title: "Frontend",
    icon: FaCode,
    level: 88,
    summary: "Responsive interfaces, component structure, animation, and polished layouts.",
    skills: ["React.js", "JavaScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: FaServer,
    level: 82,
    summary: "REST APIs, authentication flows, server logic, and full-stack app structure.",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Database",
    icon: FaDatabase,
    level: 78,
    summary: "Data modeling, queries, persistence, and application data handling.",
    skills: ["MongoDB", "SQL", "Schema Design", "Data Handling"],
  },
  {
    title: "Analytics",
    icon: FaChartBar,
    level: 84,
    summary: "Dashboards, reporting, business insights, and clear data storytelling.",
    skills: ["Power BI", "Excel", "Power Query", "DAX"],
  },
  {
    title: "Workflow",
    icon: FaTools,
    level: 80,
    summary: "Version control, debugging, deployment habits, and project organization.",
    skills: ["Git & GitHub", "Axios", "Postman", "Deployment"],
  },
];

const coreSkills = [
  "MERN Stack",
  "Responsive UI",
  "API Integration",
  "Authentication",
  "Dashboard Design",
  "Data Visualization",
  "Problem Solving",
  "Clean Code",
];

const Skills = () => (
  <section id="skills" className="relative overflow-hidden section-surface px-5 py-24 sm:px-6 lg:px-8">
    <div className="absolute inset-0">
      <div className="absolute left-1/4 top-1/4 h-72 w-72 glow-purple rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/5 h-72 w-72 glow-cyan rounded-full blur-3xl animate-pulse delay-700"></div>
    </div>

    <div className="relative z-10 mx-auto max-w-7xl">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-500">
          Skills
        </p>
        <MotionH2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="section-title text-4xl font-extrabold md:text-5xl"
        >
          A Practical Stack For Building And Analyzing
        </MotionH2>
        <MotionP
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: 0.12, duration: 0.6 }}
          className="mt-5 text-base leading-relaxed text-[var(--color-muted)] md:text-lg"
        >
          My skill set combines full-stack development with analytics, so I can build
          applications and also understand the data behind user and business decisions.
        </MotionP>
      </div>

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {coreSkills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-[var(--color-border)] bg-linear-to-r from-purple-700/10 to-cyan-700/10 px-4 py-2 text-sm font-semibold text-[var(--color-text)] shadow-[var(--shadow-soft)]"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map(({ title, icon, level, summary, skills }, index) => (
          <MotionDiv
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.07, duration: 0.55 }}
            whileHover={{ y: -5 }}
            className="themed-card rounded-3xl border p-5 transition-all duration-300 hover:shadow-[0_0_28px_rgba(34,211,238,0.34)]"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-purple-600/20 to-cyan-500/20 text-xl text-cyan-500">
                  {React.createElement(icon)}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text)]">{title}</h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-purple-500">
                    {level}% ready
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-4 h-2 overflow-hidden rounded-full bg-slate-500/20">
              <div
                className="h-full rounded-full bg-linear-to-r from-purple-500 to-cyan-400"
                style={{ width: `${level}%` }}
              ></div>
            </div>

            <p className="mb-5 text-sm leading-relaxed text-[var(--color-muted)]">{summary}</p>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-medium text-[var(--color-text)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
