import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaDownload, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import profilePic from "../assets/updatedProfile.webp";

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionA = motion.a;

const roleBadges = ["MERN Stack Developer", "Data Analytics Enthusiast", "B.Tech CSE"];

const TYPED_ROLES = [
  "Full Stack MERN Developer",
  "Data Analytics Enthusiast",
  "AI & SaaS Web Builder",
  "React & Node.js Specialist",
];

const easeOutSmooth = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOutSmooth },
  },
};

const Hero = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const fullText = TYPED_ROLES[roleIndex];
    const typingSpeed = isDeleting ? 45 : 85;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          // Pause at full word
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % TYPED_ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden section-surface px-4 pb-10 pt-6 sm:px-6 sm:pb-16 sm:pt-12 lg:pt-16 lg:px-8"
    >
      <MotionDiv
        animate={{ x: [0, 40, 0], y: [0, 24, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-100px] top-24 h-56 w-56 glow-purple rounded-full blur-3xl sm:left-[-120px] sm:h-80 sm:w-80"
      ></MotionDiv>
      <MotionDiv
        animate={{ x: [0, -36, 0], y: [0, -28, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-10 right-[-100px] h-64 w-64 glow-cyan rounded-full blur-3xl sm:right-[-120px] sm:h-96 sm:w-96"
      ></MotionDiv>
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/50 to-transparent"></div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <MotionDiv
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <MotionDiv
            variants={item}
            className="mx-auto mb-6 hidden sm:inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-white/10 px-4 py-2 text-sm font-semibold text-[var(--color-text)] shadow-[var(--shadow-soft)] backdrop-blur lg:mx-0"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"></span>
            </span>
            Available for full-stack and analytics opportunities
          </MotionDiv>

          <MotionH1
            variants={item}
            className="text-4xl font-extrabold leading-tight tracking-normal text-[var(--color-text)] sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Hi, I am{" "}
            <span className="animated-gradient-text text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-cyan-500 to-purple-500">
              Shubham Gupta
            </span>
          </MotionH1>

          <MotionDiv
            variants={item}
            className="mt-3 min-h-[36px] sm:min-h-[44px] flex items-center justify-center lg:justify-start gap-2"
          >
            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-purple-400 to-cyan-300">
              {currentText}
            </span>
            <span className="inline-block w-[3px] h-6 sm:h-8 bg-cyan-400 animate-pulse rounded-full shadow-[0_0_8px_rgba(34,211,238,0.9)]"></span>
          </MotionDiv>

          <MotionP
            variants={item}
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg lg:mx-0"
          >
            I build responsive MERN applications and data-driven dashboards with a focus on
            clean interfaces, practical workflows, and reliable full-stack implementation.
          </MotionP>

          <MotionDiv
            variants={item}
            className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start"
          >
            {roleBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-[var(--color-border)] bg-linear-to-r from-purple-700/10 to-cyan-700/10 px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400"
              >
                {badge}
              </span>
            ))}
          </MotionDiv>

          <MotionDiv
            variants={item}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
          >
            <Link
              to="/projects"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-cyan-600 px-6 py-3 text-base font-semibold text-white shadow-[0_0_22px_rgba(139,92,246,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]"
            >
              View Projects
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-cyan-400/50 bg-cyan-500/10 px-6 py-3 text-base font-semibold text-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_26px_rgba(34,211,238,0.4)]"
            >
              <FaFilePdf className="text-sm" />
              Preview Resume
            </button>
            <Link
              to="/contact"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] px-6 py-3 text-base font-semibold text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-500"
            >
              Contact Me
            </Link>
          </MotionDiv>

        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, x: 36, scale: 0.94 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: easeOutSmooth }}
          className="relative mx-auto w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[280px]"
        >
          <MotionDiv
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <MotionDiv
              animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.04, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-3 rounded-[2.4rem] bg-linear-to-br from-purple-600/30 via-transparent to-cyan-500/30 blur-xl"
            ></MotionDiv>

            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-linear-to-br from-purple-600/20 via-white/10 to-cyan-500/20 p-3 shadow-[0_0_38px_rgba(139,92,246,0.28)]">
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 to-cyan-500/10"></div>
              <div className="relative flex aspect-[2/3] items-center justify-center overflow-hidden rounded-[1.55rem] bg-slate-100">
                <img
                  src={profilePic}
                  alt="Shubham Gupta"
                  className="h-full w-full object-contain object-center transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>
            </div>
          </MotionDiv>

          <div className="mt-5 flex justify-center gap-3">
            {[
              {
                href: "https://github.com/Shumbham-Gupta",
                label: "GitHub",
                icon: <FaGithub />,
              },
              {
                href: "https://www.linkedin.com/in/shubham16gupta/",
                label: "LinkedIn",
                icon: <FaLinkedin />,
              },
            ].map(({ href, label, icon }, index) => (
              <MotionA
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5, ease: easeOutSmooth }}
                whileHover={{ y: -4, scale: 1.12 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-purple-500 transition-colors hover:border-cyan-400 hover:text-cyan-500"
              >
                {icon}
              </MotionA>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Hero;
