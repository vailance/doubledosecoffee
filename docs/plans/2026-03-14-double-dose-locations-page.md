# Double Dose Locations Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the Locations page into a visit-first page with clearer practical info and an embedded OpenStreetMap view.

**Architecture:** Keep the route file small and move the page experience into a dedicated client component so the layout can reuse the site’s motion language. Store the page framing copy and map embed config in a small content module with Node tests, and update the location data model to carry the coordinates and external directions URL as the source of truth.

**Tech Stack:** Next.js App Router, React 19, Tailwind CSS 4, Framer Motion, Node test runner

---

### Task 1: Document the approved design

**Files:**
- Create: `docs/plans/2026-03-14-double-dose-locations-page-design.md`
- Create: `docs/plans/2026-03-14-double-dose-locations-page.md`

**Step 1: Save the validated design**

Write the visit-first layout, OSM map embed decision, and accessibility rules.

**Step 2: Save the implementation plan**

Describe the component split, tested content/map config module, and verification commands.

### Task 2: Add a tested Locations content/map module

**Files:**
- Create: `src/components/locations/location.content.mjs`
- Create: `src/components/locations/location.content.test.mjs`

**Step 1: Write the failing test**

Add Node tests for:
- a hero headline that is not the generic string "Locations"
- quick-access copy that prioritizes directions and hours
- an embed URL that uses `openstreetmap.org`
- visible attribution copy that mentions OpenStreetMap

**Step 2: Run test to verify it fails**

Run: `node --test src/components/locations/location.content.test.mjs`

Expected: FAIL because the content module does not exist yet.

**Step 3: Write minimal implementation**

Add the content module with hero copy, quick-access framing, map config, and CTA copy.

**Step 4: Run test to verify it passes**

Run: `node --test src/components/locations/location.content.test.mjs`

Expected: PASS.

### Task 3: Update the location data model

**Files:**
- Modify: `src/types/index.ts`
- Modify: `src/data/locations.ts`

**Step 1: Add coordinates and use the new Google Maps link**

Store latitude/longitude needed for the OSM embed and replace the old map URL with the user-provided Google Maps link.

### Task 4: Build the visit-first Locations page

**Files:**
- Create: `src/components/locations/LocationsPageContent.tsx`
- Modify: `src/app/locations/page.tsx`

**Step 1: Implement the client component**

Use the approved content module, updated location data, and shared motion helpers to render:
- cinematic hero
- quick-access visit details
- contact and weekly-hours layout
- embedded OpenStreetMap section
- closing CTA

**Step 2: Update the route entry**

Make the route render the new Locations page component.

### Task 5: Verify the page

**Files:**
- Test: `src/components/locations/location.content.test.mjs`

**Step 1: Run the content tests**

Run: `node --test src/components/locations/location.content.test.mjs`

Expected: PASS.

**Step 2: Run lint**

Run: `npm run lint`

Expected: PASS with no new lint errors.

**Step 3: Run production build**

Run: `npm run build`

Expected: PASS and confirm the Locations page compiles successfully.

Plan complete and saved to `docs/plans/2026-03-14-double-dose-locations-page.md`. I’m continuing in this session so the approved design can flow straight into implementation.
