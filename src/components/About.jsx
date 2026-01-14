import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

const highlightVariants = {
  rest: {
    backgroundColor: "transparent",
    boxShadow: "0 0 0 rgba(139, 92, 246, 0)",
  },
  hover: {
    backgroundColor: "rgba(139, 92, 246, 0.1)",
    boxShadow: "0 0 12px rgba(139, 92, 246, 0.4)",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const About = () => (
  <section
    id="about"
    className="relative py-24 px-6 md:px-20 bg-linear-to-br from-black via-purple-950 to-black text-gray-300 overflow-hidden"
  >
    {/* Animated Background Glows */}
    <motion.div
      animate={{
        y: [0, 20, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute top-0 left-0 w-72 h-72 bg-purple-700/20 rounded-full blur-3xl"
    ></motion.div>
    <motion.div
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl"
    ></motion.div>

    {/* Animated Gradient Accent Lines */}
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      whileInView={{ opacity: 1, height: 128 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="absolute top-1/4 left-0 w-1 bg-linear-to-b from-purple-500/50 to-transparent"
    ></motion.div>
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      whileInView={{ opacity: 1, height: 128 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="absolute bottom-1/4 right-0 w-1 bg-linear-to-t from-cyan-400/50 to-transparent"
    ></motion.div>

    {/* 3D Background Canvas */}
    <div className="absolute inset-0 opacity-60 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 55 }}>
        <Suspense fallback={null}>
          <Stars radius={40} depth={25} count={2000} factor={4} fade />

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

    {/* Content Section */}
    <div className="relative z-10 max-w-5xl mx-auto">
      {/* Title with Animated Underline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400 drop-shadow-[0_0_15px_#8B5CF6]">
          About Me
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-1 bg-linear-to-r from-purple-500 to-cyan-400 mt-4 rounded-full shadow-[0_0_15px_#8B5CF6] origin-left"
        ></motion.div>
      </motion.div>

      {/* Content Container with Staggered Animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="space-y-6"
      >
        {/* Main Introduction Section */}
        <motion.div
          variants={itemVariants}
          className="text-center space-y-4"
        >
          <p className="text-lg md:text-xl leading-relaxed text-gray-400 max-w-3xl mx-auto">
            I'm a{" "}
            <motion.span
              variants={highlightVariants}
              initial="rest"
              whileHover="hover"
              className="text-purple-400 font-semibold px-2 py-1 rounded-lg cursor-pointer inline-block transition-all"
            >
              Full Stack (MERN) Developer
            </motion.span>{" "}
            and{" "}
            <motion.span
              variants={highlightVariants}
              initial="rest"
              whileHover="hover"
              className="text-cyan-400 font-semibold px-2 py-1 rounded-lg cursor-pointer inline-block transition-all"
            >
              Data Analytics Enthusiast
            </motion.span>{" "}
            who loves creating interactive, scalable, and visually rich web experiences.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-400 max-w-3xl mx-auto">
            I work with{" "}
            <motion.span
              variants={highlightVariants}
              initial="rest"
              whileHover="hover"
              className="text-cyan-400 font-semibold px-2 py-1 rounded-lg cursor-pointer inline-block transition-all"
            >
              React.js
            </motion.span>
            ,{" "}
            <motion.span
              variants={highlightVariants}
              initial="rest"
              whileHover="hover"
              className="text-cyan-400 font-semibold px-2 py-1 rounded-lg cursor-pointer inline-block transition-all"
            >
              Node.js
            </motion.span>
            ,{" "}
            <motion.span
              variants={highlightVariants}
              initial="rest"
              whileHover="hover"
              className="text-cyan-400 font-semibold px-2 py-1 rounded-lg cursor-pointer inline-block transition-all"
            >
              Express.js
            </motion.span>
            ,{" "}
            <motion.span
              variants={highlightVariants}
              initial="rest"
              whileHover="hover"
              className="text-cyan-400 font-semibold px-2 py-1 rounded-lg cursor-pointer inline-block transition-all"
            >
              MongoDB
            </motion.span>
            , and{" "}
            <motion.span
              variants={highlightVariants}
              initial="rest"
              whileHover="hover"
              className="text-cyan-400 font-semibold px-2 py-1 rounded-lg cursor-pointer inline-block transition-all"
            >
              Tailwind CSS
            </motion.span>
            .
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-400 max-w-3xl mx-auto">
            I blend{" "}
            <motion.span
              variants={highlightVariants}
              initial="rest"
              whileHover="hover"
              className="text-purple-400 font-semibold px-2 py-1 rounded-lg cursor-pointer inline-block transition-all"
            >
              design
            </motion.span>
            ,{" "}
            <motion.span
              variants={highlightVariants}
              initial="rest"
              whileHover="hover"
              className="text-purple-400 font-semibold px-2 py-1 rounded-lg cursor-pointer inline-block transition-all"
            >
              logic
            </motion.span>
            , and{" "}
            <motion.span
              variants={highlightVariants}
              initial="rest"
              whileHover="hover"
              className="text-purple-400 font-semibold px-2 py-1 rounded-lg cursor-pointer inline-block transition-all"
            >
              data
            </motion.span>{" "}
            to build beautiful and intelligent applications.
          </p>
        </motion.div>

        {/* Secondary Content */}
        <motion.div
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-gray-500 text-base md:text-lg leading-relaxed">
            I also explore{" "}
            <motion.span
              variants={highlightVariants}
              initial="rest"
              whileHover="hover"
              className="text-cyan-400 font-semibold px-2 py-1 rounded-lg cursor-pointer inline-block transition-all"
            >
              Data Analytics
            </motion.span>{" "}
            to uncover insights and transform raw data into meaningful visualizations. My goal is to create digital
            experiences that are visually stunning, intuitive, and driven by real data.
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom Accent Line */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="mt-12 h-1 w-40 mx-auto bg-linear-to-r from-purple-500 to-cyan-400 rounded-full shadow-[0_0_20px_#8B5CF6] origin-center"
      ></motion.div>
    </div>
  </section>
);

export default About;
