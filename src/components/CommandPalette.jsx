import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaTimes,
  FaHome,
  FaUser,
  FaTools,
  FaFolderOpen,
  FaCertificate,
  FaGraduationCap,
  FaEnvelope,
  FaFilePdf,
  FaCopy,
  FaMoon,
  FaSun,
  FaGithub,
  FaLinkedin,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";

const navigationItems = [
  { id: "nav-home", path: "/", label: "Home", section: "Navigation", icon: FaHome, desc: "Go to top intro & hero" },
  { id: "nav-about", path: "/about", label: "About Me", section: "Navigation", icon: FaUser, desc: "Background & career summary" },
  { id: "nav-skills", path: "/skills", label: "Skills & Tech Stack", section: "Navigation", icon: FaTools, desc: "Frontend, backend, databases, BI" },
  { id: "nav-projects", path: "/projects", label: "Featured Projects", section: "Navigation", icon: FaFolderOpen, desc: "9 full-stack & analytics builds" },
  { id: "nav-certifications", path: "/certifications", label: "Certifications", section: "Navigation", icon: FaCertificate, desc: "Verified credentials & courses" },
  { id: "nav-experience", path: "/experience", label: "Work Experience", section: "Navigation", icon: FaGraduationCap, desc: "LaunchEd Global & JiPanditJi" },
  { id: "nav-contact", path: "/contact", label: "Contact & Hire", section: "Navigation", icon: FaEnvelope, desc: "Send message & inquiries" },
];

const projectItems = [
  {
    id: "proj-taskinfus",
    label: "TaskInfus — Enterprise EMS",
    section: "Projects",
    desc: "React 19, Node.js, Express, MongoDB, RBAC",
    url: "https://employee-management-system-frontend-5opl.onrender.com/login",
    github: "https://github.com/Shumbham-Gupta/Employee_Management_System",
  },
  {
    id: "proj-expense",
    label: "AI Expense Intelligence",
    section: "Projects",
    desc: "Python, Gemini AI, Telegram Bot, OCR",
    url: "https://ai-expense-tracker-968h.onrender.com/",
    github: "https://github.com/Shumbham-Gupta/AI_Expense_Tracker",
  },
  {
    id: "proj-launched",
    label: "LaunchEd Global Platform",
    section: "Projects",
    desc: "React, Node, MongoDB, Razorpay Checkout",
    url: "https://launchedglobal.in",
    github: "https://github.com/Shumbham-Gupta",
  },
  {
    id: "proj-assistant",
    label: "AI Virtual Assistant",
    section: "Projects",
    desc: "React, Node, Express, MongoDB, Gemini API",
    url: "https://virtualassistant-frontend-c2hv.onrender.com",
    github: "https://github.com/Shumbham-Gupta/VirtualAssistant",
  },
  {
    id: "proj-ev",
    label: "Electric Vehicle Sales Analysis",
    section: "Projects",
    desc: "Power BI, DAX, SQL, Market Analytics",
    url: "https://github.com/Shumbham-Gupta/Electric_Vehicle_Sales_Dashboard",
    github: "https://github.com/Shumbham-Gupta/Electric_Vehicle_Sales_Dashboard",
  },
  {
    id: "proj-blinkit",
    label: "Blinkit Sales Dashboard",
    section: "Projects",
    desc: "Power BI, DAX, Power Query, Retail KPIs",
    url: "https://github.com/Shumbham-Gupta/BlinkIt_Sales_Dashboard",
    github: "https://github.com/Shumbham-Gupta/BlinkIt_Sales_Dashboard",
  },
];

