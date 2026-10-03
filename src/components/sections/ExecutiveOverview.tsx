import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Building2, Calendar, MapPin, Briefcase, ArrowUpRight, 
  Sparkles, CheckCircle2, ChevronDown, ChevronUp, Layers, 
  Code2, Cpu, BarChart3, Users, Film, Compass, BookOpen, 
  Headphones, Heart, ExternalLink
} from "lucide-react";
import { 
  experience, categorizedSkills, keyInitiatives, education, hobbiesData 
} from "@/data/portfolio-data";
import { tenureLabel, employmentLabel, splitDescription } from "@/lib/experience-helpers";
import { ToolIcon } from "@/components/icons/ToolLogos";

export default function ExecutiveOverview() {
  // Reverse chronological order for recruiters & executive scanning
  const roles = [...experience].reverse();
  const [expandedRole, setExpandedRole] = useState<string | null>(roles[0]?.id ?? null);
  const [activeTab, setActiveTab] = useState<"timeline" | "skills" | "initiatives" | "education" | "beyond">("timeline");

  const toggleRole = (id: string) => {
    setExpandedRole((prev) => (prev === id ? null : id));
  };

  return (
    <section id="executive-overview" className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      {/* Overview Navigation Pills */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-border/60">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-semibold">
            Executive Summary
          </span>
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight mt-1 text-foreground">
            Career Overview & Impact
          </h2>
        </div>

        {/* View Switcher Pills */}
        <div className="inline-flex p-1 rounded-full bg-card/80 border border-border/80 shadow-xs text-xs font-medium backdrop-blur-sm flex-wrap gap-1">
          <button
            onClick={() => setActiveTab("timeline")}
            className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              activeTab === "timeline"
                ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xs font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Briefcase size={13} /> Experience
          </button>
          <button
            onClick={() => setActiveTab("initiatives")}
            className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              activeTab === "initiatives"
                ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xs font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sparkles size={13} /> AI & Tech
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              activeTab === "skills"
                ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xs font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Layers size={13} /> Skills
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              activeTab === "education"
                ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xs font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Building2 size={13} /> Education
          </button>
          <button
            onClick={() => setActiveTab("beyond")}
            className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
              activeTab === "beyond"
                ? "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-xs font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Heart size={13} /> Beyond Work
          </button>
        </div>
      </div>

      {/* Tab 1: Reverse-Chronological Experience Timeline */}
      {activeTab === "timeline" && (
        <div className="space-y-6">
          <div className="text-xs text-muted-foreground flex items-center justify-between pb-1">
            <span>Showing 5 positions (Most recent first)</span>
            <span className="hidden sm:inline">Click any role to expand achievements</span>
          </div>

          <div className="space-y-4">
            {roles.map((role, idx) => {
              const isExpanded = expandedRole === role.id;
              const details = splitDescription(role.description);

              return (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  className={`group rounded-2xl border transition-all duration-300 ${
                    role.current
                      ? "border-[var(--color-primary)]/50 bg-card/90 shadow-sm"
                      : "border-border/70 bg-card/60 hover:border-border"
                  } overflow-hidden`}
                >
                  {/* Header summary row */}
                  <div
                    onClick={() => toggleRole(role.id)}
                    className="p-5 sm:p-6 cursor-pointer select-none flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4">
                      {/* Accent pill */}
                      <span
                        className="mt-1 sm:mt-0 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-semibold text-white shadow-xs"
                        style={{ backgroundColor: role.accentColor ?? "var(--color-primary)" }}
                      >
                        {String(roles.length - idx).padStart(2, "0")}
                      </span>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-medium text-foreground tracking-tight">
                            {role.role}
                          </h3>
                          <span className="text-sm font-normal text-muted-foreground">
                            · {role.company}
                          </span>
                          {role.current && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary)]/10 px-2.5 py-0.5 text-[11px] font-semibold text-[var(--color-primary)]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                              PRESENT
                            </span>
                          )}
                        </div>

                        <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <Calendar size={12} /> {tenureLabel(role)}
                          </span>
                          <span>•</span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin size={12} /> {role.location}
                          </span>
                          <span>•</span>
                          <span className="inline-flex items-center gap-1">
                            <Briefcase size={12} /> {employmentLabel(role.employmentType)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons & tools preview */}
                    <div className="flex items-center gap-2 self-end sm:self-center">
                      {role.tools && role.tools.length > 0 && (
                        <div className="flex items-center gap-1.5 mr-2">
                          {role.tools.map((t) => (
                            <div key={t.name} title={t.name} className="opacity-85 hover:opacity-100 transition">
                              <ToolIcon name={t.name} size={20} />
                            </div>
                          ))}
                        </div>
                      )}

                      <Link
                        to={`/journey/${role.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 rounded-full border border-border/80 px-2.5 py-1 text-xs text-muted-foreground hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition"
                        title="Read the full story chapter"
                      >
                        Story <ArrowUpRight size={12} />
                      </Link>

                      <button
                        aria-label={isExpanded ? "Collapse role" : "Expand role"}
                        className="p-1 rounded-full text-muted-foreground hover:text-foreground transition"
                      >
                        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* Expandable details */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="border-t border-border/60 bg-muted/20 px-5 sm:px-6 py-5"
                      >
                        {/* Narrative summary */}
                        <div className="mb-4">
                          <p className="text-sm leading-relaxed text-foreground/90 italic border-l-2 pl-3"
                             style={{ borderColor: role.accentColor ?? "var(--color-primary)" }}>
                            "{role.story.split("\n\n")[0]}"
                          </p>
                        </div>

                        {/* Bulleted achievements */}
                        <div className="space-y-3 pt-2">
                          {details.map((d, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                              <CheckCircle2
                                size={14}
                                className="mt-1 shrink-0"
                                style={{ color: role.accentColor ?? "var(--color-primary)" }}
                              />
                              <div>
                                {d.heading && (
                                  <span className="font-semibold text-foreground">{d.heading}: </span>
                                )}
                                <span className="text-foreground/80">{d.body}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: AI & HR Tech Innovation Spotlight */}
      {activeTab === "initiatives" && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-[var(--color-primary)]/30 bg-gradient-to-br from-[var(--color-primary)]/5 via-card to-card p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)] mb-3">
              <Sparkles size={14} /> Cross-Disciplinary Edge
            </div>
            <h3 className="text-2xl font-light tracking-tight text-foreground mb-3">
              Building People Systems with Modern AI & Tech
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl mb-8">
              Chaitra combines traditional HR governance with rapid prototyping and AI tools (Claude, Cursor AI, Google Antigravity) to build bespoke internal tools, automate workflows, and translate qualitative 1:1 connect data into actionable organizational intelligence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {keyInitiatives.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-border/80 bg-card/80 p-5 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-primary)]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[var(--color-primary)] uppercase">
                        {item.badge}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.organization}</span>
                    </div>
                    <h4 className="text-base font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-xs font-medium text-[var(--color-primary)] mb-3">{item.tagline}</p>
                    <p className="text-xs leading-relaxed text-muted-foreground mb-4">{item.description}</p>

                    <div className="space-y-2 border-t border-border/60 pt-3">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Key Impact & Outcomes:
                      </div>
                      {item.impact.map((point, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-foreground/85">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border/60 flex items-center justify-between">
                    <span className="text-[11px] text-muted-foreground">Tools:</span>
                    <div className="flex items-center gap-1.5">
                      {item.toolsUsed.map((tool) => (
                        <div key={tool} title={tool}>
                          <ToolIcon name={tool} size={18} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Categorized Skills Matrix */}
      {activeTab === "skills" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {categorizedSkills.map((cat, idx) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-2xl border border-border/70 bg-card/60 p-5 space-y-3"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  {idx === 0 && <BarChart3 size={16} className="text-[var(--color-primary)]" />}
                  {idx === 1 && <Cpu size={16} className="text-[var(--color-primary)]" />}
                  {idx === 2 && <Users size={16} className="text-[var(--color-primary)]" />}
                  {idx === 3 && <Code2 size={16} className="text-[var(--color-primary)]" />}
                  <span>{cat.category}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-lg border border-border/80 bg-background/80 px-2.5 py-1 text-xs text-foreground/85"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Education & Certifications */}
      {activeTab === "education" && (
        <div className="space-y-4">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="rounded-2xl border border-border/70 bg-card/60 p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-3"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                  {edu.degree}
                </span>
                <h4 className="text-base font-medium text-foreground mt-0.5">{edu.field || edu.institution}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{edu.institution} {edu.location ? `· ${edu.location}` : ""}</p>
                {edu.details && <p className="text-xs text-foreground/80 mt-2 leading-relaxed">{edu.details}</p>}
              </div>

              {(edu.startYear || edu.endYear) && (
                <span className="shrink-0 text-xs font-medium text-muted-foreground border border-border/80 px-2.5 py-1 rounded-full self-start">
                  {edu.startYear ? `${edu.startYear} – ` : ""}{edu.endYear}
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Tab 5: Beyond Work & Hobbies */}
      {activeTab === "beyond" && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-border/80 bg-gradient-to-br from-card via-card to-[var(--color-primary)]/5 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)] mb-2">
              <Heart size={14} /> Personal Dimensions
            </div>
            <h3 className="text-2xl font-light tracking-tight text-foreground mb-2">
              Beyond People Operations
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl mb-8">
              A glimpse into the books, films, wanderlust, and sounds that spark curiosity outside the world of OKRs and performance systems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Cinema & Filmography */}
              <div className="rounded-xl border border-border/80 bg-card/80 p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)]">
                      <Film size={14} /> {hobbiesData.movies.title}
                    </span>
                    {hobbiesData.movies.imdbUrl && (
                      <a
                        href={hobbiesData.movies.imdbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground hover:text-[var(--color-primary)] transition"
                      >
                        IMDb <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                  <p className="text-xs leading-relaxed text-foreground/85 mb-4">
                    {hobbiesData.movies.description}
                  </p>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Favorite Genres:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {hobbiesData.movies.genres.map((g) => (
                      <span key={g} className="rounded-md border border-border/80 bg-background/70 px-2 py-0.5 text-[11px] text-foreground/80">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Travel & Wandering */}
              <div className="rounded-xl border border-border/80 bg-card/80 p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)]">
                      <Compass size={14} /> {hobbiesData.travel.title}
                    </span>
                    <span className="text-[10px] text-muted-foreground uppercase font-medium">Passport</span>
                  </div>
                  <p className="text-xs leading-relaxed text-foreground/85 mb-4">
                    {hobbiesData.travel.description}
                  </p>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Places & Cultures Visited:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {hobbiesData.travel.countriesVisited.map((country) => (
                      <span key={country} className="rounded-md border border-border/80 bg-background/70 px-2 py-0.5 text-[11px] text-foreground/80">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Books & Reading */}
              <div className="rounded-xl border border-border/80 bg-card/80 p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)]">
                      <BookOpen size={14} /> {hobbiesData.reading.title}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-foreground/85 mb-4">
                    {hobbiesData.reading.description}
                  </p>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Curious Reads:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {hobbiesData.reading.favoriteGenres.map((genre) => (
                      <span key={genre} className="rounded-md border border-border/80 bg-background/70 px-2 py-0.5 text-[11px] text-foreground/80">
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Music & Soundscapes */}
              <div className="rounded-xl border border-border/80 bg-card/80 p-5 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary)]">
                      <Headphones size={14} /> {hobbiesData.music.title}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-foreground/85 mb-4">
                    {hobbiesData.music.description}
                  </p>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Vibes & Playlists:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {hobbiesData.music.genres.map((m) => (
                      <span key={m} className="rounded-md border border-border/80 bg-background/70 px-2 py-0.5 text-[11px] text-foreground/80">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
