import { personalInfo } from "@/data/portfolio-data";
import { MapPin, Sparkles } from "lucide-react";

/**
 * Hero: Editorial centered hero with soft ambient blobs
 */
export default function Hero1() {
  return (
    <section className="relative flex items-center justify-center px-4 sm:px-8 md:p-16 lg:p-24 py-16 md:py-24 bg-background overflow-hidden">
      {/* Ambient blobs */}
      <div
        aria-hidden
        className="absolute -top-24 -left-16 w-[380px] h-[380px] opacity-40 blur-3xl pointer-events-none print:hidden"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, var(--color-primary), transparent 60%)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-16 w-[420px] h-[420px] opacity-30 blur-3xl pointer-events-none print:hidden"
        style={{
          background:
            "radial-gradient(circle at 70% 70%, var(--color-primary), transparent 65%)",
          borderRadius: "40% 60% 70% 30% / 40% 50% 50% 60%",
        }}
      />

      <div className="relative w-full max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[var(--color-primary)]/40 bg-[var(--color-primary)]/5 text-[var(--color-primary)]">
          <Sparkles size={12} />
          <span className="text-tiny tracking-wide uppercase">
            HR Business Partner · 7.5+ years
          </span>
        </div>

        <h1 className="text-[44px] sm:text-[64px] md:text-[96px] lg:text-[110px] xl:text-[120px] mb-6 text-display leading-[1.02]">
          {personalInfo.name}
        </h1>

        <p className="max-w-2xl mx-auto text-body text-[var(--color-muted-foreground)] mb-8">
          People strategy, performance architecture & change management for
          high-growth startups.
        </p>

        <div className="flex justify-center mb-10">
          <div className="h-1 w-40 md:w-56 bg-[var(--color-primary)] rounded-full"></div>
        </div>

        <div className="flex justify-center mb-6">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -m-2 bg-[var(--color-primary)]/20 blur-2xl print:hidden"
              style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
            />
            <img
              id="hero-photo"
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="relative w-44 h-56 md:w-60 md:h-72 object-cover shadow-xl"
              style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 text-small text-[var(--color-muted-foreground)]">
          <MapPin size={13} />
          <span>
            {personalInfo.location.city}, {personalInfo.location.country}
          </span>
        </div>
      </div>
    </section>
  );
}
