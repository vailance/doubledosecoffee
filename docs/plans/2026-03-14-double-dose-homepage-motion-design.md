# Double Dose Coffee Homepage Motion Design

**Goal:** Add a cinematic, editorial animation layer to the homepage that makes the brand feel premium and tactile without overwhelming the content.

## Direction

The motion language should feel like warm light moving across a coffee bar: slow, restrained, and confident. The homepage already has strong photography, serif display type, and warm neutral tones, so the animation pass should amplify that atmosphere instead of changing the visual system.

The approved direction is a cinematic storytelling approach:

- Hero content enters in a staggered sequence.
- Background media drifts subtly to avoid a static first impression.
- Each major section reveals on scroll with slightly different timing so the page feels authored.
- Product cards gain tactile hover feedback through lift, zoom, and shadow.
- The final newsletter block settles the page with a warmer, calmer reveal.

## Motion Principles

- Animate 1-2 focal elements per viewport, not every node.
- Favor opacity, blur, position, and scale over aggressive rotation or bounce.
- Use longer ambient timings and shorter interactive timings.
- Keep easing soft and natural, leaning on ease-out for entrances.
- Respect `prefers-reduced-motion` by disabling ambient drift and reducing positional travel.

## Section Plan

### Hero

- Stagger the eyebrow, heading, paragraph, and CTAs.
- Add ambient blurred glow layers behind the hero copy.
- Slowly scale the background image to create depth.

### Philosophy Strip

- Reveal the quote and divider with a calm fade and upward motion.
- Treat it as a visual breath between the hero and products.

### Products Preview

- Reveal the section heading first, then stagger the cards.
- Add hover lift, image zoom, and a slight surface shift.
- Preserve legibility and quick scanning.

### Visit Us

- Reveal the image and text on slightly offset timings.
- Keep the motion editorial rather than parallax-heavy.

### Newsletter

- Use a warmer surface treatment with a soft glow.
- Reveal copy and form as the final invitation.

## Accessibility and Performance

- Use reduced-motion-aware motion variants.
- Avoid continuous animation on many elements at once.
- Keep ambient effects CSS-heavy where possible and use Framer Motion where sequencing adds real value.

## Files Expected To Change

- `src/app/page.tsx`
- `src/app/globals.css`
- `src/components/homepage/*`

## Notes

The worktree already contains unrelated user changes, so this design doc is being added without a commit in this session.
