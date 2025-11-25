
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleNav = () => setNavOpen(!navOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  const sections = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav
      className={`fixed w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-lg border-b transition-all duration-500 ${
        darkMode
          ? "bg-black/80 border-purple-500/30 text-gray-200"
          : "bg-white/80 border-purple-400/30 text-gray-800"
      }`}
    >
      {/* Logo */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-3xl font-extrabold tracking-wide ${
          darkMode
            ? "text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400"
            : "text-purple-600"
        }`}
      >
        Shubham Gupta
      </motion.h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-semibold text-lg">
        {sections.map((section) => (
          <motion.li
            key={section}
            whileHover={{ scale: 1.15, textShadow: "0px 0px 8px #8B5CF6" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to={section}
              smooth
              duration={500}
              className={`cursor-pointer transition-all ${
                darkMode
                  ? "hover:text-cyan-400 text-gray-200"
                  : "hover:text-purple-600 text-gray-700"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Icons + Theme Toggle */}
      <div className="flex items-center gap-5 text-2xl">
        <a
          href="https://github.com/Shumbham-Gupta"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-125 transition-transform text-purple-400 hover:text-cyan-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/shubham16gupta/"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-125 transition-transform text-purple-400 hover:text-cyan-400"
        >
          <FaLinkedin />
        </a>
        
        {/* <button
          onClick={toggleTheme}
          className={`px-3 py-1 rounded-lg text-sm font-bold ${
            darkMode
              ? "bg-linear-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_10px_#8B5CF6]"
              : "bg-purple-100 text-purple-700"
          } hover:scale-110 transition`}
        >
          {darkMode ? "Light" : "Dark"}
        </button> */}

        {/* Mobile Menu Button */}
        <div onClick={toggleNav} className="md:hidden cursor-pointer ml-2">
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 flex flex-col justify-center items-center gap-10 z-40 md:hidden"
        >
          {sections.map((section) => (
            <Link
              key={section}
              onClick={toggleNav}
              to={section}
              smooth
              duration={500}
              className="text-3xl text-gray-200 hover:text-cyan-400 transition-all cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}

          {/* Mobile Icons + Theme */}
          <div className="flex gap-6 text-3xl mt-10">
            <a
              href="https://github.com/Shumbham-Gupta"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-transform"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shubham16gupta/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-transform"
            >
              <FaLinkedin />
            </a>
            {/* <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-lg bg-linear-to-r from-purple-600 to-cyan-600 text-white hover:scale-110 transition"
            >
              {darkMode ? "Light" : "Dark"}
            </button> */}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
