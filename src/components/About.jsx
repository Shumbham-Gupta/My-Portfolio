
import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <section
    id="about"
    className="relative py-24 px-6 md:px-20 bg-linear-to-br from-black via-purple-950 to-black text-gray-300 overflow-hidden"
  >
    {/* Background Glows */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl"></div>

    <div className="relative z-10 max-w-4xl mx-auto text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400 drop-shadow-[0_0_10px_#8B5CF6]"
      >
        About Me
      </motion.h2>

      {/* Intro Text */}
      <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.8 }}
  className="text-lg md:text-xl leading-relaxed text-gray-400 max-w-3xl mx-auto"
>
  I'm a <span className="text-purple-400 font-semibold">Full Stack (MERN) Developer</span> and 
  <span className="text-cyan-400 font-semibold"> Data Analytics Enthusiast</span>, 
  passionate about building scalable, interactive, and visually engaging web applications. 
  My core tools include <span className="text-cyan-400 font-semibold">React.js</span>,{" "}
  <span className="text-cyan-400 font-semibold">Node.js</span>,{" "}
  <span className="text-cyan-400 font-semibold">Express.js</span>,{" "}
  <span className="text-cyan-400 font-semibold">MongoDB</span>,{" "}
  <span className="text-cyan-400 font-semibold">JavaScript</span>, and{" "}
  <span className="text-cyan-400 font-semibold">Tailwind CSS</span>. I love blending{" "}
  <span className="text-purple-400 font-semibold">design</span>,{" "}
  <span className="text-purple-400 font-semibold">logic</span>, and{" "}
  <span className="text-purple-400 font-semibold">data-driven insights</span> to create 
  applications that are not only performant but also intelligent and user-friendly.
</motion.p>

      {/* Secondary Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-6 text-gray-500 max-w-3xl mx-auto text-base md:text-lg"
      >
        Alongside development, I explore{" "}
        <span className="text-cyan-400 font-semibold">Data Analytics</span> — 
        using insights and visualization to bridge the gap between data and design. 
        My goal is to build digital experiences that are not only beautiful but also 
        meaningful and data-driven.
      </motion.p>

      {/* Glowing Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-10 w-40 h-1 mx-auto bg-linear-to-r from-purple-500 to-cyan-400 rounded-full shadow-[0_0_15px_#8B5CF6]"
      ></motion.div>
    </div>
  </section>
);

export default About;
