import React from "react";
import { motion } from "framer-motion";
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
} from "react-icons/fa";

const MotionH2 = motion.h2;
const MotionP = motion.p;
const MotionDiv = motion.div;

const projects = [
  {
    title: "AI Virtual Assistant",
    category: "AI + MERN App",
    icon: FaRobot,
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
    icon: FaShieldAlt,
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
    icon: FaShoppingCart,
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
    icon: FaTasks,
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
    icon: FaChartLine,
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
    icon: FaLayerGroup,
    description:
      "A Power BI dashboard for Blinkit sales performance with key metrics, category insights, and decision-ready visualizations.",
    highlights: ["Revenue KPIs", "Category analysis", "Data modeling"],
    tech: ["Power BI", "Power Query", "DAX", "Excel/CSV", "Data Modeling"],
    github: "https://github.com/Shumbham-Gupta/BlinkIt_Sales_Dashboard",
    demo: "https://github.com/Shumbham-Gupta/BlinkIt_Sales_Dashboard/blob/main/Blinkit_project_analysis.pbit",
  },
];

const projectStats = [
  { value: "6", label: "Featured projects" },
  { value: "4", label: "MERN builds" },
  { value: "2", label: "BI dashboards" },
];

const Projects = () => (
  <section id="projects" className="relative py-24 px-5 sm:px-6 section-surface overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-0 h-72 w-72 glow-purple rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/5 right-0 h-72 w-72 glow-cyan rounded-full blur-3xl animate-pulse delay-700"></div>
    </div>

    <div className="relative z-10 mx-auto max-w-7xl">
      <div className="mx-auto mb-14 max-w-3xl text-center">
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

      <div className="mx-auto mb-12 grid max-w-3xl grid-cols-3 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white/10 shadow-[var(--shadow-soft)] backdrop-blur">
        {projectStats.map((stat) => (
          <div key={stat.label} className="px-3 py-5 text-center">
            <p className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
              {stat.value}
            </p>
            <p className="mt-1 text-xs md:text-sm text-[var(--color-subtle)]">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <MotionDiv
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.55 }}
              whileHover={{ y: -6 }}
              className="group themed-card border rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.36)]"
            >
              <div className="flex h-full flex-col gap-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] bg-linear-to-br from-purple-600/20 to-cyan-500/20 text-cyan-500">
                      <Icon className="text-xl" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-purple-500">{project.category}</p>
                      <h3 className="mt-1 text-xl sm:text-2xl font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-semibold text-[var(--color-subtle)]">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-[var(--color-muted)]">
                  {project.description}
                </p>

                <div className="grid gap-2">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3 text-sm text-[var(--color-text)]">
                      <FaArrowRight className="shrink-0 text-xs text-cyan-500" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[var(--color-border)] bg-linear-to-r from-purple-700/15 to-cyan-700/15 px-3 py-1 text-xs sm:text-sm text-[var(--color-text)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-cyan-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_18px_rgba(139,92,246,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(34,211,238,0.45)]"
                  >
                    <FaExternalLinkAlt />
                    Live Preview
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm font-semibold text-[var(--color-text)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-500"
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
    </div>
  </section>
);

export default Projects;
