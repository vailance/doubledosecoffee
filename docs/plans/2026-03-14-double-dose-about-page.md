# Double Dose About Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the About page into a founder-led editorial story for Double Dose Coffee.

**Architecture:** Keep the route file small and move the new About experience into a dedicated client component so the page can share the existing motion language from the homepage. Store the approved story content in a small data module with Node tests so the founder narrative is verified before it is rendered.

**Tech Stack:** Next.js App Router, React 19, Tailwind CSS 4, Framer Motion, Node test runner

---

### Task 1: Document the approved design

**Files:**
- Create: `docs/plans/2026-03-14-double-dose-about-page-design.md`
- Create: `docs/plans/2026-03-14-double-dose-about-page.md`

**Step 1: Save the validated design**

Write the approved founder-led story direction, page sections, and accessibility rules.

**Step 2: Save the implementation plan**

Describe the component split, tested content module, and verification commands.

### Task 2: Add a tested About content module

**Files:**
- Create: `src/components/about/about.content.mjs`
- Create: `src/components/about/about.content.test.mjs`

**Step 1: Write the failing test**

Add Node tests for:
- a hero headline that is not the generic string "About Us"
- story chapters that explicitly mention origin and roast
- brand values that include craft, hospitality, and Melaka identity

**Step 2: Run test to verify it fails**

Run: `node --test src/components/about/about.content.test.mjs`

Expected: FAIL because the content module does not exist yet.

**Step 3: Write minimal implementation**

Add the content module with exported hero copy, story chapters, value cards, and CTA copy.

**Step 4: Run test to verify it passes**

Run: `node --test src/components/about/about.content.test.mjs`

Expected: PASS.

### Task 3: Build the editorial About page component

**Files:**
- Create: `src/components/about/AboutPageContent.tsx`
- Modify: `src/app/about/page.tsx`

**Step 1: Implement the client component**

Use the approved content module plus shared motion utilities to render:
- cinematic hero
- founder origin chapter
- philosophy/value chapter
- Melaka experience chapter
- closing CTA

**Step 2: Update the route entry**

Make the route render the new About page component.

### Task 4: Add any minimal supporting styles

**Files:**
- Modify: `src/app/globals.css`

**Step 1: Add only About-specific surface styles if needed**

Reuse existing homepage classes where possible and add only narrowly scoped styles if the page needs them.

### Task 5: Verify the page

**Files:**
- Test: `src/components/about/about.content.test.mjs`

**Step 1: Run the content tests**

Run: `node --test src/components/about/about.content.test.mjs`

Expected: PASS.

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS with no new lint errors.

**Step 3: Run production build**

Run: `npm run build`

Expected: PASS and confirm the About page compiles successfully.

Plan complete and saved to `docs/plans/2026-03-14-double-dose-about-page.md`. I’m continuing in this session so we can carry the approved design straight into implementation.
