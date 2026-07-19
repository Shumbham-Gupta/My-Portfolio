import React from "react";
import { motion } from "framer-motion";
import {
  FaChartPie,
  FaCode,
  FaDatabase,
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

const MotionH2 = motion.h2;
const MotionP = motion.p;
const MotionDiv = motion.div;

const strengths = [
  {
    icon: FaLaptopCode,
    title: "Full-Stack Development",
    text: "Building responsive MERN applications with clean UI flows, API integration, and practical product thinking.",
  },
  {
    icon: FaChartPie,
    title: "Data Analytics",
    text: "Turning raw data into dashboards, reports, and insights using Power BI, SQL, Excel, and analytical storytelling.",
  },
  {
    icon: FaRocket,
    title: "Project Ownership",
    text: "Taking ideas from problem definition to working, deployed experiences with attention to usability and polish.",
  },
];

const profileFacts = [
  { label: "Focus", value: "MERN + Analytics" },
  { label: "Education", value: "B.Tech CSE Graduate" },
  { label: "Mindset", value: "Build, measure, improve" },
];

const quickStack = [
  { icon: FaCode, label: "React, Tailwind, JavaScript" },
  { icon: FaDatabase, label: "Node, Express, MongoDB" },
  { icon: FaGraduationCap, label: "Power BI, SQL, Excel" },
];

const About = () => (
  <section id="about" className="relative overflow-hidden section-surface px-5 py-24 sm:px-6 lg:px-8">
    <div className="absolute left-0 top-0 h-72 w-72 glow-purple rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 h-80 w-80 glow-cyan rounded-full blur-3xl"></div>

    <div className="relative z-10 mx-auto max-w-7xl">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-500">
            About Me
          </p>
          <MotionH2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="section-title text-4xl font-extrabold leading-tight md:text-5xl"
          >
            I Build Useful Web Experiences With Data-Aware Thinking
          </MotionH2>

          <MotionP
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg"
          >
            I am a Full Stack MERN Developer and Data Analytics Enthusiast who enjoys
            creating clean, responsive, and interactive digital products. My work sits
            between engineering and insight: building reliable web apps while also using
            data to understand patterns and support better decisions.
          </MotionP>

          <MotionP
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--color-subtle)]"
          >
            I focus on practical implementation, modern UI, secure authentication flows,
            API-driven apps, and dashboards that communicate clearly.
          </MotionP>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {profileFacts.map((fact) => (
              <MotionDiv
                key={fact.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-[var(--color-border)] bg-white/10 p-4 shadow-[var(--shadow-soft)] backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-500">
                  {fact.label}
                </p>
                <p className="mt-2 text-sm font-bold text-[var(--color-text)]">{fact.value}</p>
              </MotionDiv>
            ))}
          </div>
        </div>

        <MotionDiv
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="themed-card rounded-3xl border p-5 sm:p-6"
        >
          <div className="grid gap-4">
            {strengths.map(({ icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-[var(--color-border)] bg-white/10 p-5"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-purple-600/20 to-cyan-500/20 text-cyan-500">
                    {React.createElement(icon)}
                  </span>
                  <h3 className="text-lg font-bold text-[var(--color-text)]">{title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-[var(--color-border)] bg-linear-to-r from-purple-700/10 to-cyan-700/10 p-5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-purple-500">
              Current Toolkit
            </p>
            <div className="grid gap-3">
              {quickStack.map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-3 text-sm font-medium text-[var(--color-text)]">
                  <span className="text-cyan-500">{React.createElement(icon)}</span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  </section>
);

export default About;
