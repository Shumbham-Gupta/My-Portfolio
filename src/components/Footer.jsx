import React from "react";
import { Link } from "react-scroll";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/Shumbham-Gupta",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/shubham16gupta/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    href: "mailto:shubham959gupta@gmail.com",
    label: "Email",
    icon: FaEnvelope,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-page)] text-[var(--color-muted)] transition-colors duration-500">
      <div className="absolute left-[-80px] top-0 h-64 w-64 glow-purple rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-[-80px] h-64 w-64 glow-cyan rounded-full blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 rounded-3xl border border-[var(--color-border)] bg-white/10 p-6 shadow-[var(--shadow-soft)] backdrop-blur md:grid-cols-[1.4fr_0.8fr_0.8fr] md:p-8">
          <div>
            <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500">
              Shubham Gupta
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
              Full Stack MERN Developer and Data Analytics Enthusiast building
              responsive applications, clean user interfaces, and data-driven dashboards.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="mailto:shubham959gupta@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-cyan-600 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_18px_rgba(139,92,246,0.35)] transition hover:-translate-y-0.5"
              >
                <FaEnvelope />
                Get in touch
              </a>
              <div className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm font-semibold text-[var(--color-text)]">
                <FaMapMarkerAlt className="text-cyan-500" />
                India
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-cyan-500">
              Navigate
            </h3>
            <div className="grid gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  smooth
                  duration={500}
                  offset={-76}
                  className="cursor-pointer text-sm font-semibold text-[var(--color-muted)] transition hover:text-cyan-500"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-purple-500">
              Connect
            </h3>
            <div className="grid gap-3">
              {socialLinks.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="inline-flex items-center gap-3 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-500"
                  aria-label={label}
                >
                  <span className="text-purple-500">{React.createElement(icon)}</span>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-[var(--color-border)] pt-6 text-center text-xs text-[var(--color-subtle)] sm:flex-row sm:text-left">
          <p>
            © {year} <span className="font-semibold text-purple-500">Shubham Gupta</span>. All
            rights reserved.
          </p>
          <p>Built with love ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
