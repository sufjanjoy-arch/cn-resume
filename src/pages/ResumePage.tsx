import { personalInfo, socialLinks, experience, education } from "@/data/portfolio-data";
import { tenureLabel, employmentLabel, splitDescription } from "@/lib/experience-helpers";

export default function ResumePage() {
  const linkedIn = socialLinks.find((s) => s.platform === "LinkedIn");

  // display roles reverse-chronological (most recent first) for résumé
  const roles = [...experience].reverse();

  return (
    <div className="resume-root min-h-screen bg-[#f5f0e8] py-10 print:py-0">
      <div className="resume-sheet mx-auto max-w-[820px] bg-[#faf7f1] shadow-xl print:shadow-none">
        {/* Sage header band */}
        <header className="resume-header px-10 py-8 text-white" style={{ background: "linear-gradient(135deg, #7d9b76 0%, #5c8a7a 100%)" }}>
          <h1 className="text-4xl font-light tracking-tight">{personalInfo.name}</h1>
          <p className="mt-1 text-base opacity-95">{personalInfo.title}</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[12px] opacity-95">
            <span>{personalInfo.location.city}, {personalInfo.location.country}</span>
            <span>{personalInfo.email}</span>
            {linkedIn && <span>{linkedIn.url.replace(/^https?:\/\//, "")}</span>}
            <span>English & Hindi (fluent) · Malayalam (native) · Gujarati (conversational)</span>
          </div>
        </header>

        <main className="px-10 py-8 text-[#2d2d2d]">
          {/* Summary */}
          <Section title="Profile">
            <p className="text-[12.5px] leading-[1.65]">
              HR Business Partner with 7.5+ years building and scaling people systems across high-growth startups.
              Currently at Finbox, driving performance management, OKR governance, competency frameworks, and
              employee relations for a 230+ employee span. Experienced in designing KPI-driven PMS, implementing
              HRMS platforms, and supporting organization-wide change management including ESOP rollouts.
            </p>
          </Section>

          {/* Areas of expertise */}
          <Section title="Areas of Expertise">
            <div className="flex flex-wrap gap-1.5">
              {[
                "HR Strategy", "Performance Management (OKRs & KPIs)", "HRIS (Keka, Zoho, PeopleCues)",
                "Employee Lifecycle", "Policy & Compliance", "Talent Acquisition",
                "Compensation & Benefits", "Employee Engagement", "Change Management",
                "People Analytics (eNPS)", "ESOP Rollout", "Remote Onboarding",
              ].map((s) => (
                <span key={s} className="rounded-full border border-[#c9d4c1] bg-[#eef2ea] px-2.5 py-1 text-[11px]">
                  {s}
                </span>
              ))}
            </div>
          </Section>

          {/* Experience */}
          <Section title="Professional Experience">
            <div className="space-y-5">
              {roles.map((r) => {
                const details = splitDescription(r.description);
                return (
                  <div key={r.id} className="break-inside-avoid">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <h3 className="text-[14.5px] font-semibold text-[#1e2b25]">
                          {r.role} <span className="font-normal text-[#5c8a7a]">· {r.company}</span>
                        </h3>
                        <p className="text-[11.5px] text-[#5c5c5c]">
                          {employmentLabel(r.employmentType)} · {r.location}
                        </p>
                      </div>
                      <p className="text-[11.5px] font-medium text-[#5c8a7a]">{tenureLabel(r)}</p>
                    </div>
                    <ul className="mt-2 space-y-1.5 pl-4 text-[12px] leading-[1.6]">
                      {details.map((d, i) => (
                        <li key={i} className="list-disc marker:text-[#7d9b76]">
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

          {/* Education */}
          <Section title="Education & Certifications">
            <div className="space-y-2">
              {education.map((e) => (
                <div key={e.id} className="flex flex-wrap items-baseline justify-between gap-2 text-[12.5px]">
                  <div>
                    <span className="font-semibold text-[#1e2b25]">{e.degree}</span>
                    {e.field && <span className="text-[#5c5c5c]"> — {e.field}</span>}
                    <span className="text-[#5c8a7a]"> · {e.institution}</span>
                    {e.details && <div className="text-[11.5px] text-[#5c5c5c]">{e.details}</div>}
                  </div>
                  {(e.startYear || e.endYear) && (
                    <span className="text-[11.5px] text-[#5c5c5c]">
                      {e.startYear}{e.startYear && e.endYear ? "–" : ""}{e.endYear}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </Section>
        </main>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="resume-section mb-6 break-inside-avoid">
      <h2 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5c8a7a]">
        <span className="inline-block h-[2px] w-6 align-middle bg-[#7d9b76]" /> <span className="ml-2 align-middle">{title}</span>
      </h2>
      {children}
    </section>
  );
}
