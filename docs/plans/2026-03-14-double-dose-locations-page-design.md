# Double Dose Coffee Locations Page Design

**Goal:** Rebuild the Locations page as a warm, practical visit page with clear directions, opening hours, and an embedded OpenStreetMap view inside the site.

## Direction

The Locations page should feel more inviting than a utility page, but it still needs to answer practical questions immediately. The approved direction is a warm practical hybrid: brand-led enough to feel like part of the wider site, but structured around two top user needs first:

1. Get directions
2. Check opening hours

## Page Structure

### Hero

- Replace the plain "Locations" header with a more welcoming visit-focused statement.
- Keep the existing cinematic brand language while staying practical.

### Quick Access Band

- Surface address, opening-hours summary, and directions immediately.
- Make the two primary actions easy to find without scrolling.

### Main Location Detail

- Present contact details and full weekly hours in a stronger editorial layout.
- Treat the space as a destination, not just a data block.

### Embedded Map

- Replace the placeholder map area with an OpenStreetMap embed inside the page.
- Keep required attribution visible but visually integrated.
- Use the user-provided Google Maps link as the external directions destination.

### Closing CTA

- Offer a next step such as browsing the cafe menu or beans after the visit info.

## Visual Direction

- Reuse the shared motion and visual language from the homepage, About page, and Shop page.
- Use layered surfaces, warm highlights, and generous spacing.
- Keep the hours and address blocks highly legible.

## Accessibility and Motion

- Respect `prefers-reduced-motion`.
- Ensure the map is labeled and keyboard-accessible through surrounding links.
- Preserve strong contrast in contact and hours information.

## Files Expected To Change

- `src/app/locations/page.tsx`
- `src/components/locations/*`
- `src/data/locations.ts`
- `src/types/index.ts`
- `docs/plans/*`

## Notes

OpenStreetMap attribution cannot be removed entirely. It should remain visible in a clean, unobtrusive way consistent with the rest of the page.
