import test from 'node:test';
import assert from 'node:assert/strict';
import {
  locationHero,
  quickAccess,
  locationMap,
  locationsClosingCta,
} from './location.content.mjs';

test('locations hero uses a visit-led title instead of a generic label', () => {
  assert.notEqual(locationHero.title, 'Locations');
  assert.match(locationHero.title, /visit|come|find|coffee/i);
});

test('quick-access copy prioritizes directions and opening hours', () => {
  const combinedCopy = [quickAccess.eyebrow, quickAccess.title, quickAccess.body].join(' ');

  assert.match(combinedCopy, /direction|find/i);
  assert.match(combinedCopy, /hours|open/i);
});

test('map embed config uses OpenStreetMap with visible attribution copy', () => {
  assert.match(locationMap.embedUrl, /openstreetmap\.org/i);
  assert.match(locationMap.attribution, /OpenStreetMap/i);
});

test('closing CTA keeps a visit-related next step', () => {
  assert.equal(locationsClosingCta.links.length, 2);
  assert.ok(locationsClosingCta.links.some((link) => link.href === '/shop'));
  assert.ok(locationsClosingCta.links.some((link) => link.href === '/about'));
});
