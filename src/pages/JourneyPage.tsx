import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Home, FileText, ChevronDown, Sparkles } from "lucide-react";
import { experience } from "@/data/portfolio-data";
import ChapterCard from "@/components/journey/ChapterCard";

export default function JourneyPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [jumpOpen, setJumpOpen] = useState(false);

  const chapters = experience; // chronological order (1 to 5)
  const index = useMemo(() => {
    const i = chapters.findIndex((c) => c.slug === slug);
    return i === -1 ? 0 : i;
  }, [slug, chapters]);

  const current = chapters[index];
  const prev = index > 0 ? chapters[index - 1] : null;
  const next = index < chapters.length - 1 ? chapters[index + 1] : null;

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && next) navigate(`/journey/${next.slug}`);
      if (e.key === "ArrowLeft" && prev) navigate(`/journey/${prev.slug}`);
      if (e.key === "Escape") navigate("/");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setJumpOpen(false);
  }, [index]);

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Ambient background glow dynamically reacting to current chapter */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          key={current.slug}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute -top-32 right-[-5%] h-[550px] w-[550px] rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle at center, ${current.accentColor ?? "#a8c0a0"} 0%, transparent 70%)` }}
        />
        <div
          className="absolute -bottom-40 left-[-10%] h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: `radial-gradient(circle at center, #a8c0a0 0%, transparent 70%)` }}
        />
      </div>

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:border-[var(--color-primary)] hover:text-foreground transition shadow-2xs"
            >
              <Home size={13} /> <span>Home</span>
            </Link>

            {/* Quick Jump Dropdown */}
            <div className="relative">
              <button
                onClick={() => setJumpOpen((v) => !v)}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/60 px-3 py-1.5 text-xs font-medium text-foreground hover:border-[var(--color-primary)] transition shadow-2xs"
                aria-expanded={jumpOpen}
              >
                <span className="hidden xs:inline text-muted-foreground">Jump:</span>
                <span className="font-semibold" style={{ color: current.accentColor }}>{current.company}</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${jumpOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {jumpOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 mt-2 w-64 rounded-2xl border border-border/80 bg-card/95 p-2 shadow-lg backdrop-blur-md z-40"
                  >
                    <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Select Career Chapter
                    </div>
                    <div className="space-y-1">
                      {chapters.map((c, i) => (
                        <button
                          key={c.slug}
                          onClick={() => {
                            navigate(`/journey/${c.slug}`);
                            setJumpOpen(false);
                          }}
                          className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition text-left ${
                            c.slug === current.slug
                              ? "bg-[var(--color-primary)]/10 font-semibold text-[var(--color-primary)]"
                              : "text-foreground hover:bg-muted/50"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className="h-2 w-2 rounded-full shrink-0"
                              style={{ backgroundColor: c.accentColor ?? "var(--color-primary)" }}
                            />
                            <span>{c.company}</span>
                          </div>
                          <span className="text-[10px] text-muted-foreground">
                            {c.startDate.slice(0, 4)}{c.endDate ? `–${c.endDate.slice(0, 4)}` : "–Now"}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-2">
            <Link
              to="/#executive-overview"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition"
            >
              Executive View
            </Link>
            <Link
              to="/resume"
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/10 px-3 py-1.5 text-xs font-medium text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition shadow-2xs"
            >
              <FileText size={12} /> <span>Résumé</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Chapter Content with swipe support */}
      <section className="relative z-10 px-4 pb-36 pt-8 sm:px-6 md:pt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.slug}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -70 && next) navigate(`/journey/${next.slug}`);
              else if (info.offset.x > 70 && prev) navigate(`/journey/${prev.slug}`);
            }}
          >
            <ChapterCard exp={current} index={index} total={chapters.length} />
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Bottom Sticky Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-border/70 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <button
            onClick={() => prev ? navigate(`/journey/${prev.slug}`) : navigate("/")}
            className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/70 px-4 py-2 text-xs sm:text-sm font-medium transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] shadow-2xs"
          >
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">{prev ? prev.company : "Home"}</span>
            <span className="sm:hidden">{prev ? "Prev" : "Home"}</span>
          </button>

          {/* Interactive Chapter Indicator Bars */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {chapters.map((c, i) => {
              const isActive = i === index;
              return (
                <button
                  key={c.slug}
                  onClick={() => navigate(`/journey/${c.slug}`)}
                  title={`Chapter ${i + 1}: ${c.company}`}
                  className="group relative flex flex-col items-center py-1 transition-all"
                >
                  <span
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? 28 : 8,
                      backgroundColor: isActive
                        ? (c.accentColor ?? "var(--color-primary)")
                        : "var(--color-border)",
                    }}
                  />
                </button>
              );
            })}
          </div>

          <button
            onClick={() => next ? navigate(`/journey/${next.slug}`) : navigate("/#executive-overview")}
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary)] px-4 py-2 text-xs sm:text-sm font-medium text-[var(--color-primary-foreground)] transition hover:opacity-90 shadow-2xs"
          >
            <span className="hidden sm:inline">{next ? next.company : "Overview"}</span>
            <span className="sm:hidden">{next ? "Next" : "Done"}</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </nav>
    </main>
  );
}
