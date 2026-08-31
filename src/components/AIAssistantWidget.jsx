import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaArrowRight,
  FaDownload,
  FaExternalLinkAlt,
  FaTrashAlt,
} from "react-icons/fa";

const sampleQuestions = [
  { label: "🚀 Role at LaunchEd Global", query: "What is Shubham's role at LaunchEd Global?" },
  { label: "⚡ Core Tech Stack", query: "What is Shubham's core tech stack and skills?" },
  { label: "🏢 TaskInfus Enterprise EMS", query: "Tell me about TaskInfus Enterprise EMS project" },
  { label: "💳 AI Expense Intelligence", query: "Explain the AI Expense Intelligence project" },
  { label: "📁 All 9 Featured Projects", query: "List all of Shubham's featured projects" },
  { label: "📥 Download Resume", query: "How can I download Shubham's resume?" },
  { label: "📬 Contact & Availability", query: "Is Shubham available for full-time hiring?" },
];

const knowledgeBase = {
  greetings: {
    patterns: ["hi", "hello", "hey", "who are you", "what can you do", "intro", "help"],
    response:
      "Hello! 👋 I'm **Shubham's AI Portfolio Assistant**.\n\nI can answer questions about his **Full-Stack & AI engineering experience**, deep-dive into his **9 production projects**, breakdown his **tech stack**, or assist you with **hiring details & resume download**.\n\nHow can I help you today?",
    actions: [
      { label: "View Projects", type: "scroll", target: "projects" },
      { label: "Career Roadmap", type: "scroll", target: "experience" },
      { label: "Download Resume", type: "download", url: "/Shubham_Gupta_Resume.pdf" },
    ],
  },
  launched: {
    patterns: ["launched", "launched global", "current role", "current company", "work experience", "job"],
    response:
      "### 🌐 Full Stack Developer at LaunchEd Global\n* **Period:** May 2026 – Present (Current Role)\n* **Company Platform:** [LaunchEd Global (launchedglobal.in)](https://launchedglobal.in)\n* **Key Contributions:**\n  * Leading primary web platform engineering, scaling, and system maintenance using React 19, Node.js, Express, and MongoDB.\n  * Architected mentor-led course catalogs, internship pipelines, and student admission counseling portals.\n  * Integrated Razorpay secure checkout, multi-channel lead funnels, and enterprise structured JSON-LD SEO schema.\n  * Drove cross-device responsiveness, mobile UX, API rate-limiting, and 99.9% uptime reliability.",
    actions: [
      { label: "Visit LaunchEd Global", type: "link", url: "https://launchedglobal.in" },
      { label: "View Career Roadmap", type: "scroll", target: "experience" },
    ],
  },
  jipanditji: {
    patterns: ["jipanditji", "internship", "intern", "previous role", "past experience"],
    response:
      "### 🟠 Full Stack Intern at JiPanditJi\n* **Period:** Jan 2026 – Apr 2026\n* **Platform:** [JiPanditJi (jipanditji.com)](https://jipanditji.com/)\n* **Key Contributions:**\n  * Developed responsive client interfaces and booking inquiry workflows for verified pandit services across India.\n  * Assisted in REST API endpoint creation and Cashfree payment checkout integration.\n  * Optimized asset loading and mobile performance across diverse devices.\n  * Elevated from Intern to Full Stack Developer following high-impact full-stack delivery.",
    actions: [
      { label: "Visit JiPanditJi", type: "link", url: "https://jipanditji.com/" },
      { label: "View Career Roadmap", type: "scroll", target: "experience" },
    ],
  },
  taskinfus: {
    patterns: ["taskinfus", "ems", "employee management", "employee management system"],
    response:
      "### 🏢 TaskInfus — Enterprise Employee Management System (MERN Stack)\n* **Tech Stack:** React 19, Node.js, Express.js, MongoDB, Tailwind CSS v4, JWT\n* **Core Capabilities:**\n  * Role-Based Access Control (RBAC) with `verifyToken` & `verifyAdmin`.\n  * Executive analytics dashboard with department workload bar graphs across 7 departments.\n  * Interactive employee attendance with daily clock-in/out and automatic hours calculation.\n  * Leave approval workflows (Pending/Approved/Rejected) and 1-click CSV data exports.\n  * API rate limiting and light/dark theme system.",
    actions: [
      { label: "Live Demo", type: "link", url: "https://employee-management-system-frontend-5opl.onrender.com/login" },
      { label: "GitHub Repository", type: "link", url: "https://github.com/Shumbham-Gupta/Employee_Management_System" },
    ],
  },
  expense: {
    patterns: ["expense", "expense tracker", "fintech", "ai expense", "telegram bot", "ocr"],
    response:
      "### 💳 AI Expense Intelligence & Financial Advisor\n* **Tech Stack:** Python (58.1%), JavaScript (17.5%), Google Gemini AI, Telegram Bot API, HTML5/CSS3, Docker\n* **Key Features:**\n  * **Multi-channel Chat Tracking:** Real-time expense parsing from Telegram messages via Gemini AI.\n  * **Receipt OCR Scanner:** Drag-and-drop bill image parser with automatic item & price recognition.\n  * **AI Financial Advisor:** Daily spending velocity charts, overspending alerts, and budget suggestions.\n  * **Proactive Budget Limit Alerts:** Warning triggers at 80% & 100% of monthly budgets.\n  * **Superadmin Access:** PIN-protected multi-user switcher and analytics controls.",
    actions: [
      { label: "Live Demo", type: "link", url: "https://ai-expense-tracker-968h.onrender.com/" },
      { label: "GitHub Repository", type: "link", url: "https://github.com/Shumbham-Gupta/AI_Expense_Tracker" },
    ],
  },
  projects: {
    patterns: ["projects", "all projects", "portfolio projects", "built", "apps", "what have you built"],
    response:
      "### 📁 Shubham's 9 Featured Projects:\n1. 🏢 **TaskInfus EMS** — Enterprise employee management with RBAC & attendance.\n2. 💳 **AI Expense Intelligence** — Telegram & OCR expense tracking with Gemini AI.\n3. 🌐 **LaunchEd Global Platform** — Production edtech & overseas education platform.\n4. 🤖 **AI Virtual Assistant** — Conversational Gemini AI assistant with MERN stack.\n5. 🔐 **User Authentication System** — JWT auth flow with bcrypt & protected routes.\n6. 🛒 **VibeCommerce** — Full-stack mock e-commerce shopping cart experience.\n7. 📋 **Task Management Web App** — Kanban productivity workspace with auth.\n8. 🚗 **Electric Vehicle Sales Analysis** — Power BI EV market analytics dashboard.\n9. 📊 **Blinkit Sales Dashboard** — Power BI retail sales & category KPI reporting.",
    actions: [
      { label: "Scroll to Projects", type: "scroll", target: "projects" },
      { label: "View GitHub Profile", type: "link", url: "https://github.com/Shumbham-Gupta" },
    ],
  },
  skills: {
    patterns: ["skills", "stack", "tech stack", "technologies", "languages", "python", "react", "node", "mern"],
    response:
      "### ⚡ Technical Expertise Matrix:\n* **Frontend:** React 19, React.js, JavaScript (ES6+), Tailwind CSS, Framer Motion, HTML5, CSS3.\n* **Backend & APIs:** Node.js, Express.js, Python, RESTful APIs, JWT Auth, API Rate Limiting.\n* **Databases:** MongoDB, PostgreSQL, MySQL, Data Modeling, Mongoose.\n* **AI & Integrations:** Google Gemini AI API, Telegram Bot API, Razorpay Checkout, Cashfree, OCR.\n* **Analytics & BI:** Power BI, DAX, Power Query, Data Modeling, SQL, Advanced Excel.\n* **DevOps & Tools:** Git, GitHub, Docker, Postman, Render Deployment.",
    actions: [
      { label: "Explore Skills Section", type: "scroll", target: "skills" },
      { label: "Download Resume", type: "download", url: "/Shubham_Gupta_Resume.pdf" },
    ],
  },
  contact: {
    patterns: ["hire", "contact", "available", "email", "phone", "linkedin", "opportunity", "freelance", "salary", "job offer"],
    response:
      "### 📬 Let's Connect & Collaborate!\nShubham is **currently open to Full-Stack Developer, Frontend/Backend, and Data Analytics opportunities**.\n\n* 📧 **Email:** [guptashubham20042004@gmail.com](mailto:guptashubham20042004@gmail.com)\n* 💼 **LinkedIn:** [linkedin.com/in/shubham16gupta](https://www.linkedin.com/in/shubham16gupta/)\n* 🐙 **GitHub:** [github.com/Shumbham-Gupta](https://github.com/Shumbham-Gupta)\n* 📍 **Location:** India (Open to Remote / Relocation)",
    actions: [
      { label: "Send Message", type: "scroll", target: "contact" },
      { label: "Open LinkedIn", type: "link", url: "https://www.linkedin.com/in/shubham16gupta/" },
      { label: "Download Resume", type: "download", url: "/Shubham_Gupta_Resume.pdf" },
    ],
  },
  resume: {
    patterns: ["resume", "cv", "download resume", "download cv", "pdf"],
    response:
      "### 📄 Shubham's Resume\nYou can download the latest official copy of Shubham Gupta's resume right here.",
    actions: [
      { label: "📥 Download Resume (PDF)", type: "download", url: "/Shubham_Gupta_Resume.pdf" },
      { label: "View Contact Details", type: "scroll", target: "contact" },
    ],
  },
};

