
# Refinement Plan — Locations, Languages, Direct PDF Download, Start CTA

Small, targeted revisions to the existing intro + journey + résumé flow. No new pages.

## 1. Location updates (in `src/data/portfolio-data.ts`)

Update `location` on each experience entry:

| Company | New location |
|---|---|
| Skillventory | Ahmedabad (Onsite) |
| Eclat Engineering | Ahmedabad (Remote) |
| Skillsbucket | Ahmedabad (Onsite) |
| Attri | Ahmedabad (Onsite) |
| Finbox | Bangalore (Onsite) |

The résumé page and ChapterCard meta chip both read `exp.location`, so no component changes needed.

Also drop the stale "Remote · APAC, Africa, LATAM" phrasing from Eclat's `location`. The global-teams context stays inside the story/description text where it belongs.

## 2. Languages — replace acronyms with a readable line

Currently both intro and résumé show `EN · HI · ML · GU`, which is opaque.

Replace with a natural line:

> **Languages:** English & Hindi (fluent) · Malayalam (native) · Gujarati (conversational)

- Intro page (`IntroLanding.tsx`): swap the `EN · HI · ML · GU` chip for a single "Languages" chip with the readable text, OR move it into a small line under the location chip (cleaner on mobile).
- Résumé page (`ResumePage.tsx`): replace the header's `EN · HI · ML · GU` span with the same readable line.
- Bio: the last sentence in `personalInfo.bio` already covers this; keep it.

## 3. Direct PDF download (not a preview page)

Today, "Résumé" opens `/resume?print=1` in a new tab and triggers the browser print dialog. User wants a real file download instead.

Approach: **client-side PDF generation** using `html2canvas` + `jspdf` (both small, well-supported, no backend).

Flow:
1. Keep `/resume` route intact — it's the source of truth for the résumé layout and is useful for direct viewing.
2. Add a `downloadResumePdf()` helper (in `src/lib/download-resume.ts`):
   - Renders the `ResumePage` markup off-screen into a hidden container (or mounts a headless copy via a portal).
   - Calls `html2canvas` on the résumé sheet at 2x scale for print sharpness.
   - Composes an A4 PDF via `jspdf` and calls `.save("Chaitra-Nair-Resume.pdf")`.
3. Wire the helper to every "Résumé" button:
   - `FixedNavbar.tsx` — replace both `<a href="/resume?print=1">` with `<button onClick={downloadResumePdf}>`.
   - `IntroLanding.tsx` — replace the `<Link to="/resume?print=1">` with the same button.
4. Remove the auto-print `useEffect` from `ResumePage.tsx` (the route stays viewable but no longer force-prints).

Filename: `Chaitra-Nair-Resume.pdf`. Loading state on the button while generating (~1–2s).

### Alternative considered
`window.print()` on a hidden iframe still opens the OS print dialog. `html2canvas + jspdf` is the only clean way to get a one-click download without a backend, which is what the user asked for.

## 4. Skillventory chapter — "Start" button back to intro

The user (correctly) noted the first chapter has no natural back-to-start affordance beyond the small "Home" icon.

Add a prominent CTA at the bottom of ChapterCard **only when it's the first chapter** (`index === 0`):

- Left arrow icon + label "← Back to the start" (or "← Back to intro").
- Same rounded pill styling as the existing "Read the full chapter" button, but sage/outline treatment.
- Routes to `/`.

The bottom nav's Prev button is already disabled on chapter 1 today — that stays. This is an in-content complement, so users don't feel stuck.

Optionally add the mirror on Finbox (`index === total - 1`): a "Return to intro" pill after "Finish" — nice symmetry but not required. **Default: skip Finbox mirror unless requested**, since bottom-nav "Finish" already routes to `/`.

## 5. Logical flow polish (small)

- The intro's chapter counter reads "Chapter 00 — Intro"; keep, since chapters start at 01 on `/journey`.
- On `JourneyPage`, the top-right label reads "Career Journey" — leave as-is.

## Files touched

- `src/data/portfolio-data.ts` — locations
- `src/pages/IntroLanding.tsx` — languages chip, résumé download button
- `src/pages/ResumePage.tsx` — languages line, drop auto-print
- `src/components/FixedNavbar.tsx` — résumé download button
- `src/components/journey/ChapterCard.tsx` — first-chapter "Back to intro" CTA
- `src/lib/download-resume.ts` — new PDF helper
- `package.json` — add `html2canvas`, `jspdf`

## Out of scope

- Any layout redesign of intro/journey/résumé.
- Server-side PDF generation.
- Changes to bottom-nav Prev/Next behavior.

Approve and I'll build in this order: data → languages → PDF download → first-chapter CTA → mobile smoke-test.
