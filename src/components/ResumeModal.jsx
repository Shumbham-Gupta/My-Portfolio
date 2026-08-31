import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaDownload,
  FaExternalLinkAlt,
  FaFilePdf,
  FaCheckCircle,
} from "react-icons/fa";

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const resumeUrl = "/Shubham_Gupta_Resume.pdf";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 my-auto flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-text)] shadow-[0_0_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
        >
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border)] bg-white/5 px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/20 text-red-400 border border-red-500/30">
                <FaFilePdf className="text-xl" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--color-text)] flex items-center gap-2">
                  Shubham Gupta — Resume
                  <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 px-2 py-0.5 text-[10px] font-semibold text-cyan-300">
                    <FaCheckCircle className="text-[9px]" /> Updated
                  </span>
                </h3>
                <p className="text-xs text-[var(--color-muted)]">
                  Full Stack MERN Developer & Data Analytics Enthusiast
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={resumeUrl}
                download="Shubham_Gupta_Resume.pdf"
                className="inline-flex items-center gap-1.5 rounded-xl bg-linear-to-r from-purple-600 to-cyan-600 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white shadow-[0_0_15px_rgba(34,211,238,0.35)] transition-all hover:scale-105"
              >
                <FaDownload className="text-xs" />
                <span className="hidden xs:inline">Download</span> PDF
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                title="Open in new browser tab"
                className="inline-flex items-center justify-center h-9 w-9 rounded-xl border border-[var(--color-border)] bg-white/5 text-[var(--color-muted)] transition-all hover:bg-white/15 hover:text-[var(--color-text)]"
              >
                <FaExternalLinkAlt className="text-xs" />
              </a>

              <button
                onClick={onClose}
                type="button"
                aria-label="Close modal"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--color-border)] bg-white/5 text-[var(--color-muted)] transition-all hover:bg-white/15 hover:text-[var(--color-text)] hover:scale-105"
              >
                <FaTimes className="text-base" />
              </button>
            </div>
          </div>

          {/* PDF Viewer Body */}
          <div className="relative flex-1 w-full bg-slate-900 overflow-hidden">
            <iframe
              src={`${resumeUrl}#view=FitH&toolbar=1&navpanes=0`}
              title="Shubham Gupta Resume"
              className="h-full w-full border-0"
            />
            {/* Fallback info bar at bottom */}
            <div className="absolute bottom-0 inset-x-0 bg-slate-950/90 border-t border-white/10 px-4 py-2 flex flex-wrap items-center justify-between text-xs text-slate-300">
              <span>Having trouble viewing the PDF preview on mobile?</span>
              <a
                href={resumeUrl}
                download="Shubham_Gupta_Resume.pdf"
                className="text-cyan-400 font-semibold underline hover:text-cyan-300"
              >
                Click here to download directly
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
