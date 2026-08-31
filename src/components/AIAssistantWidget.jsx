import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
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

const PORTFOLIO_CONTEXT = `
You are Shubham Gupta's official AI Portfolio Assistant. Answer concisely, enthusiastically, and accurately based on Shubham's real portfolio data below:

Candidate Summary:
- Full Name: Shubham Gupta
- Title: Full Stack MERN Developer & Data Analytics Enthusiast
- Education: Bachelor of Technology (B.Tech) in Computer Science & Engineering (CSE)
- Location: India (Open to Remote, Hybrid, On-site, and Relocation)
- Email: shubham959gupta@gmail.com / guptashubham20042004@gmail.com
- LinkedIn: https://www.linkedin.com/in/shubham16gupta/
- GitHub: https://github.com/Shumbham-Gupta
- Status: Available immediately for full-time Full-Stack, Frontend/Backend, and Analytics roles.

Experience & Career Timeline:
1. Full Stack Developer at LaunchEd Global (May 2026 – Present) [Current Role]:
   - Leading primary web engineering for India's overseas education & upskilling platform (launchedglobal.in).
   - Tech: React 19, Node.js, Express.js, MongoDB, Razorpay, Tailwind CSS.
   - Built mentor-led course catalogs, internship pipelines, student counseling workflows, and Razorpay checkout.
2. Full Stack Intern at JiPanditJi (Jan 2026 – Apr 2026):
   - Built responsive booking portals and client interfaces across India.
   - Assisted in Express REST API creation and Cashfree checkout integration.

Featured 9 Projects:
1. TaskInfus — Enterprise EMS (React 19, Node.js, Express, MongoDB, Tailwind CSS v4, JWT): Role-based access control (RBAC), department workload bar charts across 7 departments, shift clock-in/out timers, leave approvals, 1-click CSV exports.
2. AI Expense Intelligence (Python, JavaScript, Gemini AI, Telegram Bot API, OCR, Docker): Telegram expense parser, receipt OCR scanner, spending velocity charts, and budget overspending alert system.
3. LaunchEd Global Platform (React, Node, Express, MongoDB, Razorpay): Production overseas education marketplace and counseling portal.
4. AI Virtual Assistant (React, Node, Express, MongoDB, Gemini API): Conversational AI with coding syntax highlighting.
5. Secure Authentication Flow (React, Node, Express, MongoDB, JWT, BCrypt): Salting, HTTP-only JWTs, protected route guards.
6. Mock E-Commerce Store (React, Express, Node, MongoDB, Tailwind): Optimistic cart state, pricing recalculation, checkout flow.
7. Real-Time Task Manager (React, Express, MongoDB, JWT): Task prioritization, filters, status workflows.
8. Electric Vehicle Sales Analysis (Power BI, DAX, SQL): Market share analysis, battery adoption trends, geographic drill-downs.
9. Blinkit Sales Dashboard (Power BI, DAX, Power Query): Retail sales by category, fat content, outlet tier.

Technical Skills:
- Frontend: React 19, React.js, JavaScript (ES6+), Tailwind CSS, Framer Motion, HTML5, CSS3.
- Backend: Node.js, Express.js, Python, RESTful APIs, JWT Auth, API Rate Limiting.
- Databases: MongoDB Atlas, SQL, PostgreSQL, Data Modeling, Mongoose.
- Analytics: Power BI, DAX, Power Query ETL, Advanced Excel.
- DevOps: Git, GitHub, Docker, Postman, Render, Vercel.

Formatting Guidelines:
- Keep answers structured with short bullet points and bold highlights.
- Be direct, polite, and helpful.
`;