const getAIResponse = (userQuery) => {
  const query = userQuery.toLowerCase().trim();

  for (const key in knowledgeBase) {
    const item = knowledgeBase[key];
    const match = item.patterns.some((pattern) => query.includes(pattern));
    if (match) {
      return item;
    }
  }

  return {
    response:
      "I understand you're interested in Shubham's work! Here are a few quick topics you can explore:\n\n* **LaunchEd Global Experience** (His current Full Stack role)\n* **9 Production Projects** (TaskInfus EMS, AI Expense Tracker, VibeCommerce, etc.)\n* **Tech Stack & Skills** (React, Node, Python, MongoDB, Power BI)\n* **Resume & Hiring Details**",
    actions: [
      { label: "View Projects", type: "scroll", target: "projects" },
      { label: "Tech Stack", type: "scroll", target: "skills" },
      { label: "Download Resume", type: "download", url: "/Shubham_Gupta_Resume.pdf" },
    ],
  };
};

const renderFormattedText = (text, isDarkMode) => {
  return text.split("\n").map((line, lineIdx) => {
    if (line.startsWith("### ")) {
      return (
        <p key={lineIdx} className={`font-bold mb-1.5 text-sm ${isDarkMode ? "text-cyan-400" : "text-purple-700"}`}>
          {line.replace("### ", "")}
        </p>
      );
    }

    const parts = line.split(/(\*\*.*?\*\*)/g);
    const formattedLine = parts.map((part, partIdx) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={partIdx} className={`font-bold ${isDarkMode ? "text-white" : "text-slate-900"}`}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });

    if (line.startsWith("* ")) {
      return (
        <p key={lineIdx} className={`ml-2 my-0.5 leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-700"}`}>
          • {formattedLine}
        </p>
      );
    }

    return (
      <p key={lineIdx} className={`my-0.5 leading-relaxed ${isDarkMode ? "text-slate-200" : "text-slate-800"}`}>
        {formattedLine}
      </p>
    );
  });
};

