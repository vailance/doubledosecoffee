# Double Dose Journal Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a real Journal with a landing page and six article pages focused on brewing guides and coffee stories.

**Architecture:** Store the launch article set in a local data module that powers both the `/journal` landing page and `/journal/[slug]` routes. Keep the route files lightweight and move rendering into reusable journal components so article metadata, previews, and related links can stay consistent and easy to expand later.

**Tech Stack:** Next.js App Router, React 19, Tailwind CSS 4, Framer Motion, Node test runner

---

### Task 1: Document the approved design

**Files:**
- Create: `docs/plans/2026-03-14-double-dose-journal-design.md`
- Create: `docs/plans/2026-03-14-double-dose-journal.md`

**Step 1: Save the validated design**

Write the editorial knowledge-hub direction, content mix, and SEO approach.

**Step 2: Save the implementation plan**

Describe the article data layer, dynamic article pages, and verification commands.

### Task 2: Add a tested Journal article data module

**Files:**
- Create: `src/data/journal.mjs`
- Create: `src/data/journal.test.mjs`

**Step 1: Write the failing test**

Add Node tests for:
- exactly six launch articles
- a balanced split between `Brewing Guides` and `Coffee Stories`
- unique slugs and featured article selection
- each article containing SEO-friendly title, excerpt, and section content

**Step 2: Run test to verify it fails**

Run: `node --test src/data/journal.test.mjs`

Expected: FAIL because the article data module does not exist yet.

**Step 3: Write minimal implementation**

Add the article data module with six authored entries, helpers for lookup, and one featured article.

**Step 4: Run test to verify it passes**

Run: `node --test src/data/journal.test.mjs`

Expected: PASS.

### Task 3: Build the Journal landing page

**Files:**
- Create: `src/components/journal/JournalPageContent.tsx`
- Modify: `src/app/journal/page.tsx`

**Step 1: Implement the landing page**

Use the article data to render:
- Journal hero
- featured article
- category framing
- article card grid

**Step 2: Update route metadata and route entry**

Make the route render the new Journal page and improve metadata for discovery.

### Task 4: Build the article detail pages

**Files:**
- Create: `src/components/journal/JournalArticlePage.tsx`
- Create: `src/app/journal/[slug]/page.tsx`

**Step 1: Implement static params and metadata**

Generate pages from the article data and add per-article metadata.

**Step 2: Render long-form article pages**

Render article hero, body sections, related links, and internal next steps.

### Task 5: Verify the Journal

**Files:**
- Test: `src/data/journal.test.mjs`

**Step 1: Run the article-data tests**

Run: `node --test src/data/journal.test.mjs`

Expected: PASS.

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS with no new lint errors.

**Step 3: Run production build**

Run: `npm run build`

Expected: PASS and confirm the Journal landing page plus article routes compile successfully.

Plan complete and saved to `docs/plans/2026-03-14-double-dose-journal.md`. I’m continuing in this session so the approved design can flow straight into implementation.
