import { useState, useRef, useEffect } from "react";
import { experience } from "@/data/portfolio-data";
import SplitSection from "@/components/ui/split-section";
import { format } from "date-fns";
import { ChevronDown, MapPin, Briefcase } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

/**
 * WorkSection Component
 * Interactive career journey with expandable role cards and a sticky chapter navigator
 */
export default function WorkSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [expandedId, setExpandedId] = useState<string | null>(experience[0]?.id || null);
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track which step is most visible in the viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, index) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index);
          }
        },
        { threshold: 0.5, rootMargin: "-20% 0px -40% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollToStep = (index: number) => {
    const el = stepRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setExpandedId(experience[index].id);
    }
  };

  const toggleCard = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <SplitSection title="Career Journey" id="work" count={2}>
      <div className="relative">
        {/* Sticky chapter navigator — desktop only */}
        <nav className="hidden lg:block absolute left-0 top-0 bottom-0 w-16 print:hidden">
          <div className="sticky top-[140px] flex flex-col items-center gap-6">
            {experience.map((job, index) => {
              const isActive = activeStep === index;
              const isExpanded = expandedId === job.id;
              return (
                <button
                  key={job.id}
                  onClick={() => scrollToStep(index)}
                  className="group relative flex items-center justify-center w-10 h-10 transition-all"
                  aria-label={`Go to ${job.company}`}
                >
                  <span
                    className={`absolute inset-0 rounded-full border transition-all duration-300 ${
                      isActive || isExpanded
                        ? "border-[var(--color-primary)] bg-[var(--color-primary)]"
                        : "border-[var(--color-border)] bg-background group-hover:border-[var(--color-primary)]/50"
                    }`}
                    style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
                  />
                  <span
                    className={`relative text-sm font-medium transition-colors duration-300 ${
                      isActive || isExpanded
                        ? "text-primary-foreground"
                        : "text-[var(--color-muted-foreground)]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
            {/* Vertical connecting line */}
            <div className="absolute top-5 bottom-5 left-1/2 w-px -translate-x-1/2 bg-[var(--color-border)] -z-10" />
          </div>
        </nav>

        {/* Journey cards */}
        <div className="lg:pl-20 space-y-12 md:space-y-16">
          {experience.map((job, index) => {
            const start = format(new Date(job.startDate), "MMM yyyy");
            const end = job.endDate ? format(new Date(job.endDate), "MMM yyyy") : "Present";
            const duration = getDuration(job.startDate, job.endDate);
            const isExpanded = expandedId === job.id;
            const isActive = activeStep === index;

            return (
              <motion.div
                key={job.id}
                ref={(el) => { stepRefs.current[index] = el; }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="relative"
              >
                {/* Mobile step indicator */}
                <div className="lg:hidden absolute -left-4 top-0 flex flex-col items-center h-full print:hidden">
                  <div
                    className={`w-8 h-8 flex items-center justify-center text-xs font-medium rounded-full border transition-colors ${
                      isActive || isExpanded
                        ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-primary-foreground"
                        : "border-[var(--color-border)] bg-background text-[var(--color-muted-foreground)]"
                    }`}
                    style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  {index !== experience.length - 1 && (
                    <div className="w-px flex-1 bg-[var(--color-border)] mt-3" />
                  )}
                </div>

                <div className="ml-8 lg:ml-0">
                  {/* Chapter label */}
                  <div className="mb-3 flex items-center gap-2 text-tiny uppercase tracking-wide text-[var(--color-primary)] font-medium">
                    <span className="hidden sm:inline">Chapter {String(index + 1).padStart(2, "0")}</span>
                    <span className="sm:hidden">Step {String(index + 1).padStart(2, "0")}</span>
                    <span className="w-8 h-px bg-[var(--color-primary)]/40" />
                    <span className="text-[var(--color-muted-foreground)]">{duration}</span>
                  </div>

                  {/* Card header — clickable */}
                  <button
                    onClick={() => toggleCard(job.id)}
                    className={`w-full text-left group rounded-lg border p-5 md:p-6 transition-all duration-300 ${
                      isExpanded
                        ? "bg-[var(--color-primary)]/5 border-[var(--color-primary)]/40 shadow-sm"
                        : "bg-background border-[var(--color-border)] hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-primary)]/[0.02]"
                    }`}
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-large text-[var(--color-foreground)]">{job.role}</h3>
                          {job.current && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-tiny bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-small text-[var(--color-muted-foreground)]">
                          <span className="inline-flex items-center gap-1.5">
                            <Briefcase size={13} />
                            {job.company}
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin size={13} />
                            {start} — {end}
                          </span>
                        </div>
                      </div>
                      <div
                        className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${
                          isExpanded
                            ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-primary-foreground rotate-180"
                            : "border-[var(--color-border)] text-[var(--color-muted-foreground)] group-hover:border-[var(--color-primary)]/50"
                        }`}
                      >
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </button>

                  {/* Expandable content */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5 pb-2 grid gap-4 md:grid-cols-2">
                          {job.description
                            .split("\n\n")
                            .filter(Boolean)
                            .map((line, i) => {
                              const [label, body] = splitLine(line);
                              return (
                                <div
                                  key={i}
                                  className="rounded-md border border-[var(--color-border)]/60 bg-background p-4 print:border print:border-[#ddd]"
                                >
                                  <h4 className="text-small font-medium text-[var(--color-primary)] mb-1">
                                    {label}
                                  </h4>
                                  <p className="text-small text-[var(--color-muted-foreground)] leading-relaxed">
                                    {body}
                                  </p>
                                </div>
                              );
                            })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SplitSection>
  );
}

/**
 * Split a responsibility line like "Label: Body" into a heading and paragraph.
 * Falls back to the whole line as the body if no colon is present.
 */
function splitLine(line: string): [string, string] {
  const colonIndex = line.indexOf(":");
  if (colonIndex > 0) {
    return [line.slice(0, colonIndex).trim(), line.slice(colonIndex + 1).trim()];
  }
  return ["", line.trim()];
}

/**
 * Calculate a human-readable duration from start/end ISO dates.
 */
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
