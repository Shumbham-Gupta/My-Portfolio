import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal from "./ProjectModal";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
  FaGithub,
  FaBookOpen,
  FaLayerGroup,
  FaUsers,
  FaRobot,
  FaShieldAlt,
  FaShoppingCart,
  FaTasks,
  FaChartLine,
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

const allFeaturedProjects = [
  {
    id: "proj-1",
    index: "01",
    title: "TaskInfus — Enterprise EMS",
    category: "Enterprise SaaS (MERN)",
    icon: FaUsers,
    image: imgTaskInfus,
    description:
      "Enterprise employee management with role-based access control (RBAC), department workload analytics, attendance shift clock-in/out, and 1-click CSV exports.",
    tech: ["React 19", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
    github: "https://github.com/Shumbham-Gupta/Employee_Management_System",
    demo: "https://employee-management-system-frontend-5opl.onrender.com/login",
    problem: "Modern enterprises suffer from fragmented tracking across separate spreadsheets for attendance, department assignments, and leave approvals, resulting in administrative delays.",
    solution: "TaskInfus unifies employee profiles, multi-tier RBAC authorization, automated clock-in shift timers, and executive department metrics into a streamlined web platform.",
    archOverview: "Decoupled React 19 single-page client interfacing with an Express REST API and MongoDB cluster using token-based session verification.",
    frontendArch: "React 19, Tailwind CSS v4, dynamic role-based routes, interactive analytics charts.",
    backendArch: "Node.js / Express.js REST API with modular controllers, validation schemas, and JWT middleware.",
    dataArch: "MongoDB Atlas with Mongoose schemas indexing employees, attendance logs, and leave requests.",
    securityArch: "BCrypt password hashing, role-based route middleware, and sanitized request payloads.",
    challengesList: [
      { title: "Granular Multi-Tier Authorization", desc: "Designed flexible middleware allowing Admin global control, Manager department-level visibility, and Employee self-service restrictions without code duplication." },
      { title: "Real-Time Shift Clocking State", desc: "Engineered robust timestamp validation to handle cross-day shifts and timezone consistency reliably." },
    ],
  },
  {
    id: "proj-2",
    index: "02",
    title: "AI Expense Intelligence",
    category: "AI + FinTech Platform",
    icon: FaRobot,
    image: imgAiExpenseTracker,
    description:
      "Real-time expense logging via Telegram bot chat & receipt OCR scanning, powered by Google Gemini AI to analyze spending velocity and budget limits.",
    tech: ["Python", "JavaScript", "Gemini AI", "Telegram Bot API", "OCR", "Docker"],
    github: "https://github.com/Shumbham-Gupta/AI_Expense_Tracker",
    demo: "https://ai-expense-tracker-968h.onrender.com/",
    problem: "Traditional budget trackers require tedious manual logging, causing users to abandon expense tracking and remain unaware of micro-spending leaks.",
    solution: "Users snap photos of receipts or chat with a Telegram bot; Google Gemini AI and OCR pipelines automatically parse amounts and generate predictive insights.",
    archOverview: "Asynchronous webhook microservice ingesting Telegram image payloads, invoking OCR processing and Gemini generative reasoning.",
    frontendArch: "Responsive analytics dashboard displaying spending velocity meters and budget warnings.",
    backendArch: "Python / Node service tier handling Telegram Webhook API, OCR pipelines, and Google Gemini 1.5 endpoints.",
    dataArch: "Structured document store organizing transactions, date partitions, and categorical tags.",
    securityArch: "Webhook signature authentication and sanitized LLM prompt templates.",
    challengesList: [
      { title: "Receipt OCR Variation", desc: "Tuned image pre-filtering to accurately capture merchant names and total amounts from crumpled receipt photos." },
      { title: "Predictive AI Financial Advice", desc: "Structured prompt chains to evaluate monthly velocity against targets, preventing hallucinations." },
    ],
  },
  {
    id: "proj-3",
    index: "03",
    title: "LaunchEd Global Platform",
    category: "Full Stack EdTech",
    icon: FaRobot,
    image: imgLaunchedGlobal,
    description:
      "Production overseas education & upskilling platform featuring mentor-led course catalogs, internship programs, and Razorpay payment checkout.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay", "Tailwind CSS"],
    github: "https://github.com/Shumbham-Gupta",
    demo: "https://launchedglobal.in",
    problem: "Students looking for global universities and skill-up tracks lacked a unified platform offering structured counseling and verified enrollments.",
    solution: "Engineered an integrated educational marketplace with dynamic course catalogs, Razorpay payment processing, lead funnels, and an admin dashboard.",
    archOverview: "High-speed React web app backed by a Node.js REST API with Razorpay webhook verification.",
    frontendArch: "React.js with Tailwind CSS, animated program cards, and fast SEO metadata.",
    backendArch: "Express.js API powering course catalogs, mentor allocations, and payment verification.",
    dataArch: "MongoDB collections for courses, user enrollments, mentor profiles, and payment audits.",
    securityArch: "HMAC SHA-256 signature verification on payment webhooks and role-gated admin routes.",
    challengesList: [
      { title: "Idempotent Payment Handling", desc: "Implemented strict signature verification and duplicate-event suppression to guarantee single enrollment per payment." },
      { title: "Conversion Funnel Optimization", desc: "Refactored user onboarding to reduce registration friction and boost lead conversion." },
    ],
  },
  {
    id: "proj-4",
    index: "04",
    title: "AI Virtual Assistant",
    category: "AI + MERN App",
    icon: FaRobot,
    image: imgAiAssistant,
    description:
      "A conversational virtual assistant leveraging full-stack MERN and Google Gemini API to understand natural language and provide instant coding and task drafting.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API"],
    github: "https://github.com/Shumbham-Gupta/VirtualAssistant",
    demo: "https://virtualassistant-frontend-c2hv.onrender.com",
    problem: "Users often need fast answers, code debugging, and task assistance without clunky interfaces.",
    solution: "Built a real-time conversational AI client leveraging Google Gemini models to assist users with knowledge retrieval and summarization.",
    archOverview: "Full-stack MERN architecture orchestrating client chat streams with Node.js backend prompt handlers.",
    frontendArch: "React interface with optimistic chat bubble updates and code syntax highlighting.",
    backendArch: "Express API server managing session context, prompt sanitization, and Gemini streaming.",
    dataArch: "MongoDB database archiving prompt history and user sessions.",
    securityArch: "Environment key isolation, rate-limiting, and sanitized output rendering.",
    challengesList: [
      { title: "Context Window Efficiency", desc: "Implemented history truncation to keep context relevant while optimizing token latency." },
    ],
  },
  {
    id: "proj-5",
    index: "05",
    title: "Electric Vehicle Sales Analysis",
    category: "Analytics Dashboard",
    icon: FaChartLine,
    image: imgEvSales,
    description:
      "Interactive Power BI dashboard modeling EV sales data, manufacturer market shares, regional adoption trends, and vehicle battery types.",
    tech: ["Power BI", "DAX", "SQL", "Excel", "Data Modeling"],
    github: "https://github.com/Shumbham-Gupta/Electric_Vehicle_Sales_Dashboard",
    demo: "https://github.com/Shumbham-Gupta/Electric_Vehicle_Sales_Dashboard",
    problem: "Stakeholders lacked high-level visibility into EV adoption growth rates and regional sales distribution.",
    solution: "Constructed an executive Power BI dashboard modeling market trends and geographic EV concentrations.",
    archOverview: "Data modeling in Power BI using cleaned SQL datasets and custom DAX measures.",
    frontendArch: "Power BI visual canvas with slicers, drill-down geographic charts, and KPI cards.",
    backendArch: "Power Query ETL data transformation pipeline.",
    dataArch: "Star-schema dimensional model connecting sales fact tables with geographic dimensions.",
    securityArch: "Data source credential encapsulation and sanitization.",
    challengesList: [
      { title: "Complex DAX Calculations", desc: "Formulated custom DAX formulas for Year-over-Year growth and adoption percentage." },
    ],
  },
  {
    id: "proj-6",
    index: "06",
    title: "Blinkit Sales Dashboard",
    category: "BI Reporting",
    icon: FaLayerGroup,
    image: imgBlinkitSales,
    description:
      "A comprehensive business intelligence report analyzing Blinkit quick-commerce sales performance across product segments, outlet tiers, and item fat content.",
    tech: ["Power BI", "Power Query", "DAX", "Excel", "Data Modeling"],
    github: "https://github.com/Shumbham-Gupta/BlinkIt_Sales_Dashboard",
    demo: "https://github.com/Shumbham-Gupta/BlinkIt_Sales_Dashboard/blob/main/Blinkit_project_analysis.pbit",
    problem: "Quick-commerce operations need instantaneous insight into revenue by product category and outlet location.",
    solution: "Created an interactive business intelligence report analyzing grocery sales across multiple outlet types and product categories.",
    archOverview: "Tabular analytical model structured with DAX calculations and Power Query transformations.",
    frontendArch: "Interactive multi-panel dashboard with dynamic filtering and metric tiles.",
    backendArch: "Power Query automated ETL and data reshaping.",
    dataArch: "Cleaned tabular schema optimized for cross-filtering across store attributes.",
    securityArch: "Standardized secure data export and model integrity.",
    challengesList: [
      { title: "Cross-Filtering Performance", desc: "Optimized DAX measures to ensure instantaneous visual recalculations." },
    ],
  },
  {
    id: "proj-7",
    index: "07",
    title: "Real-Time Task Manager",
    category: "Productivity App",
    icon: FaTasks,
    image: imgTaskManager,
    description:
      "A full-stack task management workspace with user authentication, priority tags, status filtering, and persistent MongoDB state.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
    github: "https://github.com/Shumbham-Gupta/WebApp_Task_Manager",
    demo: "https://webapp-task-manager-frontend.onrender.com",
    problem: "Teams struggle to organize priority items without clean status tracking and responsive task filters.",
    solution: "Developed a full-stack task organizer with priority labels, status toggles, user authentication, and persistent MongoDB storage.",
    archOverview: "Authenticated MERN stack with RESTful task CRUD controllers.",
    frontendArch: "Responsive React dashboard with filter chips and real-time task status toggling.",
    backendArch: "Express server with user-scoped CRUD endpoints.",
    dataArch: "MongoDB Task schema indexed by user ID and completion status.",
    securityArch: "JWT token validation on all task mutations.",
    challengesList: [
      { title: "User-Scoped Data Isolation", desc: "Enforced strict query filtering at the database layer to guarantee tasks are strictly isolated to authenticated users." },
    ],
  },
  {
    id: "proj-8",
    index: "08",
    title: "Secure Authentication Flow",
    category: "Security Architecture",
    icon: FaShieldAlt,
    image: imgUserAuth,
    description:
      "A production-grade auth flow featuring BCrypt salted hashing, JWT session cookies, protected client routes, and security middleware.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt"],
    github: "https://github.com/Shumbham-Gupta/MERN_User_Authentication_System",
    demo: "https://user-authentication-system-frontend.onrender.com",
    problem: "Web applications require a secure, reusable authentication architecture that protects private data against common vulnerabilities.",
    solution: "Engineered an end-to-end authentication boilerplate featuring BCrypt salted hashing, JSON Web Tokens, and protected React routing.",
    archOverview: "Token-authenticated REST architecture with stateless JWT validation.",
    frontendArch: "React client with form validation state and route redirect guards.",
    backendArch: "Node/Express auth service with login, registration, and profile endpoints.",
    dataArch: "MongoDB User schema with unique email indexes and hashed passwords.",
    securityArch: "BCrypt hashing with 10 salt rounds and signed JWT expiration.",
    challengesList: [
      { title: "Graceful Token Invalidation", desc: "Constructed frontend interceptors to detect expired tokens and smoothly redirect unauthenticated users without page reloads." },
    ],
  },
  {
    id: "proj-9",
    index: "09",
    title: "Mock E-Commerce Store",
    category: "Full Stack Store",
    icon: FaShoppingCart,
    image: imgEcommerce,
    description:
      "Full-stack shopping cart system with responsive product browsing, optimistic cart increments, real-time subtotal calculation, and mock checkout.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Axios", "Tailwind CSS"],
    github: "https://github.com/Shumbham-Gupta/Mock-E-com-Cart",
    demo: "https://mock-e-com-cart-frontend.onrender.com",
    problem: "E-commerce carts frequently face state synchronization lag, race conditions, and calculation mismatches.",
    solution: "Designed a dynamic shopping cart with optimistic UI quantity increments, real-time total & tax recalculations, and item management.",
    archOverview: "Modular React client coordinating with Express cart endpoints and MongoDB product catalog.",
    frontendArch: "React state management with instant quantity adjustments and animated cart drawers.",
    backendArch: "Express API managing cart state, stock validation, and checkout simulations.",
    dataArch: "MongoDB products and orders collection.",
    securityArch: "Input validation and server-side pricing recalculation.",
    challengesList: [
      { title: "Optimistic State Synchronization", desc: "Implemented debounced API updates ensuring seamless, zero-lag UI updates while maintaining exact database consistency." },
    ],
  },
];

const FeaturedProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);

  // Buttery-smooth cubic eased scrolling animation (800ms transition)
  const smoothScrollTo = (element, target, duration = 800) => {
    if (!element) return;
    const start = element.scrollLeft;
    const change = target - start;
    if (Math.abs(change) < 2) return;
    const startTime = performance.now();

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      element.scrollLeft = start + change * ease;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const scrollToIndex = (index) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.offsetWidth < 640 ? 295 : container.offsetWidth < 1024 ? 350 : 380;
    const gap = container.offsetWidth < 640 ? 16 : 20;
    const scrollAmount = index * (cardWidth + gap);

    smoothScrollTo(container, scrollAmount, 750);
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    const newIdx = currentIndex === 0 ? allFeaturedProjects.length - 1 : currentIndex - 1;
    scrollToIndex(newIdx);
  };

  const handleNext = () => {
    const newIdx = currentIndex === allFeaturedProjects.length - 1 ? 0 : currentIndex + 1;
    scrollToIndex(newIdx);
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardWidth = container.offsetWidth < 640 ? 295 : container.offsetWidth < 1024 ? 350 : 380;
    const gap = container.offsetWidth < 640 ? 16 : 20;
    const newIdx = Math.round(container.scrollLeft / (cardWidth + gap));
    if (newIdx >= 0 && newIdx < allFeaturedProjects.length && newIdx !== currentIndex) {
      setCurrentIndex(newIdx);
    }
  };

  // Relaxed, comfortable autoplay loop every 6.5s (pauses on hover or touch)
  useEffect(() => {
    if (isPaused || selectedProject) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6500);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused, selectedProject]);

  return (
    <section className="relative px-4 sm:px-6 mx-auto max-w-7xl">
      {/* Section Header with Title & Navigation Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
        <div>
          <div className="mb-1.5 sm:mb-2">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400">
              Featured Work
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-text)]">
            Top Engineering Highlights
          </h2>
        </div>

        {/* Action CTAs and Carousel Controls */}
        <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-xs font-bold text-cyan-400 transition-all hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-105"
          >
            <span>View All in Grid</span>
            <FaArrowRight className="text-[10px]" />
          </Link>

          {/* Prev / Next Arrow Controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              type="button"
              aria-label="Previous project"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] shadow-xs transition-all hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 active:scale-95"
            >
              <FaChevronLeft className="text-xs" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              aria-label="Next project"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] shadow-xs transition-all hover:border-cyan-400 hover:text-cyan-400 hover:scale-105 active:scale-95"
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {allFeaturedProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.4 }}
            className="group relative flex w-[295px] sm:w-[350px] md:w-[380px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] hover:-translate-y-1"
          >
            {/* Project Image Banner with Index Pill */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

              {/* Number Index Badge */}
              <div className="absolute top-3 left-3 rounded-lg bg-black/60 px-2 py-0.5 text-[10px] font-mono font-bold text-cyan-400 backdrop-blur-md border border-cyan-400/30 shadow-xs">
                #{project.index}
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 right-3 rounded-lg bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-slate-200 backdrop-blur-md border border-white/20">
                {project.category}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1 mb-2.5">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded border border-[var(--color-border)] bg-white/5 px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="rounded border border-[var(--color-border)] bg-white/5 px-1.5 py-0.5 text-[9px] font-medium text-[var(--color-subtle)]">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-[var(--color-text)] group-hover:text-cyan-400 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-1.5 text-xs text-[var(--color-muted)] leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 pt-3.5 border-t border-[var(--color-border)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt className="text-[9px]" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View Github Repository"
                      className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors ml-1"
                    >
                      <FaGithub />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  type="button"
                  className="inline-flex items-center gap-1 rounded-lg bg-cyan-500/10 px-2.5 py-1 text-[11px] font-bold text-cyan-400 hover:bg-cyan-500/20 border border-cyan-400/30 transition-all hover:scale-105"
                >
                  <FaBookOpen className="text-[9px]" />
                  <span>Case Study</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Carousel Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
        {allFeaturedProjects.map((_, dotIdx) => (
          <button
            key={`dot-${dotIdx}`}
            onClick={() => scrollToIndex(dotIdx)}
            type="button"
            aria-label={`Jump to project slide ${dotIdx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              dotIdx === currentIndex
                ? "w-8 bg-linear-to-r from-purple-500 to-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]"
                : "w-2 bg-[var(--color-border)] hover:bg-cyan-400/50"
            }`}
          />
        ))}
      </div>

      {/* Case Study Modal Triggered from Carousel */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default FeaturedProjectsCarousel;
