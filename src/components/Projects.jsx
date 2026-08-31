import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useMobileCarousel from "../hooks/useMobileCarousel";
import {
  FaArrowRight,
  FaChartLine,
  FaExternalLinkAlt,
  FaGithub,
  FaLayerGroup,
  FaShieldAlt,
  FaShoppingCart,
  FaTasks,
  FaRobot,
  FaUsers,
  FaFilter,
} from "react-icons/fa";

import imgTaskInfus from "../assets/project_taskinfus.png";
import imgLaunchedGlobal from "../assets/project_launched_global.png";
import imgAiExpenseTracker from "../assets/project_ai_expense_tracker.png";
import imgAiAssistant from "../assets/project_ai_assistant.png";
import imgUserAuth from "../assets/project_user_auth.png";
import imgEcommerce from "../assets/project_ecommerce_cart.png";
import imgTaskManager from "../assets/project_task_manager.png";
import imgEvSales from "../assets/project_ev_sales.png";
import imgBlinkitSales from "../assets/project_blinkit_sales.png";

const MotionH2 = motion.h2;
const MotionP = motion.p;
const MotionDiv = motion.div;

const projects = [
  {
    title: "TaskInfus — Enterprise EMS",
    category: "Enterprise SaaS (MERN)",
    group: "mern",
    icon: FaUsers,
    image: imgTaskInfus,
    description:
      "A full-stack enterprise employee management system with role-based access control (RBAC), department workload analytics, attendance shift clock-in/out, leave approval workflows, and 1-click CSV exports.",
    highlights: ["Admin executive analytics & RBAC", "Department workloads & performance scorecards", "Attendance clock-in & leave approval workflows"],
    tech: ["React 19", "Node.js", "Express.js", "MongoDB", "Tailwind CSS v4", "JWT Auth"],
    github: "https://github.com/Shumbham-Gupta/Employee_Management_System",
    demo: "https://employee-management-system-frontend-5opl.onrender.com/login",
  },
  {
    title: "AI Expense Intelligence",
    category: "AI + FinTech Platform",
    group: "mern",
    icon: FaRobot,
    image: imgAiExpenseTracker,
    description:
      "An automated expense tracking & financial advisor web app integrated with Telegram & receipt OCR scanning, powered by Google Gemini AI to analyze spending velocity, overspending trends, and budget limits.",
    highlights: ["Telegram chat & OCR receipt tracking", "Gemini AI overspending & budget advisor", "Real-time analytics & budget alerts"],
    tech: ["Python", "JavaScript", "Gemini AI", "Telegram Bot API", "HTML5 / CSS3", "Docker"],
    github: "https://github.com/Shumbham-Gupta/AI_Expense_Tracker",
    demo: "https://ai-expense-tracker-968h.onrender.com/",
  },
  {
    title: "Launched Global Platform",
    category: "Full Stack EdTech",
    group: "mern",
    icon: FaRobot,
    image: imgLaunchedGlobal,
    description:
      "A production-ready overseas education & upskilling platform featuring mentor-led course catalogs, internship programs, study abroad consulting, and student workflows.",
    highlights: ["Full-stack platform development", "Course catalogs & lead funnel", "Razorpay integration & SEO optimization"],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "Tailwind CSS"],
    github: "https://github.com/Shumbham-Gupta",
    demo: "https://launchedglobal.in",
  },
  {
    title: "AI Virtual Assistant",
    category: "AI + MERN App",
    group: "mern",
    icon: FaRobot,
    image: imgAiAssistant,
    description:
      "A conversational virtual assistant that uses the MERN stack and Google Gemini API to understand natural language and return useful responses.",
    highlights: ["Natural language prompts", "Gemini API integration", "Interactive assistant UI"],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API"],
    github: "https://github.com/Shumbham-Gupta/VirtualAssistant",
    demo: "https://virtualassistant-frontend-c2hv.onrender.com",
  },
  {
    title: "User Authentication System",
    category: "Security Flow",
    group: "mern",
    icon: FaShieldAlt,
    image: imgUserAuth,
    description:
      "A secure authentication system with signup, login, protected routes, JWT handling, and password hashing for modern web apps.",
    highlights: ["JWT auth flow", "Protected routes", "Password hashing"],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt"],
    github: "https://github.com/Shumbham-Gupta/MERN_User_Authentication_System",
    demo: "https://user-authentication-system-frontend.onrender.com",
  },
  {
    title: "Mock E-Commerce Cart",
    category: "Full Stack Store",
    group: "mern",
    icon: FaShoppingCart,
    image: imgEcommerce,
    description:
      "A full-stack shopping cart with product browsing, cart updates, total calculation, and a mock checkout experience.",
    highlights: ["Cart state management", "Frontend-backend integration", "Responsive shopping UI"],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Axios", "Tailwind CSS"],
    github: "https://github.com/Shumbham-Gupta/Mock-E-com-Cart",
    demo: "https://mock-e-com-cart-frontend.onrender.com",
  },
  {
    title: "Task Management Web App",
    category: "Productivity App",
    group: "mern",
    icon: FaTasks,
    image: imgTaskManager,
    description:
      "A MERN task manager with authentication and an interface to create, update, organize, and track tasks efficiently.",
    highlights: ["Authenticated workspace", "Task CRUD operations", "Clean productivity flow"],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Authentication"],
    github: "https://github.com/Shumbham-Gupta/WebApp_Task_Manager",
    demo: "https://webapp-task-manager-frontend.onrender.com",
  },
  {
    title: "Electric Vehicle Sales Analysis",
    category: "Analytics Dashboard",
    group: "analytics",
    icon: FaChartLine,
    image: imgEvSales,
    description:
      "An interactive Power BI dashboard that analyzes EV sales data and turns market trends into clear visual insights.",
    highlights: ["Sales trend analysis", "Business insights", "Interactive report views"],
    tech: ["Power BI", "SQL", "Excel"],
    github: "https://github.com/Shumbham-Gupta/Electric_Vehicle_Sales_Dashboard",
    demo: "https://github.com/Shumbham-Gupta/Electric_Vehicle_Sales_Dashboard",
  },
  {
    title: "Blinkit Sales Dashboard",
    category: "BI Reporting",
    group: "analytics",
    icon: FaLayerGroup,
    image: imgBlinkitSales,
    description:
      "A Power BI dashboard for Blinkit sales performance with key metrics, category insights, and decision-ready visualizations.",
    highlights: ["Revenue KPIs", "Category analysis", "Data modeling"],
    tech: ["Power BI", "Power Query", "DAX", "Excel/CSV", "Data Modeling"],
    github: "https://github.com/Shumbham-Gupta/BlinkIt_Sales_Dashboard",
    demo: "https://github.com/Shumbham-Gupta/BlinkIt_Sales_Dashboard/blob/main/Blinkit_project_analysis.pbit",
  },
];

