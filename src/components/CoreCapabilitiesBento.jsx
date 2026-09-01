import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaLayerGroup,
  FaPaintBrush,
  FaChartLine,
  FaRobot,
  FaArrowRight,
  FaCheckCircle,
  FaBolt,
  FaDatabase,
  FaServer,
  FaCreditCard,
} from "react-icons/fa";

const CoreCapabilitiesBento = () => {
  return (
    <section className="relative px-4 sm:px-6 mx-auto max-w-7xl">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 dark:border-cyan-400/30 bg-purple-500/10 dark:bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-purple-700 dark:text-cyan-400 mb-3 shadow-xs">
          <FaBolt className="text-[10px] text-amber-500 animate-pulse" />
          <span>ENGINEERING SUPERPOWERS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-text)] tracking-tight">
          Crafted for <span className="bg-linear-to-r from-purple-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">Speed, Scale &amp; Delight</span>
        </h2>
        <p className="mt-2.5 text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed">
          Combining production MERN architecture, responsive design systems, actionable data modeling, and AI-driven workflows.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {/* CARD 1: Full-Stack MERN Architecture (Span 2 Cols on Large) */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="group relative md:col-span-2 rounded-2xl sm:rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 sm:p-7 shadow-[var(--shadow-soft)] overflow-hidden transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_12px_40px_rgba(34,211,238,0.15)] backdrop-blur-xl flex flex-col justify-between"
        >
          {/* Ambient Glow Background Accent */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-linear-to-bl from-cyan-500/15 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-linear-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center text-lg shadow-md shadow-cyan-500/20">
                  <FaLayerGroup />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                    Production Architecture
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Full-Stack MERN &amp; API Engineering
                  </h3>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                99.9% Uptime
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed mb-5">
              Architecting secure, end-to-end web applications with <strong className="text-[var(--color-text)]">React 19</strong>, <strong className="text-[var(--color-text)]">Node.js</strong>, <strong className="text-[var(--color-text)]">Express</strong>, and <strong className="text-[var(--color-text)]">MongoDB Atlas</strong>. Proven in production handling student counseling portals and course platforms at LaunchEd Global.
            </p>

            {/* Visual Interactive Architecture Pipeline */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-[var(--color-border)] mb-5">
              <div className="flex flex-col items-center text-center p-2 rounded-lg bg-white/70 dark:bg-slate-800/70 border border-purple-200/50 dark:border-purple-400/20">
                <FaBolt className="text-cyan-500 text-sm mb-1" />
                <span className="text-[11px] font-bold text-[var(--color-text)]">React 19 UI</span>
                <span className="text-[9px] text-[var(--color-subtle)]">State &amp; Routing</span>
              </div>
              <div className="flex flex-col items-center text-center p-2 rounded-lg bg-white/70 dark:bg-slate-800/70 border border-indigo-200/50 dark:border-indigo-400/20">
                <FaServer className="text-indigo-500 text-sm mb-1" />
                <span className="text-[11px] font-bold text-[var(--color-text)]">REST &amp; JWT</span>
                <span className="text-[9px] text-[var(--color-subtle)]">Auth &amp; RBAC</span>
              </div>
              <div className="flex flex-col items-center text-center p-2 rounded-lg bg-white/70 dark:bg-slate-800/70 border border-emerald-200/50 dark:border-emerald-400/20">
                <FaDatabase className="text-emerald-500 text-sm mb-1" />
                <span className="text-[11px] font-bold text-[var(--color-text)]">MongoDB</span>
                <span className="text-[9px] text-[var(--color-subtle)]">Indexed Schemas</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[var(--color-border)]">
            <div className="flex flex-wrap gap-1.5">
              {["React 19", "Node.js", "Express", "MongoDB", "REST APIs", "JWT", "RBAC"].map((pill) => (
                <span
                  key={pill}
                  className="rounded-md border border-[var(--color-border)] bg-slate-50 dark:bg-slate-900/70 px-2 py-0.5 text-[10px] font-semibold text-[var(--color-text)] group-hover:border-cyan-400/40 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>
            <Link
              to="/experience"
              className="inline-flex items-center gap-1 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              <span>Explore Roles</span>
              <FaArrowRight className="text-[9px]" />
            </Link>
          </div>
        </motion.div>

        {/* CARD 2: Fluid UI/UX & Responsive Engineering (Col 1 on Large) */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="group relative rounded-2xl sm:rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 sm:p-7 shadow-[var(--shadow-soft)] overflow-hidden transition-all duration-300 hover:border-purple-400/60 hover:shadow-[0_12px_40px_rgba(168,85,247,0.15)] backdrop-blur-xl flex flex-col justify-between"
        >
          <div className="absolute -bottom-16 -right-16 w-44 h-44 bg-linear-to-tl from-purple-500/15 via-pink-500/10 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

          <div>
            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-linear-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center text-lg shadow-md shadow-purple-500/20 mb-4">
              <FaPaintBrush />
            </div>

            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Interaction Design
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mt-0.5">
              Pixel-Perfect UI/UX Systems
            </h3>

            <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed mt-2.5 mb-5">
              Crafting fluid 60fps micro-interactions with <strong className="text-[var(--color-text)]">Tailwind CSS</strong>, <strong className="text-[var(--color-text)]">Framer Motion</strong>, glassmorphism, and instant dark/light theme transitions.
            </p>

            {/* Interactive Feature Badges */}
            <div className="space-y-2 p-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-[var(--color-border)] mb-5">
              <div className="flex items-center justify-between text-[11px] font-medium text-[var(--color-text)]">
                <span className="flex items-center gap-1.5">
                  <FaCheckCircle className="text-purple-500 text-xs" /> Responsive across all screens
                </span>
                <span className="text-[9px] font-bold text-purple-600 dark:text-purple-400">100% Mobile</span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-medium text-[var(--color-text)]">
                <span className="flex items-center gap-1.5">
                  <FaCheckCircle className="text-purple-500 text-xs" /> Light / Dark Theme Sync
                </span>
                <span className="text-[9px] font-bold text-purple-600 dark:text-purple-400">Zero Flash</span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-medium text-[var(--color-text)]">
                <span className="flex items-center gap-1.5">
                  <FaCheckCircle className="text-purple-500 text-xs" /> Accessible &amp; SEO-Optimized
                </span>
                <span className="text-[9px] font-bold text-purple-600 dark:text-purple-400">A11y Ready</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[var(--color-border)]">
            <span className="text-[10px] font-semibold text-[var(--color-subtle)]">Tailwind &bull; Framer &bull; CSS3</span>
            <Link
              to="/skills"
              className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline"
            >
              <span>View UI Skills</span>
              <FaArrowRight className="text-[9px]" />
            </Link>
          </div>
        </motion.div>

        {/* CARD 3: Business Intelligence & Data Analytics (Col 1 on Large) */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="group relative rounded-2xl sm:rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 sm:p-7 shadow-[var(--shadow-soft)] overflow-hidden transition-all duration-300 hover:border-amber-400/60 hover:shadow-[0_12px_40px_rgba(245,158,11,0.15)] backdrop-blur-xl flex flex-col justify-between"
        >
          <div className="absolute -top-16 -left-16 w-44 h-44 bg-linear-to-br from-amber-500/15 via-orange-500/10 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

          <div>
            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-linear-to-tr from-amber-500 to-orange-600 text-white flex items-center justify-center text-lg shadow-md shadow-amber-500/20 mb-4">
              <FaChartLine />
            </div>

            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Data &amp; Insights
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors mt-0.5">
              BI Dashboards &amp; Data Modeling
            </h3>

            <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed mt-2.5 mb-5">
              Transforming complex multi-table datasets into actionable executive insights with <strong className="text-[var(--color-text)]">Power BI</strong>, <strong className="text-[var(--color-text)]">DAX</strong>, <strong className="text-[var(--color-text)]">SQL</strong>, and ETL modeling.
            </p>

            {/* Visual KPI Highlight Card */}
            <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-[var(--color-border)] mb-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[var(--color-text)]">5-Star Gold Badge</span>
                <span className="text-[10px] font-bold px-2 py-0.2 rounded-md bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-400/30">
                  HackerRank SQL
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[var(--color-text)]">Verified Analytics</span>
                <span className="text-[10px] font-bold px-2 py-0.2 rounded-md bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-400/30">
                  Power BI &bull; DAX
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[var(--color-border)]">
            <span className="text-[10px] font-semibold text-[var(--color-subtle)]">SQL &bull; DAX &bull; Power Query</span>
            <Link
              to="/certifications"
              className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
            >
              <span>Credentials</span>
              <FaArrowRight className="text-[9px]" />
            </Link>
          </div>
        </motion.div>

        {/* CARD 4: AI Solutions & Payment Ecosystems (Span 2 Cols on Large) */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="group relative md:col-span-2 rounded-2xl sm:rounded-3xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 sm:p-7 shadow-[var(--shadow-soft)] overflow-hidden transition-all duration-300 hover:border-emerald-400/60 hover:shadow-[0_12px_40px_rgba(16,185,129,0.15)] backdrop-blur-xl flex flex-col justify-between"
        >
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-linear-to-tr from-emerald-500/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-linear-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center text-lg shadow-md shadow-emerald-500/20">
                  <FaRobot />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Smart Automations
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--color-text)] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    AI Integrations &amp; Payment Ecosystems
                  </h3>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-bold text-cyan-600 dark:text-cyan-400">
                <FaCreditCard className="text-[9px]" />
                Razorpay &amp; Gemini API
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[var(--color-muted)] leading-relaxed mb-5">
              Integrating <strong className="text-[var(--color-text)]">Google Gemini AI</strong> for real-time document OCR and conversational agents, paired with automated <strong className="text-[var(--color-text)]">Telegram bots</strong> and secure <strong className="text-[var(--color-text)]">Razorpay</strong> checkout pipelines.
            </p>

            {/* Visual Integration Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 p-3 rounded-xl bg-slate-100/80 dark:bg-slate-900/60 border border-[var(--color-border)] mb-5">
              <div className="p-2 rounded-lg bg-white/70 dark:bg-slate-800/70 border border-[var(--color-border)] text-center">
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 block">Gemini AI</span>
                <span className="text-[9px] text-[var(--color-subtle)]">Vision &amp; OCR</span>
              </div>
              <div className="p-2 rounded-lg bg-white/70 dark:bg-slate-800/70 border border-[var(--color-border)] text-center">
                <span className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 block">Razorpay</span>
                <span className="text-[9px] text-[var(--color-subtle)]">Webhooks &amp; Orders</span>
              </div>
              <div className="p-2 rounded-lg bg-white/70 dark:bg-slate-800/70 border border-[var(--color-border)] text-center">
                <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 block">Telegram API</span>
                <span className="text-[9px] text-[var(--color-subtle)]">Live Expense Bot</span>
              </div>
              <div className="p-2 rounded-lg bg-white/70 dark:bg-slate-800/70 border border-[var(--color-border)] text-center">
                <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 block">Docker</span>
                <span className="text-[9px] text-[var(--color-subtle)]">Containerization</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[var(--color-border)]">
            <div className="flex flex-wrap gap-1.5">
              {["Gemini AI", "Telegram Bot API", "Razorpay Checkout", "Docker", "OCR Parsing"].map((pill) => (
                <span
                  key={pill}
                  className="rounded-md border border-[var(--color-border)] bg-slate-50 dark:bg-slate-900/70 px-2 py-0.5 text-[10px] font-semibold text-[var(--color-text)] group-hover:border-emerald-400/40 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>See AI Projects</span>
              <FaArrowRight className="text-[9px]" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreCapabilitiesBento;
