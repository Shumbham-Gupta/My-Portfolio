import React from "react";
import { motion } from "framer-motion";
import SkillItem from "./SkillItem";

const skillsData = [
  { name: "React.js", proficiency: 92 },
  { name: "JavaScript", proficiency: 90 },
  { name: "TailwindCSS", proficiency: 88 },
  { name: "Node.js", proficiency: 85 },
  { name: "Express.js", proficiency: 83 },
  { name: "MongoDB", proficiency: 82 },
  { name: "Python", proficiency: 85 },
  { name: "SQL", proficiency: 84 },
  { name: "RESTful APIs", proficiency: 87 },
  { name: "Git & GitHub", proficiency: 89 },
  { name: "JWT Authentication", proficiency: 81 },
  { name: "Power BI", proficiency: 79 },
  { name: "Excel", proficiency: 75 },
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

    <div className="relative z-10 max-w-4xl mx-auto">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-16 text-center text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400 drop-shadow-[0_0_10px_#8B5CF6]"
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <SkillItem name={skill.name} proficiency={skill.proficiency} />
          </motion.div>
        ))}
      </motion.div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 w-40 h-1 mx-auto bg-linear-to-r from-purple-500 to-cyan-400 rounded-full shadow-[0_0_15px_#8B5CF6]"
      ></motion.div>
    </div>
  </section>
);

export default Skills;
