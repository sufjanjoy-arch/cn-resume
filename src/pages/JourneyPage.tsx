import { useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { experience } from "@/data/portfolio-data";
import ChapterCard from "@/components/journey/ChapterCard";

export default function JourneyPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const chapters = experience; // already chronological
  const index = useMemo(() => {
    const i = chapters.findIndex((c) => c.slug === slug);
    return i === -1 ? 0 : i;
  }, [slug, chapters]);

  const current = chapters[index];
  const prev = index > 0 ? chapters[index - 1] : null;
  const next = index < chapters.length - 1 ? chapters[index + 1] : null;

  // Keyboard nav
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
  }, [index]);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      {/* Ambient tint per chapter */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-[-10%] h-[500px] w-[500px] rounded-full opacity-25 blur-3xl transition-colors duration-700"
             style={{ background: `radial-gradient(circle at center, ${current.accentColor ?? "#a8c0a0"} 0%, transparent 65%)` }} />
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-5 py-4 md:px-10">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
          <Home size={14} /> <span className="hidden sm:inline">Back to intro</span>
        </Link>
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Career Journey
        </div>
      </div>

      {/* Chapter */}
      <section className="relative z-10 px-5 pb-32 pt-6 md:px-10 md:pt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.slug}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80 && next) navigate(`/journey/${next.slug}`);
              else if (info.offset.x > 80 && prev) navigate(`/journey/${prev.slug}`);
            }}
          >
            <ChapterCard exp={current} index={index} total={chapters.length} />
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-5 py-3 md:px-10">
          <button
            onClick={() => prev && navigate(`/journey/${prev.slug}`)}
            disabled={!prev}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm font-medium transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] disabled:opacity-30 disabled:hover:border-border disabled:hover:text-inherit"
          >
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">{prev ? prev.company : "Start"}</span>
            <span className="sm:hidden">Prev</span>
          </button>

          <div className="flex items-center gap-2">
            {chapters.map((c, i) => (
              <button
                key={c.slug}
                onClick={() => navigate(`/journey/${c.slug}`)}
                aria-label={`Go to ${c.company}`}
                className="group relative h-2.5 rounded-full transition-all"
                style={{
                  width: i === index ? 28 : 10,
                  backgroundColor: i === index ? (c.accentColor ?? "var(--color-primary)") : "var(--color-border)",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => next ? navigate(`/journey/${next.slug}`) : navigate("/")}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-[var(--color-primary-foreground)] transition hover:opacity-90"
          >
            <span className="hidden sm:inline">{next ? next.company : "Finish"}</span>
            <span className="sm:hidden">Next</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </nav>
    </main>
  );
}
