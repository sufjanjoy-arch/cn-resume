import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  ArrowRight, Mail, Linkedin, Download, MapPin, Loader2, 
  Sparkles, FileText, ChevronDown, CheckCircle2 
} from "lucide-react";
import { personalInfo, socialLinks, shortIntro } from "@/data/portfolio-data";
import { downloadResumePdf } from "@/lib/download-resume";
import ExecutiveOverview from "@/components/sections/ExecutiveOverview";

const linkedIn = socialLinks.find((l) => l.platform === "LinkedIn");

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1, 
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function IntroLanding() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (downloading) return;
    setDownloading(true);
    try { 
      await downloadResumePdf(); 
    } finally { 
      setDownloading(false); 
    }
  };

  const scrollToOverview = () => {
    const el = document.getElementById("executive-overview");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Dynamic ambient mesh blobs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute -top-32 -left-32 h-[550px] w-[550px] rounded-full opacity-35 blur-3xl animate-pulse"
          style={{ 
            background: "radial-gradient(circle at center, #a8c0a0 0%, transparent 65%)",
            animationDuration: "8s" 
          }}
        />
        <div
          className="absolute top-1/3 -right-28 h-[580px] w-[580px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle at center, #2a9d8f 0%, transparent 65%)" }}
        />
        <div
          className="absolute -bottom-40 left-1/4 h-[500px] w-[500px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle at center, #dce5d4 0%, transparent 65%)" }}
        />
      </div>

      {/* Floating Top Header */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5 sm:px-8">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="h-2 w-2 rounded-full bg-[var(--color-primary)] group-hover:scale-125 transition" />
            <span className="text-sm font-semibold tracking-tight text-foreground">{personalInfo.name}</span>
          </Link>

          <nav className="flex items-center gap-2 sm:gap-4 text-xs">
            <button
              onClick={scrollToOverview}
              className="hidden sm:inline-flex text-muted-foreground hover:text-foreground transition font-medium"
            >
              Executive View
            </button>
            <Link
              to="/journey/skillventory"
              className="hidden sm:inline-flex text-muted-foreground hover:text-foreground transition font-medium"
            >
              Story Journey
            </Link>
            <Link
              to="/resume"
              className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/70 px-3 py-1.5 font-medium hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition shadow-2xs"
            >
              <FileText size={13} />
              <span>Full Résumé</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 pt-12 pb-16 sm:px-8 md:pt-20 md:pb-24">
        {/* Top Tag & Location */}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="flex flex-wrap items-center gap-2.5 mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-primary)] shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            8+ Years in People Ops & Strategy
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <MapPin size={12} /> Bangalore, India
          </span>
        </motion.div>

        {/* Hero Title & Subtitle */}
        <div className="space-y-4 max-w-3xl">
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-5xl sm:text-6xl md:text-7xl font-light leading-[1.02] tracking-tight text-foreground"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-xl sm:text-2xl text-[var(--color-primary)] font-light tracking-tight"
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-base sm:text-lg leading-relaxed text-foreground/85 pt-2 font-light"
          >
            {shortIntro}
          </motion.p>
        </div>

        {/* Key Metrics Strip */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-8 pt-4 border-t border-border/60"
        >
          <div className="p-3.5 rounded-xl border border-border/70 bg-card/50 backdrop-blur-xs">
            <div className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight">8+ Yrs</div>
            <div className="text-[11px] text-muted-foreground mt-0.5">Startups & Scale-ups</div>
          </div>
          <div className="p-3.5 rounded-xl border border-border/70 bg-card/50 backdrop-blur-xs">
            <div className="text-xl sm:text-2xl font-semibold text-[var(--color-primary)] tracking-tight">140+ Span</div>
            <div className="text-[11px] text-muted-foreground mt-0.5">Fintech Leadership HRBP</div>
          </div>
          <div className="p-3.5 rounded-xl border border-border/70 bg-card/50 backdrop-blur-xs">
            <div className="text-base sm:text-lg font-semibold text-foreground tracking-tight flex items-center gap-1">
              Keka · Zoho · PeopleCues
            </div>
            <div className="text-[11px] text-muted-foreground mt-0.5">Core HRIS Scaled</div>
          </div>
          <div className="p-3.5 rounded-xl border border-border/70 bg-card/50 backdrop-blur-xs">
            <div className="text-base sm:text-lg font-semibold text-foreground tracking-tight">
              APAC · Africa · LATAM
            </div>
            <div className="text-[11px] text-muted-foreground mt-0.5">Global Distributed Teams</div>
          </div>
        </motion.div>

        {/* Primary Call to Actions */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          <Link
            to="/journey/skillventory"
            className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-medium text-[var(--color-primary-foreground)] shadow-xs transition hover:opacity-95"
          >
            <span>Begin Career Journey</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </Link>

          <button
            onClick={scrollToOverview}
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-4 py-3 text-sm font-medium text-foreground hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition shadow-2xs"
          >
            <span>Executive Overview</span>
            <ChevronDown size={15} />
          </button>

          <button
            onClick={handleDownload}
            disabled={downloading}
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-4 py-3 text-sm font-medium text-foreground hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition shadow-2xs disabled:opacity-60"
            title="Download PDF Résumé"
          >
            {downloading ? <Loader2 size={15} className="animate-spin" /> : <Download size={15} />}
            <span>{downloading ? "Generating PDF…" : "Download Résumé"}</span>
          </button>

          {linkedIn && (
            <a
              href={linkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-card/80 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition shadow-2xs"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          )}
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-card/80 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition shadow-2xs"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </motion.div>
      </div>

      {/* Embedded Executive Overview Section */}
      <div className="relative z-10 border-t border-border/60 bg-muted/10 backdrop-blur-xs">
        <ExecutiveOverview />
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/60 bg-background/80 py-8 text-center text-xs text-muted-foreground">
        <div className="mx-auto max-w-4xl px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {personalInfo.name} · HR Business Partner</p>
          <div className="flex items-center gap-4">
            <Link to="/journey/skillventory" className="hover:text-foreground transition">
              Story Journey
            </Link>
            <span>•</span>
            <Link to="/resume" className="hover:text-foreground transition">
              Printable Résumé
            </Link>
            <span>•</span>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-foreground transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
