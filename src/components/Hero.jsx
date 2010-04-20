import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import profilePic from "../assets/updatedProfile.png";

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;

const roleBadges = ["MERN Stack Developer", "Data Analytics Enthusiast", "B.Tech CSE"];

const heroStats = [
  { value: "6+", label: "Projects built" },
  { value: "MERN", label: "Primary stack" },
  { value: "BI", label: "Analytics focus" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden section-surface px-5 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      <div className="absolute left-[-120px] top-24 h-80 w-80 glow-purple rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-[-120px] h-96 w-96 glow-cyan rounded-full blur-3xl"></div>
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/50 to-transparent"></div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="text-center lg:text-left">
          <MotionDiv
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto mb-6 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-white/10 px-4 py-2 text-sm font-semibold text-[var(--color-text)] shadow-[var(--shadow-soft)] backdrop-blur lg:mx-0"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"></span>
            Available for full-stack and analytics opportunities
          </MotionDiv>

          <MotionH1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.7 }}
            className="text-4xl font-extrabold leading-tight tracking-normal text-[var(--color-text)] sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Hi, I am{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-cyan-500 to-purple-500">
              Shubham Gupta
            </span>
          </MotionH1>

          <MotionP
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.65 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg lg:mx-0"
          >
            I build responsive MERN applications and data-driven dashboards with a focus on
            clean interfaces, practical workflows, and reliable full-stack implementation.
          </MotionP>

          <MotionDiv
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.6 }}
            className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            {roleBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[var(--color-border)] bg-linear-to-r from-purple-700/10 to-cyan-700/10 px-4 py-2 text-sm font-semibold text-[var(--color-text)]"
              >
                {badge}
              </span>
            ))}
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.6 }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-76}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-cyan-600 px-6 py-3 text-base font-semibold text-white shadow-[0_0_22px_rgba(139,92,246,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]"
            >
              View Projects
              <FaArrowRight />
            </Link>
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-76}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] px-6 py-3 text-base font-semibold text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-500"
            >
              Contact Me
            </Link>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.6 }}
            className="mt-8 grid grid-cols-3 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white/10 shadow-[var(--shadow-soft)] backdrop-blur sm:max-w-xl lg:max-w-2xl"
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="px-3 py-4 text-center">
                <p className="text-xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-[var(--color-subtle)] sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </MotionDiv>
        </div>

        <MotionDiv
          initial={{ opacity: 0, x: 36, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.18, duration: 0.8 }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-lg"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-linear-to-br from-purple-600/20 via-white/10 to-cyan-500/20 p-3 shadow-[0_0_38px_rgba(139,92,246,0.28)]">
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-cyan-500/10"></div>
            <div className="relative flex aspect-[2/3] items-center justify-center overflow-hidden rounded-[1.55rem] bg-slate-100">
              <img
                src={profilePic}
                alt="Shubham Gupta"
                className="h-full w-full object-contain object-center"
              />
            </div>
          </div>

          <div className="mt-5 flex justify-center gap-3">
            <a
              href="https://github.com/Shumbham-Gupta"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-purple-500 transition-all hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shubham16gupta/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-purple-500 transition-all hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-500"
            >
              <FaLinkedin />
            </a>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Hero;
