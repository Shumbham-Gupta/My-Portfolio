
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-10 border-t border-purple-500/40 relative overflow-hidden">
      {/* Neon Glow Background */}
      <div className="absolute inset-0 bg-linear-to-r from-purple-700/20 via-cyan-700/20 to-purple-700/20 blur-3xl opacity-40"></div>

      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-4xl mx-auto px-4">
        {/* Name / Branding */}
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400 drop-shadow-[0_0_8px_#8B5CF6]">
          Shubham Gupta
        </h2>
        <p className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed">
  Full Stack (MERN) Developer and Data Analytics Enthusiast crafting modern, 
  responsive, and interactive web applications. Passionate about building 
  scalable solutions, analyzing data for actionable insights, and blending 
  creativity with logic to deliver high-performance digital experiences.
</p>


        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/Shumbham-Gupta"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-all duration-300 hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham16gupta/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-all duration-300 hover:scale-125"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:shubham959gupta@gmail.com"
            className="hover:text-cyan-400 transition-all duration-300 hover:scale-125"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Divider Line */}
        <div className="w-1/2 h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent mt-4"></div>

        {/* Copyright */}
        <p className="text-xs md:text-sm text-gray-500">
          © {year} <span className="text-purple-400">Shubham Gupta</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
