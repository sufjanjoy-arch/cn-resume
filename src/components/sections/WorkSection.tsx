import { useMemo, useRef, useState, useEffect } from "react";
import { experience } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

/**
 * WorkSection — horizontal, chronologically-ordered career journey.
 * Cards snap-scroll left → right, starting with the earliest role.
 */
export default function WorkSection() {
  // Chronological order: earliest company first
  const journey = useMemo(
    () =>
      [...experience].sort(
        (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      ),
    []
  );

  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track active card via IntersectionObserver on horizontal scroller
  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) setActiveIndex(i);
        },
        { root, threshold: [0.6, 0.9] }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (index: number) => {
    const el = cardRefs.current[index];
    if (el) el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const nudge = (dir: -1 | 1) => {
    const next = Math.max(0, Math.min(journey.length - 1, activeIndex + dir));
    scrollTo(next);
  };

  return (
    <SplitSection title="Career Journey" id="work" count={2}>
      <div className="relative">
        {/* Controls */}
        <div className="flex items-center justify-between mb-6 print:hidden">
          <div className="text-tiny uppercase tracking-wide text-[var(--color-muted-foreground)]">
            Chapter {String(activeIndex + 1).padStart(2, "0")} / {String(journey.length).padStart(2, "0")}
            <span className="mx-2 text-[var(--color-border)]">·</span>
            <span className="text-[var(--color-primary)] font-medium">{journey[activeIndex]?.company}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => nudge(-1)}
              disabled={activeIndex === 0}
              aria-label="Previous role"
              className="w-9 h-9 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => nudge(1)}
              disabled={activeIndex === journey.length - 1}
              aria-label="Next role"
              className="w-9 h-9 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Horizontal scroller */}
        <div
          ref={scrollerRef}
          className="relative -mx-4 sm:-mx-6 px-4 sm:px-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 print:overflow-visible print:mx-0 print:px-0"
          style={{ scrollbarWidth: "thin" }}
        >
          {/* Timeline rail */}
          <div className="absolute left-0 right-0 top-[92px] h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent print:hidden" />

          <div className="flex gap-6 print:flex-col print:gap-8">
            {journey.map((job, index) => {
              const start = format(new Date(job.startDate), "MMM yyyy");
              const end = job.endDate ? format(new Date(job.endDate), "MMM yyyy") : "Present";
              const duration = getDuration(job.startDate, job.endDate);
              const isActive = activeIndex === index;

              return (
                <motion.article
                  key={job.id}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                  className="relative snap-center shrink-0 w-[85vw] sm:w-[520px] md:w-[560px] print:w-full print:shrink"
                >
                  {/* Chapter marker on the rail */}
                  <div className="flex flex-col items-start mb-4 print:hidden">
                    <div className="text-tiny uppercase tracking-wider text-[var(--color-primary)] font-medium mb-2">
                      Chapter {String(index + 1).padStart(2, "0")}
                      <span className="mx-2 text-[var(--color-border)]">·</span>
                      <span className="text-[var(--color-muted-foreground)]">{duration}</span>
                    </div>
                    <div className="flex items-center gap-3 w-full">
                      <span
                        className={`relative w-4 h-4 rounded-full transition-all ${
                          isActive
                            ? "bg-[var(--color-primary)] scale-125"
                            : "bg-background border-2 border-[var(--color-border)]"
                        }`}
                      >
                        {isActive && (
                          <span className="absolute inset-0 rounded-full bg-[var(--color-primary)] animate-ping opacity-40" />
                        )}
                      </span>
                      <span className="text-small text-[var(--color-muted-foreground)]">
                        {start} — {end}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`rounded-2xl border p-6 md:p-7 h-full transition-all duration-300 print:border print:border-[#ddd] print:rounded-none print:p-4 ${
                      isActive
                        ? "bg-[var(--color-primary)]/[0.04] border-[var(--color-primary)]/40 shadow-sm"
                        : "bg-background border-[var(--color-border)]"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="min-w-0">
                        <h3 className="text-large text-[var(--color-foreground)] leading-tight">{job.role}</h3>
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-small text-[var(--color-muted-foreground)]">
                          <span className="inline-flex items-center gap-1.5 font-medium text-[var(--color-foreground)]">
                            <Briefcase size={13} />
                            {job.company}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin size={13} />
                            {start} — {end}
                          </span>
                        </div>
                      </div>
                      {job.current && (
                        <span className="inline-flex shrink-0 items-center px-2.5 py-1 rounded-full text-tiny bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Tool logos */}
                    {job.tools && job.tools.length > 0 && (
                      <div className="mb-5 pb-5 border-b border-[var(--color-border)]/60">
                        <div className="text-tiny uppercase tracking-wide text-[var(--color-muted-foreground)] mb-2">
                          Tools & Platforms
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {job.tools.map((tool) => (
                            <div
                              key={tool.name}
                              className="group inline-flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full border border-[var(--color-border)] bg-background hover:border-[var(--color-primary)]/50 hover:-translate-y-0.5 transition-all duration-200"
                              title={tool.name}
                            >
                              <span className="w-6 h-6 rounded-full bg-white border border-[var(--color-border)]/60 flex items-center justify-center overflow-hidden">
                                <img
                                  src={tool.logo}
                                  alt={`${tool.name} logo`}
                                  className="w-4 h-4 object-contain"
                                  loading="lazy"
                                  onError={(e) => {
                                    const t = e.currentTarget;
                                    t.style.display = "none";
                                    const parent = t.parentElement;
                                    if (parent && !parent.querySelector("span")) {
                                      const s = document.createElement("span");
                                      s.textContent = tool.name.charAt(0);
                                      s.className = "text-tiny font-semibold text-[var(--color-primary)]";
                                      parent.appendChild(s);
                                    }
                                  }}
                                />
                              </span>
                              <span className="text-small text-[var(--color-foreground)]">{tool.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Highlights */}
                    <div className="space-y-3">
                      {job.description
                        .split("\n\n")
                        .filter(Boolean)
                        .map((line, i) => {
                          const [label, body] = splitLine(line);
                          return (
                            <div key={i} className="text-small leading-relaxed">
                              {label && (
                                <span className="font-medium text-[var(--color-foreground)]">{label}: </span>
                              )}
                              <span className="text-[var(--color-muted-foreground)]">{body}</span>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Dot navigator */}
        <div className="flex items-center justify-center gap-2 mt-6 print:hidden">
          {journey.map((job, index) => (
            <button
              key={job.id}
              onClick={() => scrollTo(index)}
              aria-label={`Go to ${job.company}`}
              className="group flex flex-col items-center gap-1.5"
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-[var(--color-primary)]"
                    : "w-1.5 bg-[var(--color-border)] group-hover:bg-[var(--color-primary)]/50"
                }`}
              />
              <span
                className={`text-tiny transition-colors ${
                  activeIndex === index
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-muted-foreground)]/60"
                }`}
              >
                {job.company}
              </span>
            </button>
          ))}
        </div>
      </div>
    </SplitSection>
  );
}

function splitLine(line: string): [string, string] {
  const colonIndex = line.indexOf(":");
  if (colonIndex > 0 && colonIndex < 80) {
    return [line.slice(0, colonIndex).trim(), line.slice(colonIndex + 1).trim()];
  }
  return ["", line.trim()];
}

function getDuration(startDate: string, endDate: string | null): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  if (months < 1) months = 1;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  if (years === 0) return `${rem} mo${rem === 1 ? "" : "s"}`;
  if (rem === 0) return `${years} yr${years === 1 ? "" : "s"}`;
  return `${years} yr ${rem} mo`;
}
