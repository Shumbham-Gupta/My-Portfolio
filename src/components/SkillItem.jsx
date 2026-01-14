import React from "react";
import { motion } from "framer-motion";

const SkillItem = ({ name, proficiency }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="skill-card">
        {/* Skill Name and Percentage */}
        <div className="flex justify-between items-center mb-3">
          <h3 className="skill-name text-lg font-semibold text-gray-200">
            {name}
          </h3>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="skill-percentage text-sm font-bold text-cyan-400"
          >
            {proficiency}%
          </motion.span>
        </div>

        {/* Progress Bar Container */}
        <div className="progress-bar-container h-3 bg-gray-700/50 rounded-full overflow-hidden border border-purple-500/30">
          {/* Animated Progress Fill */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${proficiency}%` }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="progress-bar-fill h-full bg-linear-to-r from-purple-500 to-cyan-400 rounded-full shadow-[0_0_10px_#8B5CF6]"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillItem;