const knowledgeBase = {
  about_shubham: {
    patterns: ["who is shubham", "about shubham", "who are you", "who is he", "tell me about shubham", "about yourself", "intro", "introduction", "bio", "profile", "summary"],
    response:
      "### 👨‍💻 About Shubham Gupta\n* **Profile:** Full Stack MERN Developer & Data Analytics Enthusiast.\n* **Education:** B.Tech in Computer Science & Engineering.\n* **Current Role:** Full Stack Developer at **LaunchEd Global**.\n* **Engineering Focus:** High-performance React 19 web applications, secure Node.js/Express APIs, MongoDB architectures, and executive Power BI analytics dashboards.\n* **Status:** Actively available for Full-Stack, Frontend/Backend, and Analytics roles.",
    actions: [
      { label: "View Projects", type: "scroll", target: "projects" },
      { label: "Career Journey", type: "scroll", target: "experience" },
      { label: "Download Resume", type: "download", url: "/Shubham_Gupta_Resume.pdf" },
    ],
  },
  fullname: {
    patterns: ["full name", "name", "what is your name", "what is his name", "shubham full name"],
    response:
      "### 👤 Candidate Profile\n* **Full Name:** **Shubham Gupta**\n* **Title:** Full Stack MERN Developer & Data Analytics Enthusiast\n* **Location:** India (Open for Remote, Hybrid & Relocation)",
    actions: [
      { label: "View Resume", type: "download", url: "/Shubham_Gupta_Resume.pdf" },
      { label: "Contact Shubham", type: "scroll", target: "contact" },
    ],
  },
  experience_years: {
    patterns: ["experience", "how many years", "years of experience", "how long", "total experience", "background"],
    response:
      "### 💼 Experience Overview\n* **Current Position:** Full Stack Developer at **LaunchEd Global** (May 2026 – Present).\n* **Previous Role:** Full Stack Intern at **JiPanditJi** (Jan 2026 – Apr 2026).\n* **Track Record:** Built and deployed **9+ production applications** spanning enterprise SaaS (TaskInfus EMS), AI & FinTech platforms, and business intelligence analytics.",
    actions: [
      { label: "View Career Timeline", type: "scroll", target: "experience" },
      { label: "Explore Projects", type: "scroll", target: "projects" },
      { label: "Download Resume", type: "download", url: "/Shubham_Gupta_Resume.pdf" },
    ],
  },
  pricing_salary: {
    patterns: ["how much", "rate", "cost", "salary", "compensation", "pricing", "charges", "fees", "budget", "hire cost"],
    response:
      "### 💼 Hiring & Compensation\nShubham is open to **full-time employment, contract roles, and collaborative projects**.\n\n* **Employment Type:** Full-Time, Remote, or Relocation.\n* **Compensation:** Open to standard industry compensation aligned with the role scope and responsibilities.\n* **Next Step:** You can discuss terms directly via email or send a message through the contact form.",
    actions: [
      { label: "Contact Shubham", type: "scroll", target: "contact" },
      { label: "Email Directly", type: "link", url: "mailto:shubham959gupta@gmail.com" },
      { label: "Download Resume", type: "download", url: "/Shubham_Gupta_Resume.pdf" },
    ],
  },
  education: {
    patterns: ["education", "college", "degree", "btech", "b.tech", "university", "qualification", "graduate", "study"],
    response:
      "### 🎓 Education & Background\n* **Degree:** Bachelor of Technology (**B.Tech**)\n* **Discipline:** **Computer Science & Engineering (CSE)**\n* **Key Subjects:** Data Structures, Algorithms, Database Management Systems, Web Architecture, and Data Analytics.",
    actions: [
      { label: "View Roadmap", type: "scroll", target: "experience" },
      { label: "Download Resume", type: "download", url: "/Shubham_Gupta_Resume.pdf" },
    ],
  },
  location: {
    patterns: ["location", "where are you", "where is shubham", "city", "country", "relocate", "relocation", "remote"],
    response:
      "### 📍 Location & Availability\n* **Base Location:** **India**\n* **Work Mode:** Open to **Remote**, **Hybrid**, **On-site**, and **Global Relocation** opportunities.",
    actions: [
      { label: "Send Message", type: "scroll", target: "contact" },
      { label: "Download Resume", type: "download", url: "/Shubham_Gupta_Resume.pdf" },
    ],
  },
  launched: {
    patterns: ["launched", "launched global", "current role", "current company", "job"],
    response:
      "### 🌐 Full Stack Developer at LaunchEd Global\n* **Period:** May 2026 – Present (Current Role)\n* **Company Platform:** [LaunchEd Global (launchedglobal.in)](https://launchedglobal.in)\n* **Key Contributions:**\n  * Leading primary web platform engineering using React 19, Node.js, Express, and MongoDB.\n  * Architected mentor-led course catalogs, internship pipelines, and student consulting portals.\n  * Integrated Razorpay secure checkout, multi-channel lead funnels, and enterprise JSON-LD SEO schema.\n  * Drove cross-device responsiveness, mobile UX, API rate-limiting, and 99.9% uptime reliability.",
    actions: [
      { label: "Visit LaunchEd Global", type: "link", url: "https://launchedglobal.in" },
      { label: "View Career Roadmap", type: "scroll", target: "experience" },
    ],
  },
  jipanditji: {
    patterns: ["jipanditji", "internship", "intern", "previous role", "past experience"],
    response:
      "### 🟠 Full Stack Intern at JiPanditJi\n* **Period:** Jan 2026 – Apr 2026\n* **Platform:** [JiPanditJi (jipanditji.com)](https://jipanditji.com/)\n* **Key Contributions:**\n  * Developed responsive client interfaces and booking inquiry workflows for verified pandit services across India.\n  * Assisted in REST API endpoint creation and Cashfree payment checkout integration.\n  * Optimized asset loading and mobile performance across diverse devices.",
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
      "### 💳 AI Expense Intelligence & Financial Advisor\n* **Tech Stack:** Python, JavaScript, Google Gemini AI, Telegram Bot API, HTML5/CSS3, Docker\n* **Key Features:**\n  * **Multi-channel Chat Tracking:** Real-time expense parsing from Telegram messages via Gemini AI.\n  * **Receipt OCR Scanner:** Drag-and-drop bill image parser with automatic item & price recognition.\n  * **AI Financial Advisor:** Daily spending velocity charts, overspending alerts, and budget suggestions.\n  * **Proactive Budget Limit Alerts:** Warning triggers at 80% & 100% of monthly budgets.\n  * **Superadmin Access:** PIN-protected multi-user switcher and analytics controls.",
    actions: [
      { label: "Live Demo", type: "link", url: "https://ai-expense-tracker-968h.onrender.com/" },
      { label: "GitHub Repository", type: "link", url: "https://github.com/Shumbham-Gupta/AI_Expense_Tracker" },
    ],
  },
  projects: {
    patterns: ["projects", "all projects", "portfolio projects", "built", "apps", "what have you built", "work"],
    response:
      "### 📁 Shubham's 9 Featured Projects:\n1. 🏢 **TaskInfus EMS** — Enterprise employee management with RBAC & attendance.\n2. 💳 **AI Expense Intelligence** — Telegram & OCR expense tracking with Gemini AI.\n3. 🌐 **LaunchEd Global Platform** — Production edtech & overseas education platform.\n4. 🤖 **AI Virtual Assistant** — Conversational Gemini AI assistant with MERN stack.\n5. 🔐 **User Authentication System** — JWT auth flow with bcrypt & protected routes.\n6. 🛒 **Mock E-Commerce Cart** — Full-stack mock shopping cart experience.\n7. 📋 **Task Management Web App** — Productivity workspace with JWT auth.\n8. 🚗 **Electric Vehicle Sales Analysis** — Power BI EV market analytics dashboard.\n9. 📊 **Blinkit Sales Dashboard** — Power BI retail sales & category KPI reporting.",
    actions: [
      { label: "Scroll to Projects", type: "scroll", target: "projects" },
      { label: "View GitHub Profile", type: "link", url: "https://github.com/Shumbham-Gupta" },
    ],
  },
  skills: {
    patterns: ["skills", "stack", "tech stack", "technologies", "languages", "python", "react", "node", "mern", "power bi", "sql", "mongo", "database"],
    response:
      "### ⚡ Technical Expertise Matrix:\n* **Frontend:** React 19, React.js, JavaScript (ES6+), Tailwind CSS, Framer Motion, HTML5, CSS3.\n* **Backend & APIs:** Node.js, Express.js, Python, RESTful APIs, JWT Auth, API Rate Limiting.\n* **Databases:** MongoDB, PostgreSQL, MySQL, Data Modeling, Mongoose.\n* **AI & Integrations:** Google Gemini AI API, Telegram Bot API, Razorpay Checkout, Cashfree, OCR.\n* **Analytics & BI:** Power BI, DAX, Power Query, Data Modeling, SQL, Advanced Excel.\n* **DevOps & Tools:** Git, GitHub, Docker, Postman, Render Deployment.",
    actions: [
      { label: "Explore Skills Section", type: "scroll", target: "skills" },
      { label: "Download Resume", type: "download", url: "/Shubham_Gupta_Resume.pdf" },
    ],
  },
  contact: {
    patterns: ["hire", "contact", "available", "email", "phone", "linkedin", "opportunity", "freelance", "reach", "connect", "interview"],
    response:
      "### 📬 Let's Connect & Collaborate!\nShubham is **currently open to Full-Stack Developer, Frontend/Backend, and Data Analytics opportunities**.\n\n* 📧 **Email:** [shubham959gupta@gmail.com](mailto:shubham959gupta@gmail.com)\n* 💼 **LinkedIn:** [linkedin.com/in/shubham16gupta](https://www.linkedin.com/in/shubham16gupta/)\n* 🐙 **GitHub:** [github.com/Shumbham-Gupta](https://github.com/Shumbham-Gupta)\n* 📍 **Location:** India (Open to Remote / Relocation)",
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

const escapeRegex = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Word-boundary based matcher with score ranking
const getLocalKnowledgeResponse = (userQuery) => {
  const query = userQuery.toLowerCase().trim();

  let bestMatch = null;
  let highestScore = 0;

  for (const key in knowledgeBase) {
    const item = knowledgeBase[key];
    let score = 0;

    for (const pattern of item.patterns) {
      if (query.includes(pattern)) {
        score += pattern.length * 3;
      }
      const regex = new RegExp(`\\b${escapeRegex(pattern)}\\b`, "i");
      if (regex.test(query)) {
        score += 10;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && highestScore > 0) {
    return bestMatch;
  }

  // Smart contextual default for general queries
  return {
    response: `### 🤖 Shubham Gupta Portfolio Assistant\n\nI can answer questions regarding:\n* **Who is Shubham:** Full Stack MERN Developer at LaunchEd Global\n* **Years of Experience:** Full Stack Engineer at LaunchEd Global & Intern at JiPanditJi\n* **Tech Stack:** React 19, Node.js, Express, MongoDB, Python, Power BI\n* **Featured Work:** TaskInfus EMS, AI Expense Intelligence, LaunchEd Global\n* **Hiring Status:** Open for Full-Time, Remote & Relocation roles\n\nFeel free to ask specific questions like *"Tell me about TaskInfus"*, *"What is his experience at LaunchEd?"*, or *"Download resume"*.`,
    actions: [
      { label: "View Projects", type: "scroll", target: "projects" },
      { label: "Tech Stack", type: "scroll", target: "skills" },
      { label: "Download Resume", type: "download", url: "/Shubham_Gupta_Resume.pdf" },
    ],
  };
};

// Live Google Gemini API with conversational memory & hybrid fallback
const fetchGeminiResponse = async (userQuery, conversationHistory = []) => {
  const rawKey =
    import.meta.env.VITE_GEMINI_API_KEY ||
    "AIzaSyAUV-FHG0wnUUjxVrAY944NuT5RPHjHjF8";
  const apiKey = typeof rawKey === "string" ? rawKey.trim() : "";

  if (!apiKey) {
    return getLocalKnowledgeResponse(userQuery);
  }

  // Model fallback cascade: try fast 1.5-flash, then 2.0-flash, then 1.5-pro
  const models = ["gemini-1.5-flash", "gemini-2.0-flash", "gemini-1.5-pro"];

  for (const model of models) {
    try {
      const promptWithContext = `System Instructions: You are Shubham Gupta's official AI Portfolio Assistant. Answer clearly, accurately, and politely in markdown bullet points based on Shubham's candidate profile below.\n\n${PORTFOLIO_CONTEXT}\n\nUser Question: ${userQuery}`;

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: promptWithContext }],
              },
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 600,
            },
          }),
        }
      );

      if (!res.ok) {
        continue;
      }

      const data = await res.json();
      const candidateText = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!candidateText) {
        continue;
      }

      // Dynamic contextual actions based on AI output
      const dynamicActions = [];
      const lowerText = (candidateText + " " + userQuery).toLowerCase();

      if (lowerText.includes("launched")) {
        dynamicActions.push({ label: "Visit LaunchEd Global", type: "link", url: "https://launchedglobal.in" });
      }
      if (lowerText.includes("taskinfus") || lowerText.includes("employee management")) {
        dynamicActions.push({ label: "TaskInfus Live Demo", type: "link", url: "https://employee-management-system-frontend-5opl.onrender.com/login" });
      }
      if (lowerText.includes("expense") || lowerText.includes("telegram")) {
        dynamicActions.push({ label: "AI Expense Demo", type: "link", url: "https://ai-expense-tracker-968h.onrender.com/" });
      }
      if (lowerText.includes("project") || lowerText.includes("built") || dynamicActions.length === 0) {
        dynamicActions.push({ label: "View Projects", type: "scroll", target: "projects" });
      }
      if (lowerText.includes("resume") || lowerText.includes("cv") || lowerText.includes("hire") || lowerText.includes("contact")) {
        dynamicActions.push({ label: "Download Resume", type: "download", url: "/Shubham_Gupta_Resume.pdf" });
        dynamicActions.push({ label: "Contact Shubham", type: "scroll", target: "contact" });
      }

      return {
        response: candidateText,
        actions: dynamicActions.slice(0, 3),
        isLiveGemini: true,
      };
    } catch (err) {
      console.warn(`Gemini API error on ${model}:`, err);
    }
  }

  // If all live models fail/offline, use local semantic engine
  return getLocalKnowledgeResponse(userQuery);
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

    if (line.startsWith("* ") || line.startsWith("- ")) {
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

// Modern Futuristic AI Quantum Nexus Logo
const AINexusLogo = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Outer Orbiting Quantum Ring */}
    <circle
      cx="12"
      cy="12"
      r="9.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeDasharray="3 3"
      className="opacity-40"
    />
    {/* Primary Neural Gradient Waves */}
    <path
      d="M12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5"
      stroke="#22d3ee"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M21.5 12C21.5 6.75329 17.2467 2.5 12 2.5"
      stroke="#c084fc"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5"
      stroke="#f472b6"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Core Glowing Nexus Sphere */}
    <circle cx="12" cy="12" r="3.5" fill="#ffffff" />
    <circle cx="12" cy="12" r="2" fill="#818cf8" />
  </svg>
);

