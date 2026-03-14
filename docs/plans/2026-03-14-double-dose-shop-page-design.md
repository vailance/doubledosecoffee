# Double Dose Coffee Shop Page Design

**Goal:** Rebuild the Shop page as a cafe-first editorial browse experience where the dine-in menu leads and packaged beans act as a thoughtful second chapter.

## Direction

The Shop page should no longer feel like a generic retail grid with a menu bolted underneath. The approved direction is an editorial browse hybrid: atmospheric enough to feel on-brand, but structured enough to help people scan categories quickly.

The page should answer two different intents in a clear order:

1. What can I drink or eat in the cafe right now?
2. What can I bring home after the visit?

## Page Structure

### Hero

- Replace the plain "Shop" header with a warmer line that frames the page around drinking now and bringing beans home later.
- Keep the existing visual language from the homepage and About page.

### Cafe-First Menu Section

- Lead with the cafe menu as the primary content.
- Present it in a way that feels premium and practical at the same time.
- Make categories easy to scan without losing warmth.

### Menu Rhythm / Highlights

- Use editorial framing copy and possibly a few spotlight notes to give the menu more life.
- Keep the menu useful first and decorative second.

### Take-Home Beans Section

- Position packaged beans as an extension of the in-cafe ritual.
- Make this section clearly secondary but still premium.

### Closing CTA

- End with an invitation to visit the cafe or explore a specific bean.

## Visual Direction

- Reuse the cinematic motion language already established.
- Use layered surfaces, warm highlights, and strong typography.
- Keep menu cards clean and readable.

## Accessibility and Motion

- Respect `prefers-reduced-motion`.
- Preserve scanning clarity in the menu section.
- Maintain strong contrast in all price and category labels.

## Files Expected To Change

- `src/app/shop/page.tsx`
- `src/components/shop/*`
- `docs/plans/*`

## Notes

Do not invent unavailable ordering flows or fake purchasing capabilities. The page should reflect the current static site behavior and existing data.