const projectStats = [
  { value: "9", label: "Featured projects" },
  { value: "7", label: "Full-Stack & AI builds" },
  { value: "2", label: "BI dashboards" },
];

const categoryTabs = [
  { id: "all", label: "All Work" },
  { id: "mern", label: "Full-Stack & AI Apps" },
  { id: "analytics", label: "Analytics & Power BI" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.group === activeCategory);

  const { trackRef, activeIndex, scrollToItem, pauseAutoplay, handleScroll } =
    useMobileCarousel(filteredProjects.length);

  return (
    <section id="projects" className="relative py-24 px-5 sm:px-6 section-surface overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 h-72 w-72 glow-purple rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/5 right-0 h-72 w-72 glow-cyan rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-500">
            Selected Work
          </p>
          <MotionH2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold section-title"
          >
            Projects That Show How I Build
          </MotionH2>
          <MotionP
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-5 text-base md:text-lg leading-relaxed text-[var(--color-muted)]"
          >
            A focused mix of full-stack applications and analytics dashboards, built to show practical
            problem solving, clean UI thinking, and production-style integrations.
          </MotionP>
        </div>

        <div className="mx-auto mb-10 grid max-w-3xl grid-cols-3 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white/10 shadow-[var(--shadow-soft)] backdrop-blur">
          {projectStats.map((stat) => (
            <div key={stat.label} className="px-3 py-5 text-center">
              <p className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
                {stat.value}
              </p>
              <p className="mt-1 text-xs md:text-sm text-[var(--color-subtle)]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2.5">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              type="button"
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeCategory === tab.id
                  ? "border-cyan-400 bg-linear-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                  : "border-[var(--color-border)] bg-white/10 text-[var(--color-text)] hover:border-cyan-400 hover:text-cyan-500"
              }`}
            >
              <FaFilter className="text-xs" />
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <MotionDiv
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <div
              ref={trackRef}
              onScroll={handleScroll}
              onPointerDown={pauseAutoplay}
              onTouchStart={pauseAutoplay}
              className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:snap-none lg:grid-cols-2 lg:gap-6 lg:overflow-visible lg:p-0"
            >
              {filteredProjects.map((project, index) => {
                const Icon = project.icon;

                return (
                  <MotionDiv
                    key={project.title}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.08, duration: 0.55 }}
                    whileHover={{ y: -6 }}
                    className="group themed-card w-[86%] shrink-0 snap-center border rounded-2xl p-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.36)] sm:w-[68%] sm:p-5 md:w-[56%] lg:w-auto lg:shrink"
                  >
                    <div className="flex h-full flex-col gap-3.5 sm:gap-4">
                      {/* Visual UI Preview Card Header */}
                      <div className="relative overflow-hidden rounded-xl border border-[var(--color-border)] aspect-video group/img shadow-md">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                        <span className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/75 px-3 py-1 text-xs font-semibold text-cyan-400 backdrop-blur shadow-sm">
                          <Icon className="text-xs" />
                          {project.category}
                        </span>
                        <span className="absolute top-2.5 right-2.5 hidden sm:inline-flex rounded-full border border-white/20 bg-slate-950/75 px-2.5 py-0.5 text-xs font-semibold text-purple-300 backdrop-blur">
                          #{String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg sm:text-2xl font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
                          {project.title}
                        </h3>
                      </div>

                      <p className="line-clamp-3 text-sm leading-relaxed text-[var(--color-muted)] sm:line-clamp-none">
                        {project.description}
                      </p>

                      <div className="grid gap-1.5 sm:gap-2">
                        {project.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-[var(--color-text)]">
                            <FaArrowRight className="shrink-0 text-xs text-cyan-500" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-[var(--color-border)] bg-linear-to-r from-purple-700/15 to-cyan-700/15 px-2.5 py-0.5 text-[11px] sm:px-3 sm:py-1 sm:text-sm text-[var(--color-text)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex flex-row gap-2 pt-1 sm:gap-3 sm:pt-2">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-cyan-600 px-3 py-2.5 text-xs sm:px-4 sm:py-3 sm:text-sm font-semibold text-white shadow-[0_0_18px_rgba(139,92,246,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(34,211,238,0.45)]"
                        >
                          <FaExternalLinkAlt />
                          Live Preview
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] px-3 py-2.5 text-xs sm:px-4 sm:py-3 sm:text-sm font-semibold text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-500"
                        >
                          <FaGithub />
                          Source Code
                        </a>
                      </div>
                    </div>
                  </MotionDiv>
                );
              })}
            </div>
          </MotionDiv>
        </AnimatePresence>

        <div className="mt-6 flex items-center justify-center gap-2 lg:hidden">
          {filteredProjects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              aria-label={`Go to project ${index + 1}: ${project.title}`}
              onClick={() => {
                pauseAutoplay();
                scrollToItem(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-7 bg-linear-to-r from-purple-500 to-cyan-500"
                  : "w-2 bg-slate-400/40 hover:bg-slate-400/70"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
