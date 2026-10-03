import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import type { Experience } from "@/types/portfolio";
import {
  tenureLabel, tenureDuration, employmentLabel, splitDescription,
} from "@/lib/experience-helpers";
import { ToolIcon } from "@/components/icons/ToolLogos";

export default function ChapterCard({ exp, index, total }: {
  exp: Experience; index: number; total: number;
}) {
  const [open, setOpen] = useState(false);
  const accent = exp.accentColor ?? "var(--color-primary)";
  const details = splitDescription(exp.description);

  return (
    <motion.article
      key={exp.slug}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-3xl"
    >
      {/* Chapter marker */}
      <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
        <span
          className="inline-flex h-7 min-w-7 items-center justify-center rounded-full px-2 text-[11px] font-semibold text-white shadow-xs"
          style={{ backgroundColor: accent }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span>Chapter {index + 1} of {total}</span>
        {exp.current && (
          <span className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-primary)]/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-[var(--color-primary)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" /> NOW
          </span>
        )}
      </div>

      {/* Company + role */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-[1.05] tracking-tight text-foreground">
        {exp.company}
      </h1>
      <p className="mt-2 text-lg sm:text-xl text-foreground/80 font-normal">{exp.role}</p>

      {/* Meta row */}
      <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
        <MetaChip icon={<Calendar size={12} />}>{tenureLabel(exp)} · {tenureDuration(exp)}</MetaChip>
        <MetaChip icon={<Briefcase size={12} />}>{employmentLabel(exp.employmentType)}</MetaChip>
        <MetaChip icon={<MapPin size={12} />}>{exp.location}</MetaChip>
      </div>

      {/* Accent divider */}
      <div className="mt-8 flex items-center gap-3">
        <div className="h-px flex-1" style={{ backgroundColor: `${accent}40` }} />
        <span className="text-[11px] uppercase tracking-[0.3em] font-medium" style={{ color: accent }}>
          The Story
        </span>
        <div className="h-px flex-1" style={{ backgroundColor: `${accent}40` }} />
      </div>

      {/* Story */}
      <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-foreground/90 font-light">
        {exp.story.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {/* Tools */}
      {exp.tools && exp.tools.length > 0 && (
        <div className="mt-8">
          <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">
            Tools & Platforms
          </p>
          <div className="flex flex-wrap gap-2">
            {exp.tools.map((t) => (
              <div
                key={t.name}
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-3.5 py-1.5 text-xs sm:text-sm font-medium shadow-2xs backdrop-blur-xs transition hover:border-[var(--color-primary)]/50"
              >
                <ToolIcon name={t.name} size={18} />
                <span>{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Expandable Key Deliverables */}
      <div className="mt-10">
        <button
          onClick={() => setOpen((v) => !v)}
          className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-4 py-2.5 text-xs sm:text-sm font-medium hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition shadow-xs"
          aria-expanded={open}
        >
          <span>{open ? "Close key deliverables" : "Read key achievements & deliverables"}</span>
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
              <div className="mt-6 space-y-4 rounded-2xl border border-border/80 bg-card/70 p-5 sm:p-7 shadow-xs">
                {details.map((d, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="mt-1 shrink-0" style={{ color: accent }} />
                    <div className="flex-1">
                      {d.heading && (
                        <h3 className="text-xs sm:text-sm font-semibold tracking-wide" style={{ color: accent }}>
                          {d.heading}
                        </h3>
                      )}
                      <p className={`text-xs sm:text-sm leading-relaxed text-foreground/85 ${d.heading ? "mt-1" : ""}`}>
                        {d.body}
                      </p>
                    </div>
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
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs text-foreground/80 shadow-2xs">
      {icon} {children}
    </span>
  );
}
