import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const MotionH2 = motion.h2;
const MotionP = motion.p;
const MotionForm = motion.form;
const MotionButton = motion.button;
const MotionDiv = motion.div;

const contactCards = [
  {
    label: "Email",
    value: "shubham959gupta@gmail.com",
    href: "mailto:shubham959gupta@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "LinkedIn",
    value: "shubham16gupta",
    href: "https://www.linkedin.com/in/shubham16gupta/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "Shumbham-Gupta",
    href: "https://github.com/Shumbham-Gupta",
    icon: FaGithub,
  },
];

const Contact = () => {
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setFeedback("");
    setFeedbackType("");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xdkpordn", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFeedback("Message sent successfully. I will get back to you soon.");
        setFeedbackType("success");
        form.reset();
      } else {
        setFeedback("Message could not be sent. Please try again.");
        setFeedbackType("error");
      }
    } catch (err) {
      console.error(err);
      setFeedback("Message could not be sent. Please check your connection.");
      setFeedbackType("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden section-surface px-5 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-1/4 h-72 w-72 glow-purple rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 h-72 w-72 glow-cyan rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-500">
            Contact
          </p>
          <MotionH2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
            className="section-title text-4xl font-extrabold md:text-5xl"
          >
            Let&apos;s Build Something Useful
          </MotionH2>
          <MotionP
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="mt-5 text-base leading-relaxed text-[var(--color-muted)] md:text-lg"
          >
            Have a project, opportunity, or collaboration in mind? Send the details and
            I will respond with a clear next step.
          </MotionP>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionDiv
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="grid gap-5"
          >
            <div className="themed-card rounded-3xl border p-6">
              <h3 className="text-2xl font-bold text-[var(--color-text)]">Direct Contact</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                I am open to full-stack development roles, analytics projects, internships,
                freelance work, and collaborative builds.
              </p>

              <div className="mt-6 grid gap-3">
                {contactCards.map(({ label, value, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                    className="group flex items-center gap-4 rounded-2xl border border-[var(--color-border)] bg-white/10 p-4 transition-all hover:-translate-y-0.5 hover:border-cyan-400"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-purple-600/20 to-cyan-500/20 text-cyan-500">
                      {React.createElement(icon)}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-purple-500">
                        {label}
                      </span>
                      <span className="block truncate text-sm font-semibold text-[var(--color-text)] group-hover:text-cyan-500">
                        {value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--color-border)] bg-linear-to-r from-purple-700/10 to-cyan-700/10 p-6 shadow-[var(--shadow-soft)]">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-r from-purple-600 to-cyan-600 text-white">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-500">
                    Location
                  </p>
                  <p className="text-base font-bold text-[var(--color-text)]">India</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
                Available for remote-friendly work and project discussions.
              </p>
            </div>
          </MotionDiv>

          <MotionForm
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.1, duration: 0.65 }}
            className="themed-card rounded-3xl border p-5 text-left sm:p-7"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[var(--color-text)]">Send a Message</h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Share your idea, role, timeline, or any details that would help me understand the request.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-[var(--color-text)]">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full rounded-2xl themed-input border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold text-[var(--color-text)]">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-2xl themed-input border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                />
              </label>
            </div>

            <label className="mt-5 grid gap-2">
              <span className="text-sm font-semibold text-[var(--color-text)]">Subject</span>
              <input
                type="text"
                name="subject"
                placeholder="Project, role, collaboration..."
                className="w-full rounded-2xl themed-input border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              />
            </label>

            <label className="mt-5 grid gap-2">
              <span className="text-sm font-semibold text-[var(--color-text)]">Message</span>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me what you want to build or discuss..."
                required
                className="w-full resize-none rounded-2xl themed-input border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
              ></textarea>
            </label>

            <MotionButton
              type="submit"
              disabled={isSending}
              whileHover={isSending ? {} : { y: -2 }}
              whileTap={isSending ? {} : { scale: 0.98 }}
              className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-purple-600 to-cyan-600 px-6 py-4 text-base font-bold text-white shadow-[0_0_22px_rgba(139,92,246,0.35)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.45)] ${
                isSending ? "cursor-not-allowed opacity-70" : ""
              }`}
            >
              <FaPaperPlane />
              {isSending ? "Sending message..." : "Send Message"}
            </MotionButton>

            {feedback && (
              <MotionP
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-5 rounded-2xl border px-4 py-3 text-sm font-semibold ${
                  feedbackType === "success"
                    ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-500"
                    : "border-red-400/40 bg-red-400/10 text-red-500"
                }`}
              >
                {feedback}
              </MotionP>
            )}
          </MotionForm>
        </div>
      </div>
    </section>
  );
};

export default Contact;
