import test from 'node:test';
import assert from 'node:assert/strict';
import {
  shopHero,
  cafeSection,
  beanSection,
  shopClosingCta,
} from './shop.content.mjs';

test('shop hero uses a more specific title than the generic shop label', () => {
  assert.notEqual(shopHero.title, 'Shop');
  assert.match(shopHero.title, /cup|cafe|menu|beans|home/i);
});

test('cafe section clearly prioritizes the in-cafe menu', () => {
  const combinedCopy = [cafeSection.eyebrow, cafeSection.title, cafeSection.body].join(' ');

  assert.match(combinedCopy, /cafe|menu|drink|dine/i);
});

test('bean section frames products as take-home continuation', () => {
  const combinedCopy = [beanSection.eyebrow, beanSection.title, beanSection.body].join(' ');

  assert.match(combinedCopy, /home|take-home|ritual|beans/i);
});

test('closing CTA supports both visiting and exploring beans', () => {
  assert.equal(shopClosingCta.links.length, 2);
  assert.ok(shopClosingCta.links.some((link) => link.href === '/locations'));
  assert.ok(shopClosingCta.links.some((link) => link.href === '/shop/ethiopian-yirgacheffe'));
});
