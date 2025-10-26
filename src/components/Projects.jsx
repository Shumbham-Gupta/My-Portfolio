
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
  title: "AI Virtual Assistant",
  description:
    "An AI-powered virtual assistant built using the MERN stack and Google Gemini API — capable of understanding natural language, providing intelligent responses, and assisting with tasks interactively.",
  tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Google Gemini API"],
  github: "https://github.com/yourgithub/ai-virtual-assistant",
  demo: "#",
},
  {
  title: "User Authentication System",
  description:
    "A secure and scalable user authentication system built with the MERN stack. Implements signup, login, and protected routes using JWT and password hashing, ensuring safe and efficient user management for web applications.",
  tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt"],
  github: "https://github.com/yourgithub/mern-auth-system",
  demo: "#",
}
,
  {
  title: "Employee Task Management System",
  description:
    "A full-stack employee task management system built with the MERN stack. Allows admins to assign tasks, track progress, and monitor status, while employees can view, update, and manage their assigned tasks in real-time. Includes authentication, role-based access, and a responsive dark-themed interface.",
  tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Bcrypt"],
  github: "https://github.com/yourgithub/employee-task-management",
  demo: "#",
}
,
 {
  title: "Electric Vehicle Sales Analysis",
  description:
    "An interactive Power BI dashboard analyzing electric vehicle sales data. Provides visual insights, trend analysis, and actionable metrics to support data-driven decisions in the EV market.",
  tech: ["Power BI", "SQL", "Excel"],
  github: "#",
  demo: "#",
}
,
];

const Projects = () => (
  <section
    id="projects"
    className="relative py-24 px-6 bg-linear-to-br from-black via-purple-950 to-black text-gray-300 overflow-hidden"
  >
    {/* Background Glow */}
    <div className="absolute inset-0">
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
    </div>

    <div className="relative z-10 max-w-6xl mx-auto text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400 drop-shadow-[0_0_10px_#8B5CF6]"
      >
        Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 0px 25px #8B5CF6" }}
            className="bg-linear-to-br from-purple-800/30 to-cyan-800/30 border border-purple-500/30 rounded-2xl p-6 text-left shadow-[0_0_15px_#8B5CF6] hover:shadow-[0_0_25px_#22d3ee] transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm bg-linear-to-r from-purple-700/40 to-cyan-700/40 rounded-full border border-purple-500/30 text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-purple-400 hover:text-cyan-400 transition"
              >
                <FaGithub /> <span>Code</span>
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-cyan-400 hover:text-purple-400 transition"
              >
                <FaExternalLinkAlt /> <span>Live Demo</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 w-40 h-1 mx-auto bg-linear-to-r from-purple-500 to-cyan-400 rounded-full shadow-[0_0_15px_#8B5CF6]"
      ></motion.div>
    </div>
  </section>
);

export default Projects;
