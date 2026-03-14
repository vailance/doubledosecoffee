# Double Dose Shop Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the Shop page into a cafe-first editorial browse page with a secondary take-home beans section.

**Architecture:** Keep the route file small and move the Shop experience into a dedicated client component so the page can share the site’s motion system and visual language. Store the framing copy in a small content module with Node tests so the page remains anchored in the approved cafe-first strategy.

**Tech Stack:** Next.js App Router, React 19, Tailwind CSS 4, Framer Motion, Node test runner

---

### Task 1: Document the approved design

**Files:**
- Create: `docs/plans/2026-03-14-double-dose-shop-page-design.md`
- Create: `docs/plans/2026-03-14-double-dose-shop-page.md`

**Step 1: Save the validated design**

Write the cafe-first editorial browse direction, the page sections, and the accessibility rules.

**Step 2: Save the implementation plan**

Describe the component split, tested content module, and verification commands.

### Task 2: Add a tested Shop content module

**Files:**
- Create: `src/components/shop/shop.content.mjs`
- Create: `src/components/shop/shop.content.test.mjs`

**Step 1: Write the failing test**

Add Node tests for:
- a hero headline that is not the generic string "Shop"
- primary section framing that explicitly prioritizes the cafe menu
- secondary section framing that positions beans as take-home
- closing CTA links for visiting or exploring beans

**Step 2: Run test to verify it fails**

Run: `node --test src/components/shop/shop.content.test.mjs`

Expected: FAIL because the content module does not exist yet.

**Step 3: Write minimal implementation**

Add the content module with hero copy, menu framing, bean framing, and CTA copy.

**Step 4: Run test to verify it passes**

Run: `node --test src/components/shop/shop.content.test.mjs`

Expected: PASS.

### Task 3: Build the editorial Shop page component

**Files:**
- Create: `src/components/shop/ShopPageContent.tsx`
- Modify: `src/app/shop/page.tsx`

**Step 1: Implement the client component**

Use the approved content module, menu data, product data, and shared motion helpers to render:
- cinematic hero
- cafe-first menu introduction
- readable menu category cards
- secondary take-home bean section
- closing CTA

**Step 2: Update the route entry**

Make the route render the new Shop page component.

### Task 4: Verify the page

**Files:**
- Test: `src/components/shop/shop.content.test.mjs`

**Step 1: Run the content tests**

Run: `node --test src/components/shop/shop.content.test.mjs`

Expected: PASS.

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS with no new lint errors.

**Step 3: Run production build**

Run: `npm run build`

Expected: PASS and confirm the Shop page compiles successfully.

Plan complete and saved to `docs/plans/2026-03-14-double-dose-shop-page.md`. I’m continuing in this session so the approved design can flow straight into implementation.
