# Double Dose Coffee Journal Design

**Goal:** Transform the Journal into an editorial knowledge hub with real article pages, useful brewing content, stronger brand voice, and solid SEO foundations.

## Direction

The approved direction is an editorial knowledge hub. The Journal should feel genuinely useful for coffee readers while still sounding like Double Dose. It should not read like a content farm or a generic corporate blog. The page needs to balance two content types from launch:

1. Brewing guides
2. Coffee stories and educational articles

The first release should include six articles in total, with a balanced split between the two categories.

## Information Architecture

### Journal Landing Page

- Introduce the Journal as a place for brewing guides and coffee stories.
- Feature one lead article prominently.
- Present the rest of the launch articles through category-aware cards.
- Use clear summaries and metadata for scannability.

### Article Pages

- Live under `/journal/[slug]`.
- Include full article content, metadata, and related links.
- Support SEO with strong titles, summaries, headings, and internal linking.

## Content Strategy

### Brewing Guides

- Target useful reader intent with practical, search-friendly topics.
- Use direct titles and readable structure.
- Keep advice concrete and beginner-friendly.

### Coffee Stories

- Broaden the Journal with educational and culture-oriented pieces.
- Help make the publication feel credible and brand-led rather than purely utilitarian.

## SEO Direction

- Use real article pages with unique metadata.
- Add article excerpts, keywords in natural language, clear H1/H2 structure, and related-post links.
- Make the Journal landing page internally link to all article pages.

## Visual Direction

- Keep the page aligned with the cinematic editorial language already established.
- Use strong typography, deliberate card hierarchy, and warm surfaces.
- Prioritize readability over visual novelty inside long-form articles.

## Files Expected To Change

- `src/app/journal/page.tsx`
- `src/app/journal/[slug]/page.tsx`
- `src/components/journal/*`
- `src/data/journal.*`
- `docs/plans/*`

## Notes

The initial article set should be locally authored content in the repo so the Journal launches as a complete, indexable section without requiring a CMS.
