# Double Dose Partnerships Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the Partnerships page into a retail-first B2B page with clearer primary and secondary partnership paths.

**Architecture:** Keep the route file small and move the page experience into a dedicated client component so it can share the site’s motion and editorial layout system. Store the retail-first framing and CTA content in a small content module with Node tests so the page remains aligned with the approved direction.

**Tech Stack:** Next.js App Router, React 19, Tailwind CSS 4, Framer Motion, Node test runner

---

### Task 1: Document the approved design

**Files:**
- Create: `docs/plans/2026-03-14-double-dose-partnerships-page-design.md`
- Create: `docs/plans/2026-03-14-double-dose-partnerships-page.md`

**Step 1: Save the validated design**

Write the retail-first direction, page sections, and accessibility rules.

**Step 2: Save the implementation plan**

Describe the component split, tested content module, and verification commands.

### Task 2: Add a tested Partnerships content module

**Files:**
- Create: `src/components/partnerships/partnerships.content.mjs`
- Create: `src/components/partnerships/partnerships.content.test.mjs`

**Step 1: Write the failing test**

Add Node tests for:
- a hero headline that is not the generic string "Partnerships"
- primary framing that clearly prioritizes retail or stockists
- secondary paths that mention wholesale and collaborations
- a CTA that points to the partnership email path

**Step 2: Run test to verify it fails**

Run: `node --test src/components/partnerships/partnerships.content.test.mjs`

Expected: FAIL because the content module does not exist yet.

**Step 3: Write minimal implementation**

Add the content module with hero copy, partnership paths, benefits, and CTA copy.

**Step 4: Run test to verify it passes**

Run: `node --test src/components/partnerships/partnerships.content.test.mjs`

Expected: PASS.

### Task 3: Build the retail-first Partnerships page

**Files:**
- Create: `src/components/partnerships/PartnershipsPageContent.tsx`
- Modify: `src/app/partnerships/page.tsx`

**Step 1: Implement the client component**

Use the approved content module and shared motion helpers to render:
- retail-first hero
- primary stockist framing
- secondary path cards for wholesale and collaborations
- benefits/process section
- closing partnership CTA

**Step 2: Update the route entry**

Make the route render the new Partnerships page component.

### Task 4: Verify the page

**Files:**
- Test: `src/components/partnerships/partnerships.content.test.mjs`

**Step 1: Run the content tests**

Run: `node --test src/components/partnerships/partnerships.content.test.mjs`

Expected: PASS.

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS with no new lint errors.

**Step 3: Run production build**

Run: `npm run build`

Expected: PASS and confirm the Partnerships page compiles successfully.

Plan complete and saved to `docs/plans/2026-03-14-double-dose-partnerships-page.md`. I’m continuing in this session so the approved design can flow straight into implementation.
