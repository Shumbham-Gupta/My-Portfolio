import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaPython,
  FaDatabase,
  FaServer,
  FaChartPie,
  FaGithub,
  FaLock,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaBolt,
  FaRocket,
  FaBrain,
} from "react-icons/fa";

const skillsRow1 = [
  { name: "React 19", category: "Frontend", icon: FaReact, color: "#22d3ee", bgGlow: "rgba(34,211,238,0.15)", border: "rgba(34,211,238,0.3)" },
  { name: "Node.js", category: "Backend", icon: FaNodeJs, color: "#4ade80", bgGlow: "rgba(74,222,128,0.15)", border: "rgba(74,222,128,0.3)" },
  { name: "Express.js", category: "Backend", icon: FaServer, color: "#c084fc", bgGlow: "rgba(192,132,252,0.15)", border: "rgba(192,132,252,0.3)" },
  { name: "MongoDB", category: "Database", icon: FaDatabase, color: "#34d399", bgGlow: "rgba(52,211,153,0.15)", border: "rgba(52,211,153,0.3)" },
  { name: "Python", category: "Language & AI", icon: FaPython, color: "#60a5fa", bgGlow: "rgba(96,165,250,0.15)", border: "rgba(96,165,250,0.3)" },
  { name: "Power BI", category: "Analytics", icon: FaChartPie, color: "#facc15", bgGlow: "rgba(250,204,21,0.15)", border: "rgba(250,204,21,0.3)" },
  { name: "JavaScript ES6+", category: "Frontend", icon: FaJs, color: "#fde047", bgGlow: "rgba(253,224,71,0.15)", border: "rgba(253,224,71,0.3)" },
  { name: "Tailwind CSS", category: "Styling", icon: FaCss3Alt, color: "#38bdf8", bgGlow: "rgba(56,189,248,0.15)", border: "rgba(56,189,248,0.3)" },
];

const skillsRow2 = [
  { name: "Gemini AI & LLMs", category: "AI & ML", icon: FaBrain, color: "#a855f7", bgGlow: "rgba(168,85,247,0.15)", border: "rgba(168,85,247,0.3)" },
  { name: "SQL & Relational DBs", category: "Database", icon: FaDatabase, color: "#818cf8", bgGlow: "rgba(129,140,248,0.15)", border: "rgba(129,140,248,0.3)" },
  { name: "Docker", category: "DevOps", icon: FaDocker, color: "#38bdf8", bgGlow: "rgba(56,189,248,0.15)", border: "rgba(56,189,248,0.3)" },
  { name: "REST APIs & JWT", category: "Security", icon: FaLock, color: "#f472b6", bgGlow: "rgba(244,114,182,0.15)", border: "rgba(244,114,182,0.3)" },
  { name: "Git & GitHub", category: "Workflow", icon: FaGithub, color: "#fb923c", bgGlow: "rgba(251,146,60,0.15)", border: "rgba(251,146,60,0.3)" },
  { name: "Framer Motion", category: "Animation", icon: FaRocket, color: "#e879f9", bgGlow: "rgba(232,121,249,0.15)", border: "rgba(232,121,249,0.3)" },
  { name: "HTML5 Semantic", category: "Web", icon: FaHtml5, color: "#f87171", bgGlow: "rgba(248,113,113,0.15)", border: "rgba(248,113,113,0.3)" },
  { name: "Postman & Testing", category: "APIs", icon: FaBolt, color: "#fb923c", bgGlow: "rgba(251,146,60,0.15)", border: "rgba(251,146,60,0.3)" },
];

const SkillCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <div
      style={{
        "--tech-color": item.color,
        "--tech-glow": item.bgGlow,
        "--tech-border": item.border,
      }}
      className="group relative flex items-center gap-3 rounded-xl sm:rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2.5 sm:px-5 sm:py-3 shadow-[var(--shadow-soft)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[var(--tech-color)] hover:shadow-[0_0_20px_var(--tech-glow)] cursor-default select-none shrink-0"
    >
      <div
        style={{ color: item.color, backgroundColor: item.bgGlow }}
        className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-lg sm:rounded-xl text-base sm:text-lg transition-transform duration-300 group-hover:scale-110"
      >
        <Icon />
      </div>
      <div className="flex flex-col text-left">
        <span className="text-xs sm:text-sm font-bold text-[var(--color-text)] tracking-tight whitespace-nowrap group-hover:text-[var(--tech-color)] transition-colors">
          {item.name}
        </span>
        <span className="text-[9px] sm:text-[10px] font-semibold text-[var(--color-subtle)] whitespace-nowrap">
          {item.category}
        </span>
      </div>
    </div>
  );
};

const TechMarquee = () => {
  // Duplicate arrays to create seamless infinite loop
  const row1Items = [...skillsRow1, ...skillsRow1];
  const row2Items = [...skillsRow2, ...skillsRow2];

  return (
    <section className="relative overflow-hidden py-4 sm:py-6">
      {/* Background Soft Glow Aura */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-28 w-96 rounded-full bg-linear-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 blur-3xl" />
      </div>

      {/* Header Accent Pill */}
      <div className="mx-auto mb-8 sm:mb-10 md:mb-12 max-w-7xl px-4 sm:px-6 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3.5 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-cyan-500 shadow-xs backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
          Technical Arsenal &bull; Always Moving Forward
        </p>
      </div>

      {/* Marquee Container with Left & Right Gradient Fade Masks */}
      <div className="pause-hover relative flex flex-col gap-6 sm:gap-8 md:gap-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Row 1: Leftward Scroll */}
        <div className="animate-marquee flex gap-3 sm:gap-4">
          {row1Items.map((item, idx) => (
            <SkillCard key={`row1-${item.name}-${idx}`} item={item} />
          ))}
        </div>

        {/* Row 2: Rightward / Reverse Scroll */}
        <div className="animate-marquee-reverse flex gap-3 sm:gap-4">
          {row2Items.map((item, idx) => (
            <SkillCard key={`row2-${item.name}-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