const AIAssistantWidget = ({ isDark = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hi there! 👋 I'm **Shubham's AI Assistant**.\n\nAsk me anything about his **experience at LaunchEd Global**, **9+ production projects**, **skills**, or **hiring availability**!",
      actions: [
        { label: "🚀 Role at LaunchEd", query: "What is Shubham's role at LaunchEd Global?" },
        { label: "⚡ Core Tech Stack", query: "What is Shubham's core tech stack and skills?" },
        { label: "🏢 TaskInfus EMS", query: "Tell me about TaskInfus Enterprise EMS project" },
        { label: "💳 AI Expense Tracker", query: "Explain the AI Expense Intelligence project" },
      ],
    },
  ]);
  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const widgetRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputQuery;
    if (!query.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: query,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputQuery("");
    setIsTyping(true);

    setTimeout(() => {
      const aiResult = getAIResponse(query);
      const aiMessage = {
        id: Date.now() + 1,
        sender: "ai",
        text: aiResult.response,
        actions: aiResult.actions || [],
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 600);
  };

  const handleActionClick = (action) => {
    if (action.query) {
      handleSendMessage(action.query);
      return;
    }

    if (action.type === "scroll") {
      const element = document.getElementById(action.target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        if (window.innerWidth < 768) {
          setIsOpen(false);
        }
      }
    } else if (action.type === "link") {
      window.open(action.url, "_blank", "noreferrer");
    } else if (action.type === "download") {
      const a = document.createElement("a");
      a.href = action.url;
      a.download = "Shubham_Gupta_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: "ai",
        text: "Chat cleared! How else can I assist you with Shubham's portfolio?",
        actions: [
          { label: "🚀 Role at LaunchEd", query: "What is Shubham's role at LaunchEd Global?" },
          { label: "⚡ Core Tech Stack", query: "What is Shubham's core tech stack and skills?" },
          { label: "📁 All 9 Projects", query: "List all of Shubham's featured projects" },
        ],
      },
    ]);
  };

  return (
    <div ref={widgetRef}>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
          aria-label="Open Shubham's AI Assistant"
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.94 }}
          className={`group relative flex items-center gap-3 rounded-full border px-4 py-3 shadow-lg backdrop-blur-md transition-all duration-300 ${
            isDark
              ? "border-cyan-400/50 bg-slate-950/90 text-white shadow-[0_0_30px_rgba(34,211,238,0.45)] hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.7)]"
              : "border-purple-400/40 bg-white/95 text-slate-800 shadow-[0_8px_30px_rgba(124,58,237,0.22)] hover:border-purple-500 hover:shadow-[0_8px_35px_rgba(124,58,237,0.35)]"
          }`}
        >
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-purple-600 to-cyan-500 text-white shadow-inner">
            <FaRobot className="text-lg animate-bounce" />
            <span
              className={`absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[9px] font-extrabold ring-2 ${
                isDark ? "text-slate-950 ring-slate-950" : "text-white ring-white"
              }`}
            >
              AI
            </span>
          </span>

          <div className="hidden text-left sm:block">
            <p
              className={`text-xs font-bold leading-tight ${
                isDark
                  ? "text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400"
                  : "text-transparent bg-clip-text bg-linear-to-r from-purple-700 to-cyan-700"
              }`}
            >
              Ask Shubham's AI
            </p>
            <p className={`text-[10px] ${isDark ? "text-cyan-300/80" : "text-purple-600 font-medium"}`}>
              Active & Ready
            </p>
          </div>
        </motion.button>
      </div>

      {/* Interactive Modal / Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.94 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-24 left-4 right-4 z-50 mx-auto max-h-[85vh] w-auto max-w-[420px] overflow-hidden rounded-3xl border backdrop-blur-2xl sm:right-6 sm:left-auto sm:w-[420px] ${
              isDark
                ? "border-cyan-400/40 bg-slate-950/95 text-slate-100 shadow-[0_10px_50px_rgba(0,0,0,0.85),0_0_40px_rgba(34,211,238,0.3)]"
                : "border-purple-200/80 bg-white text-slate-800 shadow-[0_20px_60px_rgba(30,41,59,0.22)] ring-1 ring-purple-100"
            }`}
          >
            {/* Header */}
            <div
              className={`flex items-center justify-between border-b p-4 ${
                isDark
                  ? "border-slate-800 bg-linear-to-r from-purple-950/50 via-slate-950 to-slate-950 text-white"
                  : "border-purple-100 bg-linear-to-r from-purple-50 via-cyan-50/60 to-white text-slate-900"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-purple-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                  <FaRobot />
                </span>
                <div>
                  <h3 className={`text-sm font-bold flex items-center gap-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                    Shubham's AI Agent
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                        isDark
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                          : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Online
                    </span>
                  </h3>
                  <p className={`text-[11px] ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    Powered by Portfolio Intelligence
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={clearChat}
                  type="button"
                  title="Clear Chat"
                  className={`rounded-lg p-2 transition-colors ${
                    isDark
                      ? "text-slate-400 hover:bg-white/10 hover:text-white"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <FaTrashAlt className="text-xs" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  type="button"
                  title="Close Assistant"
                  className={`rounded-lg p-2 transition-colors ${
                    isDark
                      ? "text-slate-400 hover:bg-white/10 hover:text-white"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <FaTimes className="text-sm" />
                </button>
              </div>
            </div>

            {/* Quick Prompts Bar */}
            <div
              className={`no-scrollbar flex gap-2 overflow-x-auto border-b p-2.5 ${
                isDark
                  ? "border-slate-800/80 bg-slate-900/60"
                  : "border-purple-100 bg-slate-50/90"
              }`}
            >
              {sampleQuestions.map((q) => (
                <button
                  key={q.label}
                  onClick={() => handleSendMessage(q.query)}
                  type="button"
                  className={`shrink-0 rounded-full border px-3 py-1 text-[11px] font-medium transition-all ${
                    isDark
                      ? "border-cyan-400/30 bg-cyan-950/40 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-900/60"
                      : "border-purple-200 bg-white text-purple-700 shadow-xs hover:border-purple-400 hover:bg-purple-50"
                  }`}
                >
                  {q.label}
                </button>
              ))}
            </div>

            {/* Messages Body */}
            <div
              className={`flex h-[360px] flex-col gap-3.5 overflow-y-auto p-4 text-xs sm:text-sm ${
                isDark ? "bg-slate-950/80" : "bg-slate-50/50"
              }`}
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl p-3.5 leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-linear-to-r from-purple-600 to-cyan-600 text-white rounded-br-none shadow-md"
                        : isDark
                        ? "border border-slate-800 bg-slate-900/90 text-slate-100 rounded-bl-none shadow-md"
                        : "border border-slate-200/90 bg-white text-slate-900 rounded-bl-none shadow-sm"
                    }`}
                  >
                    <div className="text-xs sm:text-[13px]">
                      {renderFormattedText(msg.text, isDark)}
                    </div>
                  </div>

                  {/* Message Action Chips */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {msg.actions.map((act, i) => (
                        <button
                          key={i}
                          onClick={() => handleActionClick(act)}
                          type="button"
                          className={`inline-flex items-center gap-1.5 rounded-xl border px-2.5 py-1 text-[11px] font-semibold transition-all hover:-translate-y-0.5 ${
                            isDark
                              ? "border-cyan-400/40 bg-slate-900/90 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-950"
                              : "border-purple-200 bg-white text-purple-700 shadow-xs hover:border-purple-400 hover:bg-purple-50"
                          }`}
                        >
                          {act.type === "link" && <FaExternalLinkAlt className="text-[10px]" />}
                          {act.type === "download" && <FaDownload className="text-[10px]" />}
                          {act.type === "scroll" && <FaArrowRight className="text-[10px]" />}
                          <span>{act.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div
                  className={`flex items-center gap-1.5 rounded-2xl border px-3.5 py-2.5 w-fit ${
                    isDark
                      ? "border-slate-800 bg-slate-900/90 text-cyan-400"
                      : "border-slate-200 bg-white text-purple-600 shadow-sm"
                  }`}
                >
                  <span className={`h-2 w-2 rounded-full animate-pulse ${isDark ? "bg-cyan-400" : "bg-purple-600"}`}></span>
                  <span className={`h-2 w-2 rounded-full animate-pulse delay-150 ${isDark ? "bg-cyan-400" : "bg-purple-600"}`}></span>
                  <span className={`h-2 w-2 rounded-full animate-pulse delay-300 ${isDark ? "bg-cyan-400" : "bg-purple-600"}`}></span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className={`flex items-center gap-2 border-t p-3 ${
                isDark
                  ? "border-slate-800 bg-slate-950"
                  : "border-purple-100 bg-white"
              }`}
            >
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Ask about LaunchEd, TaskInfus, skills..."
                className={`flex-1 rounded-xl border px-3.5 py-2.5 text-xs focus:outline-none transition-all ${
                  isDark
                    ? "border-slate-700 bg-slate-900/90 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    : "border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-purple-500 focus:bg-white focus:ring-1 focus:ring-purple-500"
                }`}
              />
              <button
                type="submit"
                disabled={!inputQuery.trim()}
                aria-label="Send message"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-r from-purple-600 to-cyan-600 text-white shadow-md transition-all hover:scale-105 disabled:opacity-40"
              >
                <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIAssistantWidget;
