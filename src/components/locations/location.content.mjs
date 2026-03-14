const LATITUDE = 2.20846;
const LONGITUDE = 102.2430154;
const LAT_DELTA = 0.004;
const LNG_DELTA = 0.0065;

const left = LONGITUDE - LNG_DELTA;
const right = LONGITUDE + LNG_DELTA;
const top = LATITUDE + LAT_DELTA;
const bottom = LATITUDE - LAT_DELTA;

export const locationHero = {
  eyebrow: 'Visit Double Dose Coffee',
  title: 'Come by for coffee, stay because getting here feels easy.',
  intro:
    'Whether you are planning a quick stop or a slower visit, this page is here to make the practical details simple: where we are, when we are open, and how to find the space in Melaka.',
};

export const quickAccess = {
  eyebrow: 'Plan the visit',
  title: 'Directions and opening hours, right where you need them.',
  body:
    'The page is built around the two things people usually need first: how to find Double Dose Coffee and what time to come by.',
};

export const locationMap = {
  embedUrl: `https://www.openstreetmap.org/export/embed.html?bbox=${left}%2C${bottom}%2C${right}%2C${top}&layer=mapnik&marker=${LATITUDE}%2C${LONGITUDE}`,
  attribution: 'Map data © OpenStreetMap contributors',
};

export const locationsClosingCta = {
  eyebrow: 'Before or after the visit',
  title: 'See what is on the menu, or get to know the brand a little better.',
  body:
    'If you are planning your first stop at Double Dose, you can head to the menu next or read more about what shapes the brand before you arrive.',
  links: [
    { href: '/shop', label: 'Browse the menu' },
    { href: '/about', label: 'Read our story' },
  ],
};
