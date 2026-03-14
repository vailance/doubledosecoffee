# Double Dose Homepage Motion Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a cinematic, reduced-motion-aware animation pass to the Double Dose Coffee homepage.

**Architecture:** Keep `src/app/page.tsx` as a lightweight route entry and move the animated homepage UI into client-side homepage components. Centralize repeatable motion timing and reduced-motion behavior in a small utility module so both implementation and verification share the same source of truth.

**Tech Stack:** Next.js App Router, React 19, Tailwind CSS 4, Framer Motion, Node test runner

---

### Task 1: Document the approved motion direction

**Files:**
- Create: `docs/plans/2026-03-14-double-dose-homepage-motion-design.md`
- Create: `docs/plans/2026-03-14-double-dose-homepage-motion.md`

**Step 1: Write the approved design summary**

Capture the cinematic storytelling direction, section-by-section behavior, and reduced-motion rules.

**Step 2: Save the implementation plan**

Describe the homepage component split, motion utility, and verification commands.

### Task 2: Add a tested homepage motion utility

**Files:**
- Create: `src/components/homepage/motion.config.mjs`
- Create: `src/components/homepage/motion.config.test.mjs`

**Step 1: Write the failing test**

Add Node tests for:
- `createRevealVariants(false)` using upward travel and fade
- `createRevealVariants(true)` removing travel
- `createStagger(0.12)` returning a stagger transition

**Step 2: Run test to verify it fails**

Run: `node --test src/components/homepage/motion.config.test.mjs`

Expected: FAIL because the utility module does not exist yet.

**Step 3: Write minimal implementation**

Add the motion utility with reusable reveal and stagger helpers and shared viewport settings.

**Step 4: Run test to verify it passes**

Run: `node --test src/components/homepage/motion.config.test.mjs`

Expected: PASS.

### Task 3: Build the animated homepage client component

**Files:**
- Create: `src/components/homepage/HomePage.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Write the failing test**

Not practical with the current repo tooling because there is no component test harness or browser test setup for visual motion behavior.

**Step 2: Implement the homepage component**

Move the homepage markup into a client component that:
- uses Framer Motion with the shared motion utility
- animates the hero, quote strip, product cards, visit section, and newsletter block
- uses `useReducedMotion()` to disable ambient drift when requested

**Step 3: Update the route entry**

Make `src/app/page.tsx` render the new homepage component.

### Task 4: Add supporting surface and ambience styles

**Files:**
- Modify: `src/app/globals.css`

**Step 1: Add lightweight utility classes**

Add the warm glow, grain, radial surface, and reduced-motion-safe ambient styles used by the homepage.

**Step 2: Keep the styles scoped and performant**

Avoid changing the global visual language outside the new homepage classes.

### Task 5: Verify the feature

**Files:**
- Test: `src/components/homepage/motion.config.test.mjs`
- Test: homepage build and lint paths

**Step 1: Run the targeted motion tests**

Run: `node --test src/components/homepage/motion.config.test.mjs`

Expected: PASS.

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS with no new lint errors from the homepage changes.

**Step 3: Run production build**

Run: `npm run build`

Expected: PASS and confirm the homepage compiles successfully.

Plan complete and saved to `docs/plans/2026-03-14-double-dose-homepage-motion.md`. I’m proceeding in this session with the implementation path so we can keep momentum.
