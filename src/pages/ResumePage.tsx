import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, Loader2 } from "lucide-react";
import { personalInfo, socialLinks, experience, education } from "@/data/portfolio-data";
import { tenureLabel, employmentLabel, splitDescription } from "@/lib/experience-helpers";
import { downloadResumePdf } from "@/lib/download-resume";

export default function ResumePage() {
  const [downloading, setDownloading] = useState(false);
  const linkedIn = socialLinks.find((s) => s.platform === "LinkedIn");

  // display roles reverse-chronological (most recent first) for résumé
  const roles = [...experience].reverse();

  const handleDownload = async () => {
    if (downloading) return;
    setDownloading(true);
    try {
      await downloadResumePdf();
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="resume-root min-h-screen bg-[#f5f0e8] py-6 sm:py-8 print:py-0">
      {/* Action Bar for Screen view */}
      <div className="mx-auto max-w-[794px] mb-4 px-4 flex items-center justify-between print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#4a6b57] hover:text-[#2d4336] transition"
        >
          <ArrowLeft size={15} /> Back to Portfolio
        </Link>
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="inline-flex items-center gap-2 rounded-full bg-[#6f9279] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#5a7963] transition disabled:opacity-60"
        >
          {downloading ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />}
          <span>{downloading ? "Preparing PDF…" : "Download PDF Résumé"}</span>
        </button>
      </div>

      <div
        id="resume-sheet"
        className="resume-sheet mx-auto grid h-[1120px] max-w-[794px] grid-cols-[245px_1fr] overflow-hidden bg-[#faf7f1] shadow-xl print:shadow-none"
      >
        <aside className="resume-sidebar bg-[#6f9279] px-7 py-7 text-white">
          <header className="resume-header">
            <h1 className="text-[31px] font-light leading-[0.98] tracking-tight">{personalInfo.name}</h1>
            <p className="mt-3 text-[13px] leading-snug opacity-95">{personalInfo.title}</p>
          </header>

          <SideSection title="Contact">
            <div className="space-y-1.5 text-[9.8px] leading-snug" style={{ color: "rgba(255,255,255,0.95)" }}>
              <p>{personalInfo.location.city}, {personalInfo.location.country}</p>
              <p>{personalInfo.email}</p>
              {linkedIn && <p className="break-words">{linkedIn.url.replace(/^https?:\/\//, "")}</p>}
            </div>
          </SideSection>

          <SideSection title="Languages">
            <p className="text-[9.8px] leading-relaxed" style={{ color: "rgba(255,255,255,0.95)" }}>
              English & Hindi — fluent<br />Malayalam — native<br />Gujarati — conversational
            </p>
          </SideSection>

          <SideSection title="Areas of Expertise">
            <div className="space-y-1.5 text-[9.6px] leading-snug" style={{ color: "rgba(255,255,255,0.95)" }}>
              {[
                "HR Strategy",
                "Performance Management",
                "OKRs & KPI Architecture",
                "HRIS: Keka, Zoho, PeopleCues",
                "Employee Lifecycle",
                "Policy Design & Compliance",
                "Talent Acquisition",
                "Compensation & Benefits",
                "Employee Engagement",
                "Change Management",
                "People Analytics & eNPS",
                "ESOP Communication",
              ].map((s) => (
                <div key={s} className="resume-skill-item flex items-start gap-2">
                  <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.75)" }} />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </SideSection>

          <SideSection title="Education">
            <div className="space-y-2 text-[9.6px] leading-snug" style={{ color: "rgba(255,255,255,0.95)" }}>
              {education.map((e) => (
                <div key={e.id} className="resume-education-row">
                  <p className="font-semibold">{e.degree}</p>
                  {e.field && <p>{e.field}</p>}
                  <p>{e.institution}</p>
                  {(e.startYear || e.endYear) && <p>{e.startYear}{e.startYear && e.endYear ? "–" : ""}{e.endYear}</p>}
                  {e.details && <p className="mt-0.5" style={{ color: "rgba(255,255,255,0.85)" }}>{e.details}</p>}
                </div>
              ))}
            </div>
          </SideSection>
        </aside>

        <main className="px-7 py-6 text-[#2d2d2d]">
          <Section title="Profile">
            <p className="text-[9.6px] leading-[1.38]">
              HR Business Partner with 8+ years building and scaling people systems across high-growth startups. Currently at Finbox, driving performance management, OKR governance, talent management, and employee listening for a 140+ employee span in a 410-member organization. Experienced in KPI-driven PMS, HRMS implementation, ESOP rollout communication, org design, and people analytics.
            </p>
          </Section>

          <Section title="Professional Experience">
            <div className="space-y-3">
              {roles.map((r) => {
                const details = splitDescription(r.description);
                return (
                  <div key={r.id} className="resume-experience-item break-inside-avoid">
                    <div className="flex items-baseline justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="text-[10.6px] font-semibold leading-tight text-[#1e2b25]">
                          {r.role} <span className="font-normal text-[#5c8a7a]">· {r.company}</span>
                        </h3>
                        <p className="text-[8.5px] leading-snug text-[#5c5c5c]">
                          {employmentLabel(r.employmentType)} · {r.location}
                        </p>
                      </div>
                      <p className="shrink-0 text-[8.5px] font-medium text-[#5c8a7a]">{tenureLabel(r)}</p>
                    </div>
                    <ul className="mt-1 space-y-0.5 pl-3.5 text-[8.85px] leading-[1.27]">
                      {details.slice(0, r.company === "Eclat Engineering" ? 5 : r.company === "Skillventory" ? 2 : 4).map((d, i) => (
                        <li key={i} className="resume-bullet list-disc marker:text-[#7d9b76]">
                          {d.heading && <span className="font-semibold text-[#1e2b25]">{d.heading}: </span>}
                          {d.body}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Section>
        </main>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="resume-section mb-3.5">
      <h2 className="resume-section-title mb-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#5c8a7a]">
        <span className="inline-block h-[2px] w-5 align-middle bg-[#7d9b76]" /> <span className="ml-2 align-middle">{title}</span>
      </h2>
      {children}
    </section>
  );
}

function SideSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="resume-section mt-6">
      <h2 className="resume-section-title mb-2 text-[9px] font-semibold uppercase tracking-[0.22em]" style={{ color: "rgba(255,255,255,0.8)" }}>
        {title}
      </h2>
      {children}
    </section>
  );
}
