import type { Experience } from "@/types/portfolio";

export function formatMonth(iso: string): string {
  const [y, m] = iso.split("-").map(Number);
  const d = new Date(y, (m || 1) - 1, 1);
  return d.toLocaleString("en-US", { month: "short", year: "numeric" });
}

export function tenureLabel(exp: Experience): string {
  const start = formatMonth(exp.startDate);
  const end = exp.endDate ? formatMonth(exp.endDate) : "Present";
  return `${start} — ${end}`;
}

export function tenureDuration(exp: Experience): string {
  const [sy, sm] = exp.startDate.split("-").map(Number);
  const endIso = exp.endDate ?? new Date().toISOString().slice(0, 7);
  const [ey, em] = endIso.split("-").map(Number);
  let months = (ey - sy) * 12 + (em - sm);
  if (months < 1) months = 1;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  if (years === 0) return `${rem} mo`;
  if (rem === 0) return `${years} yr`;
  return `${years} yr ${rem} mo`;
}

export function employmentLabel(t: Experience["employmentType"]): string {
  switch (t) {
    case "full-time": return "Full-time";
    case "part-time": return "Part-time";
    case "consultant": return "Consultant";
    case "contract": return "Contract";
  }
}

/** Split description into { heading, body } chapters when "Label: text" pattern exists. */
export function splitDescription(desc: string): { heading?: string; body: string }[] {
  return desc.split("\n\n").filter(Boolean).map((para) => {
    const m = para.match(/^([A-Z][A-Za-z0-9 ,&/-]{3,80}):\s+([\s\S]+)$/);
    if (m) return { heading: m[1].trim(), body: m[2].trim() };
    return { body: para.trim() };
  });
}
