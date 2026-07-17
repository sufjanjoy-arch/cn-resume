
# Storytelling Portfolio — Implementation Plan

A two-page experience: a quiet intro landing that invites the reader in, and a chapter-book career journey where each organization is its own "chapter" with a warm-professional story, expandable detail, and full mobile support. Plus a real fix to the PDF résumé download so colors, fonts, and formatting are preserved.

## Page 1 — Intro Landing (`/`)

Minimal, cinematic, one screen on desktop, tap-friendly on mobile.

```text
┌──────────────────────────────────────────────┐
│                                              │
│   [subtle animated backdrop — sage blobs]    │
│                                              │
│   CHAITRA NAIR                               │
│   HR Business Partner · People Strategy      │
│                                              │
│   [ 7.5+ yrs ]  [ Bangalore, India ]         │
│   [ EN · HI · ML · GU ]                      │
│                                              │
│   Short 2–3 sentence "about me" —            │
│   warm, human, not the full bio.             │
│                                              │
│   [ in ]  [ ✉ ]         [ ↓ Résumé (PDF) ]   │
│                                              │
│              ─────────────                   │
│                                              │
│         Begin the career journey  →          │
│         (animated arrow / draws in)          │
│                                              │
└──────────────────────────────────────────────┘
```

- Name, role tagline, experience badge, location, language chips.
- Short "about" — 2–3 sentences distilled from the current bio (not the full paragraph block).
- LinkedIn + email as icons; Résumé download button.
- A prominent, animated CTA ("Begin the career journey →") that navigates to `/journey`.
- Framer Motion staggered fade-in on load. Reduced-motion respected.

## Page 2 — Career Journey (`/journey`)

Chapter-book format: one organization per "page," advance with next/prev (or swipe on mobile). Ordered chronologically, starting with Skillventory (2018) → Finbox (present).

```text
┌──────────────────────────────────────────────┐
│  ← Back to intro           Chapter 03 / 05   │
│                                              │
│   ECLAT ENGINEERING                          │
│   Human Resource Business Partner            │
│   Apr 2020 – Aug 2024 · 4 yr 5 mo            │
│   Full-time · Remote / Global                │
│                                              │
│   ─── The Story ───                          │
│   A short warm-professional paragraph:       │
│   the org context, what you walked into,     │
│   what you built, what changed. 3–5 lines.   │
│                                              │
│   🛠  [Keka] [PeopleCues] [Zoho]  (chips)    │
│                                              │
│   ▸ Read the full chapter                    │
│   ────────────────────────────────           │
│   (expands smoothly to reveal grouped        │
│    bullets: Strategy · Systems · People ·    │
│    Change · Impact)                          │
│                                              │
│   ←  Prev chapter        Next chapter  →     │
│                                              │
│   ●─●─●─○─○   (chapter progress dots)        │
└──────────────────────────────────────────────┘
```

Key behaviors:
- **One org per view.** Prev/Next buttons + keyboard arrows on desktop; swipe gestures on mobile (Framer Motion `drag`).
- **Story block first** — a fresh 3–5 sentence warm-professional narrative per org that I'll draft from the existing descriptions. User reviews and edits inline via `portfolio-data.ts`.
- **Chapter metadata:** company, role, tenure with auto-computed duration, employment type (full-time / part-time / consultant), location.
- **Tool chips** with logos (Keka, Zoho, PeopleCues, Cursor AI) — carried over from current design.
- **Expand for detail** — "Read the full chapter" opens the categorized bullets (Performance, Systems, Engagement, etc.), grouped from existing `description` text.
- **Chapter dots** at the bottom double as jump-to nav.
- **Page turn animation** — subtle horizontal slide + fade on chapter change; feels like turning a page without being gimmicky.
- **Deep-linkable** — `/journey/finbox`, `/journey/attri`, etc., so a specific chapter can be shared.

## Mobile Design

Not an afterthought — designed for phone first, then scaled up.

- Intro page: single column, generous vertical spacing, CTA is a full-width tappable button.
- Journey page: chapters stack full-screen; swipe left/right to advance; expand section opens as a bottom sheet-style panel; tool chips wrap; navigation dots stay visible above the thumb zone.
- Font sizes reduce sensibly (hero drops from ~64px → ~40px). Touch targets ≥44px. Test in the 375×812 viewport.

## PDF Résumé — Real Fix

Current print CSS strips colors and mangles layout. New approach: **a dedicated print route** rather than fighting the interactive UI's print styles.

- New route `/resume` that renders a purpose-built one-page (or two-page) résumé component in the sage/cream palette, with real print-preserved styling (`-webkit-print-color-adjust: exact; print-color-adjust: exact`), proper A4 layout, and matching fonts (Archivo / Ranade fallbacks).
- The "Résumé" button opens `/resume?print=1`, which auto-triggers the print dialog. Colors, fonts, section dividers, and the sage accent bar all render in the PDF.
- The interactive journey pages no longer need print CSS overrides — they're not what gets printed.

## Story voice (warm-professional)

For each of the five orgs I'll draft a 3–5 sentence chapter opener that:
- Names the context (stage of company, team size, challenge).
- Names what you built or led.
- Ends on the outcome or the shift you drove.

Example tone for Eclat:
> A remote-first engineering company with teams across APAC, Africa, and LATAM — and no unified people function. Over four years I built one: policies for global teams, an OKR-based performance system on PeopleCues, a band-wise competency matrix, and the communication scaffolding around a company-wide ESOP rollout. By the end, HR wasn't a support function — it was part of how the business made decisions.

I'll draft all five, you edit any that don't sound like you.

## Technical Approach

- **Routes:** add `/journey`, `/journey/:companyId`, and `/resume` to `App.tsx`. Intro page becomes a simpler variant of `Hero1Page`.
- **Data:** extend `Experience` type with `story: string`, `employmentType: 'full-time' | 'part-time' | 'consultant'`, and `slug: string`. Fill in `portfolio-data.ts`.
- **Components:**
  - `IntroLanding.tsx` — new landing, replaces current one-page layout on `/`.
  - `JourneyPage.tsx` — chapter-book container with Framer Motion `AnimatePresence`, keyboard + swipe nav, chapter dots.
  - `ChapterCard.tsx` — single org view: story, metadata, tool chips, expandable detail.
  - `ResumePage.tsx` — print-optimized résumé at `/resume`.
- **Retire:** the current horizontal-scroll `WorkSection` (superseded by the journey page). Keep other sections (About/Skills/Education/Contact) reachable — either linked from the intro footer or absorbed into the journey's final "epilogue" chapter (TBD; I'd suggest a small footer on the intro with links).
- **Motion:** Framer Motion for chapter transitions, staggered intro reveal, arrow CTA. Respect `prefers-reduced-motion`.
- **Mobile:** Tailwind responsive breakpoints; swipe via `motion.div` with `drag="x"` and `dragConstraints`; test at 375px width.

## Out of Scope

- Adding new sections not in the current data (writing, speaking, projects remain empty).
- Backend/CMS — content stays in `portfolio-data.ts`.
- Custom illustrations per org (tool logos only, via Clearbit).

## Build Order

1. Add types + story fields to `portfolio-data.ts`; draft five chapter stories.
2. Build `IntroLanding` and wire `/` to it.
3. Build `JourneyPage` + `ChapterCard` with prev/next, keyboard, swipe, expand.
4. Add chapter dots, deep links (`/journey/:slug`), and page-turn animation.
5. Build `/resume` route with real print styling; rewire résumé button.
6. Mobile QA at 375px and 768px via Playwright screenshots.
7. Verify PDF export renders with correct colors and fonts.

Approve and I'll start building.