const CommandPalette = ({
  isOpen,
  onClose,
  isDark = false,
  onToggleTheme,
  onOpenResume,
}) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onClose ? onClose(!isOpen) : null;
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const quickActions = [
    {
      id: "act-resume",
      label: "Preview Official Resume (PDF)",
      section: "Actions",
      icon: FaFilePdf,
      desc: "Open high-res in-browser PDF viewer",
      action: () => {
        onClose();
        if (onOpenResume) onOpenResume();
      },
    },
    {
      id: "act-copy-email",
      label: copied ? "Email Copied to Clipboard!" : "Copy Email Address",
      section: "Actions",
      icon: copied ? FaCheck : FaCopy,
      desc: "shubham959gupta@gmail.com",
      action: () => {
        navigator.clipboard.writeText("shubham959gupta@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
    },
    {
      id: "act-theme",
      label: `Switch to ${isDark ? "Light" : "Dark"} Mode`,
      section: "Actions",
      icon: isDark ? FaSun : FaMoon,
      desc: "Toggle color theme",
      action: () => {
        if (onToggleTheme) onToggleTheme();
      },
    },
    {
      id: "act-linkedin",
      label: "Open LinkedIn Profile",
      section: "Actions",
      icon: FaLinkedin,
      desc: "linkedin.com/in/shubham16gupta",
      action: () => {
        window.open("https://www.linkedin.com/in/shubham16gupta/", "_blank");
      },
    },
    {
      id: "act-github",
      label: "Open GitHub Profile",
      section: "Actions",
      icon: FaGithub,
      desc: "github.com/Shumbham-Gupta",
      action: () => {
        window.open("https://github.com/Shumbham-Gupta", "_blank");
      },
    },
  ];

  // Combined list for filtering
  const allEntries = [
    ...navigationItems.map((item) => ({
      ...item,
      type: "nav",
      action: () => {
        onClose();
        navigate(item.path);
      },
    })),
    ...projectItems.map((item) => ({
      ...item,
      type: "project",
      icon: FaFolderOpen,
      action: () => {
        window.open(item.url, "_blank");
      },
    })),
    ...quickActions.map((item) => ({
      ...item,
      type: "action",
    })),
  ];

  const filteredEntries = query.trim()
    ? allEntries.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.label.toLowerCase().includes(q) ||
          item.desc?.toLowerCase().includes(q) ||
          item.section.toLowerCase().includes(q)
        );
      })
    : allEntries;

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredEntries.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredEntries.length) % filteredEntries.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredEntries[selectedIndex]) {
        filteredEntries[selectedIndex].action();
      }
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-20 p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className={`fixed inset-0 backdrop-blur-md transition-opacity ${
            isDark ? "bg-slate-950/85" : "bg-slate-900/40"
          }`}
        />

        {/* Command Palette Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -15 }}
          transition={{ type: "spring", damping: 26, stiffness: 320 }}
          className={`relative z-10 flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl border backdrop-blur-2xl transition-colors duration-300 ${
            isDark
              ? "bg-slate-950/95 border-cyan-400/30 text-white shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(34,211,238,0.2)]"
              : "bg-white/95 border-purple-200/80 text-slate-900 shadow-[0_20px_60px_rgba(30,41,59,0.25)] ring-1 ring-purple-100"
          }`}
        >
          {/* Search Input Bar */}
          <div
            className={`flex items-center gap-3 border-b px-4 py-3.5 sm:px-5 ${
              isDark ? "border-slate-800 bg-slate-900/50" : "border-purple-100 bg-purple-50/40"
            }`}
          >
            <FaSearch className={isDark ? "text-cyan-400 text-sm" : "text-purple-600 text-sm"} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              onKeyDown={handleKeyDown}
              placeholder="Type a command, project, or section (e.g. 'resume', 'skills', 'taskinfus')..."
              className={`flex-1 bg-transparent text-sm sm:text-base font-semibold focus:outline-none ${
                isDark
                  ? "text-white placeholder-slate-400"
                  : "text-slate-900 placeholder-slate-400"
              }`}
            />
            <kbd
              className={`hidden sm:inline-flex items-center gap-0.5 rounded-md border px-2 py-0.5 text-[11px] font-mono ${
                isDark
                  ? "border-slate-700 bg-slate-800 text-slate-300"
                  : "border-purple-200 bg-purple-100/70 text-purple-800"
              }`}
            >
              ESC
            </kbd>
            <button
              onClick={onClose}
              type="button"
              className={`sm:hidden p-1 rounded-md ${
                isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <FaTimes />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-[380px] overflow-y-auto p-2 sm:p-3 space-y-1">
            {filteredEntries.length === 0 ? (
              <div
                className={`p-8 text-center text-sm ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                No matching actions found for &ldquo;{query}&rdquo;
              </div>
            ) : (
              filteredEntries.map((item, index) => {
                const Icon = item.icon || FaArrowRight;
                const isSelected = index === selectedIndex;

                return (
                  <button
                    key={`${item.section}-${item.id}`}
                    onClick={() => item.action()}
                    onMouseEnter={() => setSelectedIndex(index)}
                    type="button"
                    className={`flex w-full items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-left transition-all ${
                      isSelected
                        ? isDark
                          ? "bg-linear-to-r from-purple-950/70 to-cyan-950/70 border border-cyan-400/50 text-cyan-300 shadow-sm"
                          : "bg-linear-to-r from-purple-100 to-cyan-50 border border-purple-300 text-purple-900 shadow-sm"
                        : isDark
                        ? "hover:bg-slate-900/60 text-slate-200 border border-transparent"
                        : "hover:bg-slate-100/80 text-slate-800 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                          isSelected
                            ? isDark
                              ? "bg-cyan-500/20 text-cyan-300"
                              : "bg-purple-600 text-white"
                            : isDark
                            ? "bg-slate-800 text-slate-400"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <Icon className="text-xs" />
                      </div>
                      <div className="truncate">
                        <p
                          className={`text-xs sm:text-sm font-bold truncate ${
                            isSelected
                              ? isDark
                                ? "text-cyan-300"
                                : "text-purple-900"
                              : isDark
                              ? "text-slate-100"
                              : "text-slate-900"
                          }`}
                        >
                          {item.label}
                        </p>
                        {item.desc && (
                          <p
                            className={`text-[11px] truncate ${
                              isSelected
                                ? isDark
                                  ? "text-cyan-200/80"
                                  : "text-purple-700"
                                : isDark
                                ? "text-slate-400"
                                : "text-slate-500"
                            }`}
                          >
                            {item.desc}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className={`rounded-md border px-2 py-0.5 text-[10px] font-bold ${
                          isDark
                            ? "border-slate-800 bg-slate-900 text-cyan-400"
                            : "border-purple-200 bg-purple-50 text-purple-700"
                        }`}
                      >
                        {item.section}
                      </span>
                      {isSelected && (
                        <span
                          className={`hidden sm:inline-flex text-[10px] font-mono font-bold ${
                            isDark ? "text-cyan-400" : "text-purple-700"
                          }`}
                        >
                          ↵ Select
                        </span>
                      )}
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Shortcuts Help */}
          <div
            className={`hidden sm:flex items-center justify-between border-t px-4 py-2.5 text-[11px] ${
              isDark
                ? "border-slate-800 bg-slate-900/60 text-slate-400"
                : "border-purple-100 bg-slate-50 text-slate-600"
            }`}
          >
            <div className="flex items-center gap-3">
              <span>
                <kbd
                  className={`font-mono px-1.5 py-0.5 rounded border ${
                    isDark
                      ? "bg-slate-800 border-slate-700 text-slate-300"
                      : "bg-white border-slate-200 text-slate-700 shadow-xs"
                  }`}
                >
                  ↑
                </kbd>{" "}
                <kbd
                  className={`font-mono px-1.5 py-0.5 rounded border ${
                    isDark
                      ? "bg-slate-800 border-slate-700 text-slate-300"
                      : "bg-white border-slate-200 text-slate-700 shadow-xs"
                  }`}
                >
                  ↓
                </kbd>{" "}
                to navigate
              </span>
              <span>
                <kbd
                  className={`font-mono px-1.5 py-0.5 rounded border ${
                    isDark
                      ? "bg-slate-800 border-slate-700 text-slate-300"
                      : "bg-white border-slate-200 text-slate-700 shadow-xs"
                  }`}
                >
                  ↵
                </kbd>{" "}
                to select
              </span>
            </div>
            <span>
              <kbd
                className={`font-mono px-1.5 py-0.5 rounded border ${
                  isDark
                    ? "bg-slate-800 border-slate-700 text-slate-300"
                    : "bg-white border-slate-200 text-slate-700 shadow-xs"
                }`}
              >
                Ctrl + K
              </kbd>{" "}
              to toggle anytime
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CommandPalette;
