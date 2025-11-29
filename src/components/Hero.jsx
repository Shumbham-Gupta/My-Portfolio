

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.jpg"; // <-- YOUR IMAGE

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center 
      overflow-hidden bg-linear-to-br from-black via-purple-950 to-black text-gray-200 px-4 md:px-12 pt-24 md:pt-28"
    >

      {/* -------------------- BACKGROUND 3D SCENE -------------------- */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Suspense fallback={null}>
            <Stars radius={50} depth={40} count={3000} factor={4} fade speed={1} />

            <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.5}>
              <Sphere args={[1.2, 64, 64]} position={[1.8, -1, -1]}>
                <MeshDistortMaterial
                  color="#8B5CF6"
                  emissive="#8B5CF6"
                  emissiveIntensity={0.7}
                  distort={0.4}
                  speed={2}
                />
              </Sphere>
            </Float>

            <Float speed={3} rotationIntensity={1.5} floatIntensity={1.6}>
              <Sphere args={[0.9, 64, 64]} position={[-2, 1, -1]}>
                <MeshDistortMaterial
                  color="#22d3ee"
                  emissive="#22d3ee"
                  emissiveIntensity={0.6}
                  distort={0.5}
                  speed={1.8}
                />
              </Sphere>
            </Float>

            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
          </Suspense>
        </Canvas>
      </div>

      {/* -------------------- HERO CONTENT SPLIT -------------------- */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">

        {/* ---------- LEFT SIDE IMAGE ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-[0_0_30px_#8B5CF6]"
          >
            {/* Neon Glow */}
            <div className="absolute inset-0 bg-purple-600/30 blur-2xl"></div>

            {/* Image */}
            <img
              src={avatar}
              alt="Shubham Gupta"
              className="w-full h-full object-cover rounded-2xl border border-purple-500/40"
            />

            {/* Floating Animation */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0"
            ></motion.div>
          </motion.div>
        </motion.div>

        {/* ---------- RIGHT SIDE TEXT ---------- */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            font-extrabold text-transparent bg-clip-text 
            bg-linear-to-r from-purple-400 via-cyan-400 to-purple-400 
            drop-shadow-[0_0_20px_#8B5CF6]"
          >
            Hi, I'm <span className="text-cyan-400">Shubham Gupta</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed"
          >
            I’m a <span className="text-purple-400 font-semibold">MERN Stack Developer</span> and 
            <span className="text-cyan-400 font-semibold"> Data Analytics Enthusiast</span>.  
            A recent <span className="text-purple-400 font-semibold">B.Tech CSE</span> graduate who loves building
            interactive, scalable and data-driven web applications.
          </motion.p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.07, boxShadow: "0px 0px 35px #8B5CF6" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="inline-block mt-8 md:mt-10 px-8 py-3 text-lg font-semibold 
            rounded-xl bg-linear-to-r from-purple-600 to-cyan-600 text-white 
            shadow-[0_0_25px_#8B5CF6] hover:shadow-[0_0_45px_#22d3ee] transition-all duration-300"
          >
            Contact Me
          </motion.a>
        </div>
      </div>

      {/* -------------------- SCROLL HINT -------------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 12, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-4 md:bottom-6 right-4 md:right-8 flex flex-col items-center text-gray-400"
      >
        <span className="text-purple-400 font-bold text-xl md:text-2xl animate-pulse drop-shadow-[0_0_10px_#8B5CF6]">↓</span>
        <span className="mt-1 text-gray-400 text-xs md:text-sm">Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
