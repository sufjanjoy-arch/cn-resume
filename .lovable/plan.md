## Polish fixes

### 1. Remove languages chip from intro
`src/pages/IntroLanding.tsx` — delete the pill with "English & Hindi (fluent) · …". Location chip (Bangalore) stays. Data in `portfolio-data.ts` is untouched (still used in the résumé).

### 2. Fix LinkedIn link
URL confirmed correct: `https://www.linkedin.com/in/chaitranair/`. So the URL isn't the issue — the click is being intercepted. In `src/pages/JourneyPage.tsx` the chapter is wrapped in a `motion.div` with `drag="x"`; Framer Motion's drag layer can swallow anchor clicks. On the intro page the anchor is fine, but I'll also verify no overlay covers it.

Fix:
- On `IntroLanding.tsx`, ensure the LinkedIn `<a>` has no ambient blob overlaying it (blobs already have `pointer-events-none` — confirm).
- On `FixedNavbar.tsx`, the LinkedIn `<a>` uses `target="_blank"` and `rel="noopener noreferrer"` — keep as is.
- If clicks still don't fire from within the journey nav, add `onPointerDownCapture={(e) => e.stopPropagation()}` on the LinkedIn anchor so the parent drag handler never claims the gesture.

### 3. Skillventory "Start" button
- **Remove** the "← Back to the start" button inside `src/components/journey/ChapterCard.tsx` (the `index === 0` block).
- **Enable** the bottom-nav prev button in `src/pages/JourneyPage.tsx`: when there is no `prev`, route to `/` instead of `disabled`. Keeps the ← icon and "Start" label. Behavior on other chapters unchanged.

### Out of scope
No visual redesign, no story/content edits, no résumé changes.
