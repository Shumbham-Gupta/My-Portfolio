import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [feedback, setFeedback] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setFeedback("");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xdkpordn", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFeedback("✅ Message sent successfully!");
        form.reset();
      } else {
        setFeedback("❌ Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setFeedback("❌ Failed to send message. Check your connection.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-linear-to-br from-black via-purple-950 to-black text-gray-300 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400 drop-shadow-[0_0_10px_#8B5CF6]"
        >
          Contact Me
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col gap-5 max-w-lg mx-auto text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg bg-linear-to-r from-purple-900/40 to-cyan-900/40 border border-purple-500/40 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-[0_0_10px_#8B5CF6] transition-all duration-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-lg bg-linear-to-r from-purple-900/40 to-cyan-900/40 border border-purple-500/40 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-[0_0_10px_#8B5CF6] transition-all duration-300"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-lg bg-linear-to-r from-purple-900/40 to-cyan-900/40 border border-purple-500/40 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 shadow-[0_0_10px_#8B5CF6] transition-all duration-300"
          ></textarea>

          <motion.button
            type="submit"
            disabled={isSending}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px #22d3ee",
            }}
            whileTap={{ scale: 0.95 }}
            className={`mt-2 w-full py-3 rounded-lg font-semibold text-lg text-white bg-linear-to-r from-purple-600 to-cyan-600 shadow-[0_0_20px_#8B5CF6] hover:shadow-[0_0_30px_#22d3ee] transition-all duration-300 ${
              isSending ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>

        {feedback && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-center text-sm text-cyan-400"
          >
            {feedback}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 w-40 h-1 mx-auto bg-linear-to-r from-purple-500 to-cyan-400 rounded-full shadow-[0_0_15px_#8B5CF6]"
        ></motion.div>
      </div>
    </section>
  );
};

export default Contact;
