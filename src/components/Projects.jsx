import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useMobileCarousel from "../hooks/useMobileCarousel";
import ProjectModal from "./ProjectModal";
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
  FaSearch,
  FaTimes,
  FaBookOpen,
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

export const projects = [
  {
    title: "TaskInfus — Enterprise EMS",
    category: "Enterprise SaaS (MERN)",
    group: "mern",
    icon: FaUsers,
    image: imgTaskInfus,
    description:
      "A full-stack enterprise employee management system with role-based access control (RBAC), department workload analytics, attendance shift clock-in/out, leave approval workflows, and 1-click CSV exports.",
    highlights: [
      "Admin executive analytics & RBAC",
      "Department workloads & performance scorecards",
      "Attendance clock-in & leave approval workflows",
    ],
    tech: ["React 19", "Node.js", "Express.js", "MongoDB", "Tailwind CSS v4", "JWT Auth"],
    github: "https://github.com/Shumbham-Gupta/Employee_Management_System",
    demo: "https://employee-management-system-frontend-5opl.onrender.com/login",
    problem:
      "Modern enterprises suffer from fragmented tracking across separate spreadsheets for attendance, department assignments, and leave approvals, resulting in administrative delays.",
    solution:
      "TaskInfus unifies employee profiles, multi-tier RBAC authorization, automated clock-in shift timers, and executive department metrics into a streamlined web platform.",
    archOverview:
      "Decoupled React 19 single-page client interfacing with an Express REST API and MongoDB cluster using token-based session verification.",
    frontendArch: "React 19, Tailwind CSS v4, dynamic role-based routes, interactive analytics charts.",
    backendArch: "Node.js / Express.js REST API with modular controllers, validation schemas, and JWT middleware.",
    dataArch: "MongoDB Atlas with Mongoose schemas indexing employees, attendance logs, and leave requests.",
    securityArch: "BCrypt password hashing, role-based route middleware, and sanitized request payloads.",
    challengesList: [
      {
        title: "Granular Multi-Tier Authorization",
        desc: "Designed flexible middleware allowing Admin global control, Manager department-level visibility, and Employee self-service restrictions without code duplication.",
      },
      {
        title: "Real-Time Shift Clocking State",
        desc: "Engineered robust timestamp validation to handle cross-day shifts and timezone consistency reliably.",
      },
    ],
  },
  {
    title: "AI Expense Intelligence",
    category: "AI + FinTech Platform",
    group: "mern",
    icon: FaRobot,
    image: imgAiExpenseTracker,
    description:
      "An automated expense tracking & financial advisor web app integrated with Telegram & receipt OCR scanning, powered by Google Gemini AI to analyze spending velocity, overspending trends, and budget limits.",
    highlights: [
      "Telegram chat & OCR receipt tracking",
      "Gemini AI overspending & budget advisor",
      "Real-time analytics & budget alerts",
    ],
    tech: ["Python", "JavaScript", "Gemini AI", "Telegram Bot API", "HTML5 / CSS3", "Docker"],
    github: "https://github.com/Shumbham-Gupta/AI_Expense_Tracker",
    demo: "https://ai-expense-tracker-968h.onrender.com/",
    problem:
      "Traditional budget trackers require tedious manual logging, causing users to abandon expense tracking and remain unaware of micro-spending leaks.",
    solution:
      "Users can snap a photo of receipts or send messages to a Telegram bot; Google Gemini AI and OCR pipelines automatically parse amounts, assign categories, and generate predictive budget insights.",
    archOverview:
      "Asynchronous webhook microservice ingesting Telegram image payloads, invoking OCR processing and Gemini generative reasoning before storing structured transaction entries.",
    frontendArch: "Responsive analytics dashboard displaying spending velocity meters, breakdown donuts, and budget warnings.",
    backendArch: "Python / Node service tier handling Telegram Webhook API, OCR pipelines, and Google Gemini 1.5 endpoints.",
    dataArch: "Structured document store organizing transactions, date partitions, and categorical spending tags.",
    securityArch: "Webhook signature authentication, environment secret encapsulation, and sanitized LLM prompt templates.",
    challengesList: [
      {
        title: "Receipt OCR Noise & Variation",
        desc: "Tuned image pre-filtering to accurately capture merchant names and total amounts from unevenly lit or crumpled receipt photos.",
      },
      {
        title: "Predictive AI Financial Advice",
        desc: "Structured prompt chains to evaluate monthly velocity against targets, preventing hallucinations and outputting actionable tips.",
      },
    ],
  },
  {
    title: "Launched Global Platform",
    category: "Full Stack EdTech",
    group: "mern",
    icon: FaRobot,
    image: imgLaunchedGlobal,
    description:
      "A production-ready overseas education & upskilling platform featuring mentor-led course catalogs, internship programs, study abroad consulting, and student workflows.",
    highlights: [
      "Full-stack platform development",
      "Course catalogs & lead funnel",
      "Razorpay integration & SEO optimization",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "Tailwind CSS"],
    github: "https://github.com/Shumbham-Gupta",
    demo: "https://launchedglobal.in",
    problem:
      "Students looking for global universities and skill-up tracks lacked a unified platform offering structured counseling, accredited coursework, and verified enrollments.",
    solution:
      "Engineered an integrated educational marketplace with dynamic course catalogs, Razorpay payment processing, lead capture pipelines, and an administrative dashboard.",
    archOverview:
      "High-speed React web app backed by a Node.js REST API with Razorpay webhook verification and MongoDB persistent storage.",
    frontendArch: "React.js with Tailwind CSS, animated program cards, responsive application funnels, and fast SEO metadata.",
    backendArch: "Express.js API powering course catalogs, mentor allocations, inquiry management, and payment verification.",
    dataArch: "MongoDB collections for courses, user enrollments, mentor profiles, and payment audit records.",
    securityArch: "HMAC SHA-256 signature verification on payment webhooks and role-gated admin routes.",
    challengesList: [
      {
        title: "Idempotent Payment Handling",
        desc: "Implemented strict signature verification and duplicate-event suppression to guarantee enrollment access is granted exactly once per payment.",
      },
      {
        title: "Conversion Funnel Optimization",
        desc: "Refactored user onboarding and checkout flows to reduce registration friction and boost lead conversion.",
      },
    ],
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
    problem:
      "Users often need fast answers, code debugging, and content generation without clunky interfaces or disconnected toolsets.",
    solution:
      "Built a real-time conversational AI client leveraging Google Gemini models to assist users with knowledge retrieval, summarization, and task drafting.",
    archOverview:
      "Full-stack MERN architecture orchestrating client chat streams with Node.js backend prompt handlers and Gemini AI endpoints.",
    frontendArch: "React interface with optimistic chat bubble updates, markdown parsing, and code syntax highlighting.",
    backendArch: "Express API server managing session context, prompt sanitization, and Gemini API streaming.",
    dataArch: "MongoDB database archiving prompt history and user sessions.",
    securityArch: "Environment key isolation, rate-limiting, and sanitized output rendering to prevent XSS.",
    challengesList: [
      {
        title: "Context Window Efficiency",
        desc: "Implemented history truncation and system prompt anchoring to keep context relevant while optimizing token latency.",
      },
    ],
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
    problem:
      "Web applications require a secure, reusable authentication architecture that protects private data against common vulnerabilities.",
    solution:
      "Engineered an end-to-end authentication boilerplate featuring BCrypt salted hashing, JSON Web Tokens, protected React routing, and password validation.",
    archOverview:
      "Token-authenticated REST architecture with stateless JWT validation and encrypted database credentials.",
    frontendArch: "React client with form validation state, token storage handlers, and route redirect guards.",
    backendArch: "Node/Express auth service with login, registration, and profile endpoints.",
    dataArch: "MongoDB User schema with unique email indexes and hashed passwords.",
    securityArch: "BCrypt hashing with 10 salt rounds, signed JWT expiration, and sanitized error messages.",
    challengesList: [
      {
        title: "Graceful Token Invalidation",
        desc: "Constructed frontend interceptors to detect expired tokens and smoothly redirect unauthenticated users without page reloads.",
      },
    ],
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
    problem:
      "E-commerce carts frequently face state synchronization lag, race conditions in stock counts, and calculation mismatches during checkout.",
    solution:
      "Designed a dynamic shopping cart with optimistic UI quantity increments, real-time total & tax recalculations, and item management.",
    archOverview:
      "Modular React client coordinating with Express cart endpoints and MongoDB product catalog.",
    frontendArch: "React state management with instant quantity adjustments and animated cart drawers.",
    backendArch: "Express API managing cart state, stock validation, and checkout simulations.",
    dataArch: "MongoDB products and orders collection.",
    securityArch: "Input validation and server-side pricing recalculation.",
    challengesList: [
      {
        title: "Optimistic State Synchronization",
        desc: "Implemented debounced API updates ensuring seamless, zero-lag UI updates while maintaining exact database consistency.",
      },
    ],
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
    problem:
      "Teams and individuals struggle to organize priority items without clean status tracking and responsive task filters.",
    solution:
      "Developed a full-stack task organizer with priority labels, status toggles, user authentication, and persistent MongoDB storage.",
    archOverview: "Authenticated MERN stack with RESTful task CRUD controllers.",
    frontendArch: "Responsive React dashboard with filter chips and real-time task status toggling.",
    backendArch: "Express server with user-scoped CRUD endpoints.",
    dataArch: "MongoDB Task schema indexed by user ID and completion status.",
    securityArch: "JWT token validation on all task mutations.",
    challengesList: [
      {
        title: "User-Scoped Data Isolation",
        desc: "Enforced strict query filtering at the database layer to guarantee tasks are strictly isolated to authenticated users.",
      },
    ],
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
    problem:
      "Stakeholders lacked high-level visibility into EV adoption growth rates, manufacturer market shares, and regional sales distribution.",
    solution:
      "Constructed an executive Power BI dashboard that models market trends, manufacturer adoption curves, and geographic EV concentrations.",
    archOverview: "Data modeling in Power BI using cleaned SQL/Excel datasets and custom DAX measures.",
    frontendArch: "Power BI visual canvas with slicers, drill-down geographic charts, and KPI cards.",
    backendArch: "Power Query ETL data transformation pipeline.",
    dataArch: "Star-schema dimensional model connecting sales fact tables with geographic dimensions.",
    securityArch: "Data source credential encapsulation and sanitization.",
    challengesList: [
      {
        title: "Complex DAX Calculations",
        desc: "Formulated custom DAX formulas for Year-over-Year growth, adoption percentage, and market penetration indices.",
      },
    ],
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
    problem:
      "Quick-commerce operations need instantaneous insight into revenue by product fat content, item category performance, and outlet tiers.",
    solution:
      "Created an interactive business intelligence report analyzing grocery sales across multiple outlet types, product segments, and consumer ratings.",
    archOverview: "Tabular analytical model structured with DAX calculations and Power Query transformations.",
    frontendArch: "Interactive multi-panel dashboard with dynamic filtering and metric tiles.",
    backendArch: "Power Query automated ETL and data reshaping.",
    dataArch: "Cleaned tabular schema optimized for cross-filtering across store attributes.",
    securityArch: "Standardized secure data export and model integrity.",
    challengesList: [
      {
        title: "Cross-Filtering Performance",
        desc: "Optimized DAX measures to ensure instantaneous visual recalculations across large product sets.",
      },
    ],
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

const QUICK_TECH_TAGS = [
  "React",
  "Node.js",
  "Python",
  "Power BI",
  "Gemini AI",
  "MongoDB",
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "all" || project.group === activeCategory;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    const matchesTitle = project.title.toLowerCase().includes(q);
    const matchesDesc = project.description.toLowerCase().includes(q);
    const matchesCat = project.category.toLowerCase().includes(q);
    const matchesTech = project.tech.some((t) => t.toLowerCase().includes(q));
    const matchesHighlights = project.highlights?.some((h) => h.toLowerCase().includes(q));

    return matchesTitle || matchesDesc || matchesCat || matchesTech || matchesHighlights;
  });

  const { trackRef, activeIndex, scrollToItem, pauseAutoplay, handleScroll } =
    useMobileCarousel(filteredProjects.length);

  const handleResetFilters = () => {
    setActiveCategory("all");
    setSearchQuery("");
  };

  return (
    <section id="projects" className="relative px-4 py-8 sm:py-16 md:py-20 lg:py-24 sm:px-6 section-surface overflow-hidden">
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

        {/* Filter Controls: Category Tabs & Search Bar */}
        <div className="mx-auto mb-8 max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {categoryTabs.map((tab) => {
              const count =
                tab.id === "all"
                  ? projects.length
                  : projects.filter((p) => p.group === tab.id).length;

              return (
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
                  <FaFilter className="text-xs opacity-75" />
                  <span>{tab.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                      activeCategory === tab.id
                        ? "bg-white/20 text-white"
                        : "bg-white/10 text-[var(--color-muted)]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Search Bar & Quick Tech Tags */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-white/5 p-4 shadow-[var(--shadow-soft)] backdrop-blur-md">
            <div className="relative flex items-center">
              <FaSearch className="absolute left-4 text-cyan-400 opacity-80" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by tech (React, MongoDB, Python, Power BI, JWT...)"
                className="w-full rounded-xl border border-[var(--color-border)] bg-white/10 py-3 pl-11 pr-24 text-sm font-medium text-[var(--color-text)] placeholder-[var(--color-subtle)] backdrop-blur transition-all duration-200 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
              />
              <div className="absolute right-3 flex items-center gap-2">
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    type="button"
                    title="Clear search"
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs text-[var(--color-muted)] transition-colors hover:bg-white/20 hover:text-[var(--color-text)]"
                  >
                    <FaTimes />
                  </button>
                )}
                <span className="hidden sm:inline-flex items-center rounded-md border border-[var(--color-border)] bg-white/10 px-2 py-1 text-xs font-semibold text-[var(--color-muted)]">
                  {filteredProjects.length} found
                </span>
              </div>
            </div>

            {/* Quick Tech Tag Filters */}
            <div className="mt-3 flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-xs font-medium text-[var(--color-subtle)] mr-1">
                Quick tags:
              </span>
              {QUICK_TECH_TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSearchQuery((prev) => (prev.toLowerCase() === tag.toLowerCase() ? "" : tag))}
                  className={`rounded-lg border px-2.5 py-1 text-xs font-semibold transition-all duration-200 ${
                    searchQuery.toLowerCase() === tag.toLowerCase()
                      ? "border-cyan-400 bg-cyan-500/20 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                      : "border-[var(--color-border)] bg-white/5 text-[var(--color-muted)] hover:border-cyan-400/50 hover:text-[var(--color-text)]"
                  }`}
                >
                  {tag}
                </button>
              ))}
              {searchQuery && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="ml-auto text-xs font-semibold text-cyan-400 underline hover:text-cyan-300"
                >
                  Reset all
                </button>
              )}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {filteredProjects.length === 0 ? (
            <MotionDiv
              key="empty-state"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mx-auto my-12 max-w-md rounded-2xl border border-[var(--color-border)] bg-white/5 p-8 text-center backdrop-blur shadow-[var(--shadow-soft)]"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-400">
                <FaSearch className="text-xl" />
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text)]">
                No matching projects found
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                We couldn't find any projects matching &ldquo;{searchQuery}&rdquo;. Try another search term or reset filters.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-cyan-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_18px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-105"
              >
                Reset All Filters
              </button>
            </MotionDiv>
          ) : (
            <MotionDiv
              key={`${activeCategory}-${searchQuery}`}
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
                      <div
                        onClick={() => setSelectedProject(project)}
                        className="relative overflow-hidden rounded-xl border border-[var(--color-border)] aspect-video group/img shadow-md cursor-pointer"
                        title="Click to view full case study & architecture"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>
                        
                        {/* Hover Overlay Badge */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px]">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-purple-600 to-cyan-600 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                            <FaBookOpen className="text-xs" /> View Case Study
                          </span>
                        </div>

                        <span className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/75 px-3 py-1 text-xs font-semibold text-cyan-400 backdrop-blur shadow-sm">
                          <Icon className="text-xs" />
                          {project.category}
                        </span>
                        <span className="absolute top-2.5 right-2.5 hidden sm:inline-flex rounded-full border border-white/20 bg-slate-950/75 px-2.5 py-0.5 text-xs font-semibold text-purple-300 backdrop-blur">
                          #{String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <h3
                          onClick={() => setSelectedProject(project)}
                          className="text-lg sm:text-2xl font-bold leading-tight text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 cursor-pointer hover:opacity-90 transition-opacity"
                        >
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

                      {/* Action Buttons */}
                      <div className="mt-auto flex flex-row flex-wrap gap-2 pt-1 sm:gap-2.5 sm:pt-2">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-3 py-2.5 text-xs sm:text-sm font-semibold text-cyan-400 shadow-sm transition-all duration-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-[1.02]"
                        >
                          <FaBookOpen className="text-xs" />
                          <span>Case Study</span>
                        </button>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-linear-to-r from-purple-600 to-cyan-600 px-3 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-[0_0_18px_rgba(139,92,246,0.35)] transition-all duration-300 hover:shadow-[0_0_26px_rgba(34,211,238,0.45)] hover:scale-[1.02]"
                        >
                          <FaExternalLinkAlt className="text-xs" />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          title="View GitHub Source Code"
                          className="inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] px-3 py-2.5 text-xs sm:text-sm font-semibold text-[var(--color-text)] transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:scale-[1.02]"
                        >
                          <FaGithub className="text-base" />
                        </a>
                      </div>
                    </div>
                  </MotionDiv>
                );
              })}
            </div>
          </MotionDiv>
        )}
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

      {/* Interactive Case Study & Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
