
import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React.js",
  "TailwindCSS",
  "JavaScript",
  "Python",
  "SQL",
  "Power BI",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git & GitHub",
  "RESTful APIs",
  "JWT Authentication",
  "Excel",
];

const Skills = () => (
  <section
    id="skills"
    className="relative py-24 px-6 bg-linear-to-br from-black via-purple-950 to-black text-gray-300 overflow-hidden"
  >
    {/* Background Glow */}
    <div className="absolute inset-0">
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
    </div>

    <div className="relative z-10 max-w-5xl mx-auto text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400 drop-shadow-[0_0_10px_#8B5CF6]"
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px #8B5CF6",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-8 py-4 rounded-xl bg-linear-to-br from-purple-700/30 to-cyan-700/30 text-gray-200 font-medium text-lg border border-purple-500/30 shadow-[0_0_10px_#8B5CF6] hover:text-cyan-300 transition-all duration-300"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 w-40 h-1 mx-auto bg-linear-to-r from-purple-500 to-cyan-400 rounded-full shadow-[0_0_15px_#8B5CF6]"
      ></motion.div>
    </div>
  </section>
);

export default Skills;
