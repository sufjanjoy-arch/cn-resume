import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Briefcase, Calendar } from "lucide-react";
import type { Experience } from "@/types/portfolio";
import {
  tenureLabel, tenureDuration, employmentLabel, splitDescription,
} from "@/lib/experience-helpers";

export default function ChapterCard({ exp, index, total }: {
  exp: Experience; index: number; total: number;
}) {
  const [open, setOpen] = useState(false);
  const accent = exp.accentColor ?? "var(--color-primary)";
  const details = splitDescription(exp.description);

  return (
    <motion.article
      key={exp.slug}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-3xl"
    >
      {/* Chapter marker */}
      <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
        <span
          className="inline-flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-[11px] font-semibold text-white"
          style={{ backgroundColor: accent }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span>Chapter {index + 1} of {total}</span>
        {exp.current && (
          <span className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-[10px] tracking-wider text-[var(--color-primary)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" /> NOW
          </span>
        )}
      </div>

      {/* Company + role */}
      <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">
        {exp.company}
      </h1>
      <p className="mt-2 text-lg md:text-xl text-foreground/80">{exp.role}</p>

      {/* Meta row */}
      <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
        <MetaChip icon={<Calendar size={12} />}>{tenureLabel(exp)} · {tenureDuration(exp)}</MetaChip>
        <MetaChip icon={<Briefcase size={12} />}>{employmentLabel(exp.employmentType)}</MetaChip>
        <MetaChip icon={<MapPin size={12} />}>{exp.location}</MetaChip>
      </div>

      {/* Accent divider */}
      <div className="mt-8 flex items-center gap-3">
        <div className="h-px flex-1" style={{ backgroundColor: `${accent}55` }} />
        <span className="text-[11px] uppercase tracking-[0.3em]" style={{ color: accent }}>
          The Story
        </span>
        <div className="h-px flex-1" style={{ backgroundColor: `${accent}55` }} />
      </div>

      {/* Story */}
      <p className="mt-6 text-lg leading-[1.75] text-foreground/90">
        {exp.story}
      </p>

      {/* Tools */}
      {exp.tools && exp.tools.length > 0 && (
        <div className="mt-8">
          <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Tools of the trade
          </p>
          <div className="flex flex-wrap gap-2">
            {exp.tools.map((t) => (
              <div key={t.name}
                   className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-sm shadow-sm">
                <img src={t.logo} alt="" className="h-4 w-4 rounded-sm object-contain"
                     onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")} />
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Expand */}
      <div className="mt-10">
        <button
          onClick={() => setOpen((v) => !v)}
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition"
          aria-expanded={open}
        >
          <span>{open ? "Close the chapter" : "Read the full chapter"}</span>
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
            <ChevronDown size={16} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-6 space-y-5 rounded-2xl border border-border bg-card/60 p-5 md:p-7">
                {details.map((d, i) => (
                  <div key={i}>
                    {d.heading && (
                      <h3 className="text-sm font-semibold tracking-wide" style={{ color: accent }}>
                        {d.heading}
                      </h3>
                    )}
                    <p className={`text-[15px] leading-relaxed text-foreground/85 ${d.heading ? "mt-1.5" : ""}`}>
                      {d.body}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </motion.article>
  );
}

function MetaChip({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1 text-foreground/80">
      {icon} {children}
    </span>
  );
}