const AIAssistantWidget = ({ isDark = false }) => {
  const navigate = useNavigate();
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
  const [streamingMessageId, setStreamingMessageId] = useState(null);
  const messagesEndRef = useRef(null);
  const widgetRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Handle action buttons
  const handleActionClick = (action) => {
    if (action.query) {
      handleSendMessage(action.query);
      return;
    }

    if (action.type === "link" && action.url) {
      window.open(action.url, "_blank");
    } else if (action.type === "download" && action.url) {
      const link = document.createElement("a");
      link.href = action.url;
      link.download = "Shubham_Gupta_Resume.pdf";
      link.click();
    } else if (action.type === "scroll" && action.target) {
      setIsOpen(false);
      navigate(`/${action.target === "home" ? "" : action.target}`);
      setTimeout(() => {
        const el = document.getElementById(action.target);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  };

  const handleSendMessage = async (textToSend = null) => {
    const query = (textToSend || inputQuery).trim();
    if (!query || isTyping) return;

    setInputQuery("");

    // 1. Add User Message
    const userMsgId = Date.now();
    const newMessages = [
      ...messages,
      { id: userMsgId, sender: "user", text: query },
    ];
    setMessages(newMessages);
    setIsTyping(true);

    // 2. Add AI Placeholder Message for streaming
    const aiMsgId = Date.now() + 1;
    setMessages((prev) => [
      ...prev,
      { id: aiMsgId, sender: "ai", text: "", actions: [] },
    ]);
    setStreamingMessageId(aiMsgId);

    try {
      const { response, actions } = await fetchGeminiResponse(query, newMessages);

      // Simulate streaming typewriter effect for ultra realistic AI response
      const words = response.split(" ");
      let accumulatedText = "";

      for (let i = 0; i < words.length; i++) {
        accumulatedText += (i === 0 ? "" : " ") + words[i];
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === aiMsgId ? { ...msg, text: accumulatedText } : msg
          )
        );
        // Fast streaming interval
        await new Promise((resolve) => setTimeout(resolve, 16));
      }

      // Attach actions after response finishes
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === aiMsgId ? { ...msg, actions: actions || [] } : msg
        )
      );
    } catch (err) {
      console.error(err);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === aiMsgId
            ? {
                ...msg,
                text: "I encountered a minor network issue. Please ask again or reach out directly to Shubham at shubham959gupta@gmail.com!",
                actions: [
                  { label: "Download Resume", type: "download", url: "/Shubham_Gupta_Resume.pdf" },
                  { label: "Contact Shubham", type: "scroll", target: "contact" },
                ],
              }
            : msg
        )
      );
    } finally {
      setIsTyping(false);
      setStreamingMessageId(null);
    }
  };

  const clearChat = () => {
    setMessages([
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
  };

  return (
    <div ref={widgetRef}>
      {/* Floating Trigger Button - Ultra Modern Neural FAB */}
      <div className="fixed bottom-6 right-4 sm:bottom-10 sm:right-7 z-50">
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
          aria-label="Open Shubham's AI Assistant"
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.92 }}
          className="group relative flex items-center gap-3 rounded-full p-[1.5px] shadow-2xl transition-all duration-500"
        >
          {/* Animated Neon Gradient Border Ring */}
          <span className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-75 blur-[3px] transition duration-500 group-hover:opacity-100 group-hover:blur-[6px] animate-pulse" />

          {/* Inner Button Pill / Circular FAB on Mobile */}
          <span
            className={`relative flex items-center gap-2.5 sm:gap-3 rounded-full p-2 sm:px-4 sm:py-2.5 backdrop-blur-xl transition-all duration-300 ${
              isDark
                ? "bg-slate-950/95 text-white shadow-[0_0_25px_rgba(0,0,0,0.8)] border border-cyan-400/30 group-hover:border-cyan-400/60"
                : "bg-white/95 text-slate-900 shadow-[0_8px_30px_rgba(124,58,237,0.25)] border border-purple-200/80 group-hover:border-purple-400"
            }`}
          >
            {/* Quantum AI Nexus Orb */}
            <span className="relative flex h-11 w-11 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-tr from-cyan-500 via-indigo-600 to-purple-600 text-white shadow-[0_0_15px_rgba(34,211,238,0.55)] transition-transform duration-300 group-hover:scale-105">
              <AINexusLogo className="h-5 w-5 sm:h-5 sm:w-5" />
              <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-slate-950"></span>
              </span>
            </span>

            <div className="hidden text-left sm:block pr-1">
              <p
                className={`text-xs font-extrabold tracking-wide leading-tight ${
                  isDark
                    ? "text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-purple-300 to-pink-300"
                    : "text-transparent bg-clip-text bg-linear-to-r from-purple-700 to-cyan-700"
                }`}
              >
                Ask Me
              </p>
              <p className={`text-[10px] font-semibold flex items-center gap-1.5 ${isDark ? "text-cyan-400/90" : "text-purple-600"}`}>
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Online
              </p>
            </div>
          </span>
        </motion.button>
      </div>

      {/* Interactive Modal / Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile Backdrop Tap to Close */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs sm:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`fixed bottom-4 left-2.5 right-2.5 z-50 mx-auto flex flex-col h-[74vh] max-h-[580px] w-auto max-w-[420px] overflow-hidden rounded-2xl sm:rounded-3xl border backdrop-blur-2xl sm:bottom-28 sm:right-7 sm:left-auto sm:w-[420px] sm:h-auto sm:max-h-[85vh] ${
                isDark
                  ? "border-cyan-400/40 bg-slate-950/95 text-slate-100 shadow-[0_10px_50px_rgba(0,0,0,0.85),0_0_40px_rgba(34,211,238,0.3)]"
                  : "border-purple-200/80 bg-white text-slate-800 shadow-[0_20px_60px_rgba(30,41,59,0.22)] ring-1 ring-purple-100"
              }`}
            >
              {/* Header */}
              <div
                className={`flex items-center justify-between border-b px-3.5 py-2.5 sm:p-4 shrink-0 ${
                  isDark
                    ? "border-slate-800 bg-linear-to-r from-purple-950/50 via-slate-950 to-slate-950 text-white"
                    : "border-purple-100 bg-linear-to-r from-purple-50 via-cyan-50/60 to-white text-slate-900"
                }`}
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="relative flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-linear-to-tr from-cyan-500 via-indigo-600 to-purple-600 text-white shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                    <AINexusLogo className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-emerald-500"></span>
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold leading-tight flex items-center gap-1.5">
                      Ask Me
                      <span className="rounded-md bg-emerald-500/20 px-1 py-0.2 sm:px-1.5 sm:py-0.5 text-[8px] sm:text-[9px] font-extrabold text-emerald-400 border border-emerald-400/30">
                        ONLINE
                      </span>
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-cyan-400 font-medium leading-none mt-0.5">
                      Instant Q&amp;A &bull; Portfolio Intelligence
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={clearChat}
                    type="button"
                    aria-label="Clear chat history"
                    title="Clear chat"
                    className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full transition-colors ${
                      isDark
                        ? "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                        : "text-slate-500 hover:bg-purple-100 hover:text-slate-800"
                    }`}
                  >
                    <FaTrashAlt className="text-[10px] sm:text-xs" />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    type="button"
                    aria-label="Close assistant"
                    className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full transition-colors ${
                      isDark
                        ? "text-slate-400 hover:bg-slate-800 hover:text-white"
                        : "text-slate-500 hover:bg-purple-100 hover:text-slate-900"
                    }`}
                  >
                    <FaTimes className="text-xs sm:text-sm" />
                  </button>
                </div>
              </div>

              {/* Message Thread (Flexible Auto-Sizing on Mobile) */}
              <div
                className={`flex-1 min-h-0 sm:h-[340px] overflow-y-auto p-3 sm:p-4 space-y-2.5 sm:space-y-3.5 text-xs ${
                  isDark ? "bg-slate-950/60" : "bg-slate-50/70"
                }`}
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[90%] sm:max-w-[88%] rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-xs leading-relaxed text-[11px] sm:text-xs ${
                        msg.sender === "user"
                          ? "bg-linear-to-r from-purple-600 to-cyan-600 text-white rounded-br-none shadow-[0_4px_15px_rgba(139,92,246,0.3)]"
                          : isDark
                          ? "bg-slate-900/90 text-slate-200 border border-slate-800/90 rounded-tl-none"
                          : "bg-white text-slate-800 border border-purple-100/90 rounded-tl-none shadow-xs"
                      }`}
                    >
                      {msg.sender === "ai" && !msg.text && streamingMessageId === msg.id ? (
                        <div className="flex items-center gap-1.5 py-1">
                          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-cyan-400 animate-bounce"></span>
                          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-purple-400 animate-bounce delay-150"></span>
                          <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-cyan-300 animate-bounce delay-300"></span>
                        </div>
                      ) : (
                        <>
                          {renderFormattedText(msg.text, isDark)}
                          {streamingMessageId === msg.id && (
                            <span className="inline-block w-[3px] h-3 sm:h-3.5 bg-cyan-400 animate-pulse ml-1 align-middle" />
                          )}
                        </>
                      )}
                    </div>

                    {/* Interactive Action Pills */}
                    {msg.actions && msg.actions.length > 0 && streamingMessageId !== msg.id && (
                      <div className="mt-1.5 sm:mt-2 flex flex-wrap gap-1 sm:gap-1.5 max-w-[95%]">
                        {msg.actions.map((act, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleActionClick(act)}
                            type="button"
                            className={`inline-flex items-center gap-1 rounded-lg border px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-[11px] font-semibold transition-all duration-200 hover:scale-105 ${
                              isDark
                                ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400"
                                : "border-purple-300 bg-purple-50 text-purple-700 hover:bg-purple-100 hover:border-purple-400"
                            }`}
                          >
                            {act.type === "link" && <FaExternalLinkAlt className="text-[8px] sm:text-[9px]" />}
                            {act.type === "download" && <FaDownload className="text-[8px] sm:text-[9px]" />}
                            {act.type === "scroll" && <FaArrowRight className="text-[8px] sm:text-[9px]" />}
                            <span>{act.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Suggestion Chips */}
              <div
                className={`border-t px-2.5 py-1.5 sm:px-3 sm:py-2 overflow-x-auto no-scrollbar flex gap-1 sm:gap-1.5 shrink-0 ${
                  isDark ? "border-slate-800 bg-slate-900/60" : "border-purple-100 bg-purple-50/40"
                }`}
              >
                {sampleQuestions.slice(0, 4).map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q.query)}
                    disabled={isTyping}
                    type="button"
                    className={`shrink-0 rounded-full border px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-medium transition-colors ${
                      isDark
                        ? "border-slate-800 bg-slate-900 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 disabled:opacity-50"
                        : "border-purple-200 bg-white text-slate-700 hover:border-purple-400 hover:text-purple-700 disabled:opacity-50"
                    }`}
                  >
                    {q.label}
                  </button>
                ))}
              </div>

              {/* Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className={`flex items-center gap-1.5 sm:gap-2 border-t p-2.5 sm:p-3 shrink-0 ${
                  isDark ? "border-slate-800 bg-slate-950" : "border-purple-100 bg-white"
                }`}
              >
                <input
                  type="text"
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  placeholder={isTyping ? "Thinking..." : "Ask Shubham's AI..."}
                  disabled={isTyping}
                  className={`flex-1 rounded-xl border px-3 py-2 text-xs font-medium transition-all focus:outline-none focus:ring-2 disabled:opacity-50 ${
                    isDark
                      ? "border-slate-800 bg-slate-900 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-cyan-400/30"
                      : "border-purple-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:border-purple-500 focus:ring-purple-500/30"
                  }`}
                />
                <button
                  type="submit"
                  disabled={!inputQuery.trim() || isTyping}
                  aria-label="Send query"
                  className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-r from-purple-600 to-cyan-600 text-white shadow-md transition-all hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
                >
                  <FaPaperPlane className="text-[10px] sm:text-xs" />
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIAssistantWidget;
