

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

const About = () => (
  <section
    id="about"
    className="relative py-24 px-6 md:px-20 bg-linear-to-br from-black via-purple-950 to-black text-gray-300 overflow-hidden"
  >
    {/* Background Glows */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl"></div>

    {/* ---------------- 3D AREA ---------------- */}
    <div className="absolute inset-0 opacity-60 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 55 }}>
        <Suspense fallback={null}>

          {/* 3D Stars Background */}
          <Stars radius={40} depth={25} count={2000} factor={4} fade />

          {/* Floating Neon Cube / Sphere */}
          <Float speed={2} rotationIntensity={1.4} floatIntensity={1.5}>
            <Sphere args={[1.2, 64, 64]} position={[2, -1, -1]}>
              <MeshDistortMaterial
                color="#8B5CF6"
                emissive="#8B5CF6"
                emissiveIntensity={0.7}
                distort={0.4}
                speed={2}
              />
            </Sphere>
          </Float>

          {/* Neon Cyan Blob */}
          <Float speed={2.5} rotationIntensity={1.3} floatIntensity={1.3}>
            <Sphere args={[0.9, 64, 64]} position={[-2, 1, -1]}>
              <MeshDistortMaterial
                color="#22d3ee"
                emissive="#22d3ee"
                emissiveIntensity={0.6}
                distort={0.5}
                speed={1.5}
              />
            </Sphere>
          </Float>

          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.7} />
        </Suspense>
      </Canvas>
    </div>

    {/* ---------------- CONTENT ---------------- */}
    <div className="relative z-10 max-w-5xl mx-auto text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent 
        bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400 
        drop-shadow-[0_0_15px_#8B5CF6]"
      >
        About Me
      </motion.h2>

      {/* Intro Text */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg md:text-xl leading-relaxed text-gray-400 max-w-3xl mx-auto"
      >
        I’m a <span className="text-purple-400 font-semibold">Full Stack (MERN) Developer</span> and 
        <span className="text-cyan-400 font-semibold"> Data Analytics Enthusiast</span> who loves creating
        interactive, scalable, and visually rich web experiences.
        I work with 
        <span className="text-cyan-400 font-semibold"> React.js</span>, 
        <span className="text-cyan-400 font-semibold"> Node.js</span>, 
        <span className="text-cyan-400 font-semibold"> Express.js</span>, 
        <span className="text-cyan-400 font-semibold"> MongoDB</span>, and 
        <span className="text-cyan-400 font-semibold"> Tailwind CSS</span>.
        I blend <span className="text-purple-400 font-semibold">design</span>,
        <span className="text-purple-400 font-semibold"> logic</span>, and 
        <span className="text-purple-400 font-semibold"> data</span> to build beautiful and intelligent applications.
      </motion.p>

      {/* Secondary Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-6 text-gray-500 max-w-3xl mx-auto text-base md:text-lg"
      >
        I also explore <span className="text-cyan-400 font-semibold">Data Analytics</span> to uncover insights
        and transform raw data into meaningful visualizations.  
        My goal is to create digital experiences that are visually stunning,
        intuitive, and driven by real data.
      </motion.p>

      {/* Glowing Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-10 w-40 h-1 mx-auto bg-linear-to-r from-purple-500 to-cyan-400 
        rounded-full shadow-[0_0_20px_#8B5CF6]"
      ></motion.div>
    </div>
  </section>
);

export default About;

