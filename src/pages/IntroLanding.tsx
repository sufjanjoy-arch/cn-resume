import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Linkedin, Download, MapPin, Loader2 } from "lucide-react";
import { personalInfo, socialLinks, shortIntro } from "@/data/portfolio-data";
import { downloadResumePdf } from "@/lib/download-resume";

const linkedIn = socialLinks.find((l) => l.platform === "LinkedIn");

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.15 + i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function IntroLanding() {
  const [downloading, setDownloading] = useState(false);
  const handleDownload = async () => {
    if (downloading) return;
    setDownloading(true);
    try { await downloadResumePdf(); } finally { setDownloading(false); }
  };
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Ambient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
             style={{ background: "radial-gradient(circle at center, #a8c0a0 0%, transparent 65%)" }} />
        <div className="absolute -bottom-40 -right-24 h-[560px] w-[560px] rounded-full opacity-40 blur-3xl"
             style={{ background: "radial-gradient(circle at center, #dce5d4 0%, transparent 65%)" }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col justify-between px-6 py-10 md:px-10 md:py-14">
        {/* Top row */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
          className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span>Portfolio · 2026</span>
          <span className="hidden sm:inline">Chapter 00 — Intro</span>
        </motion.div>

        {/* Middle content */}
        <section className="flex flex-col gap-7 md:gap-9 py-14">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show"
                      className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-medium text-[var(--color-primary)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            7.5+ years in People Ops
          </motion.div>

          <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="show"
                     className="text-5xl md:text-7xl font-light leading-[1.02] tracking-tight">
            {personalInfo.name}
          </motion.h1>

          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="show"
                    className="text-lg md:text-xl text-muted-foreground -mt-2">
            {personalInfo.title}
          </motion.p>

          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="show"
                      className="flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1">
              <MapPin size={12} /> Bangalore, India
            </span>
            <span className="rounded-full border border-border bg-card/60 px-3 py-1">
              English & Hindi (fluent) · Malayalam (native) · Gujarati (conversational)
            </span>
          </motion.div>

          <motion.p custom={4} variants={fadeUp} initial="hidden" animate="show"
                    className="max-w-xl text-base md:text-lg leading-relaxed text-foreground/85">
            {shortIntro}
          </motion.p>

          {/* Contact row */}
          <motion.div custom={5} variants={fadeUp} initial="hidden" animate="show"
                      className="flex flex-wrap items-center gap-3 pt-1">
            {linkedIn && (
              <a href={linkedIn.url} target="_blank" rel="noopener noreferrer"
                 className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition"
                 aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            )}
            <a href={`mailto:${personalInfo.email}`}
               className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/60 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition"
               aria-label="Email">
              <Mail size={16} />
            </a>
            <button onClick={handleDownload} disabled={downloading}
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card/60 px-4 text-sm hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition disabled:opacity-60">
              {downloading ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />}
              {downloading ? "Preparing…" : "Download Résumé"}
            </button>
          </motion.div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="flex flex-col items-start gap-4"
        >
          <div className="h-px w-24 bg-foreground/30" />
          <Link
            to="/journey/skillventory"
            className="group inline-flex items-center gap-3 text-lg md:text-xl font-medium text-foreground hover:text-[var(--color-primary)] transition"
          >
            <span>Begin the career journey</span>
            <motion.span
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-primary-foreground)]"
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </Link>
          <p className="text-xs text-muted-foreground">
            Five chapters · 2018 → today · read at your pace
          </p>
        </motion.div>
      </div>
    </main>
  );
}
