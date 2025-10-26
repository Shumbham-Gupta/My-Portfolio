
import React from "react";
import { motion } from "framer-motion";

const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-linear-to-br from-black via-purple-950 to-black text-gray-200 px-4 md:px-8 pt-24 md:pt-28"
  >
    {/* Background glow */}
    <div className="absolute inset-0">
      <div className="absolute top-1/3 left-1/4 w-56 h-56 md:w-72 md:h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-80 md:h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700" />
    </div>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-cyan-400 to-purple-400 drop-shadow-[0_0_15px_#8B5CF6]"
    >
      Hi, I'm <span className="text-cyan-400">Shubham Gupta</span>
    </motion.h1>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-md sm:max-w-lg md:max-w-xl leading-relaxed px-2"
    >
      I'm a <span className="text-purple-400 font-semibold">MERN Stack Developer</span> and{" "}
      <span className="text-cyan-400 font-semibold">Data Analytics Enthusiast</span>. A recent graduate
      with a <span className="text-purple-400 font-semibold">B.Tech in Computer Science and Engineering</span>,
      passionate about building interactive, scalable web applications and crafting{" "}
      <span className="text-cyan-400 font-semibold">data-driven solutions</span> that merge creativity with logic.
    </motion.p>

    {/* Call to Action */}
    <motion.a
      href="#contact"
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px #8B5CF6" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative z-10 mt-8 sm:mt-10 px-6 sm:px-8 py-3 text-base sm:text-lg md:text-xl font-semibold rounded-xl bg-linear-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_20px_#8B5CF6] hover:shadow-[0_0_35px_#22d3ee] transition-all duration-300"
    >
      Contact Me
    </motion.a>

    {/* Scroll Hint */}
   <motion.div
  initial={{ opacity: 0, y: 0 }}
  animate={{ opacity: 1, y: [0, 10, 0] }}
  transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
  className="absolute bottom-4 md:bottom-6 right-4 md:right-8 flex flex-col items-center text-gray-400"
>
  <span className="text-purple-400 font-bold text-xl md:text-2xl drop-shadow-[0_0_10px_#8B5CF6] animate-pulse">
    ↓
  </span>
  <span className="mt-1 text-gray-400 text-xs md:text-sm">Scroll Down</span>
</motion.div>



  </section>
);

export default Hero;
