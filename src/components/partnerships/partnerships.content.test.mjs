import test from 'node:test';
import assert from 'node:assert/strict';
import {
  partnershipHero,
  partnerPaths,
  partnershipCta,
} from './partnerships.content.mjs';

test('partnership hero uses a more specific title than the generic page label', () => {
  assert.notEqual(partnershipHero.title, 'Partnerships');
  assert.match(partnershipHero.title, /retail|stock|shelf|partner/i);
});

test('partner paths clearly prioritize retail first', () => {
  assert.equal(partnerPaths[0].id, 'retail');
  const combinedCopy = partnerPaths.map((path) => `${path.title} ${path.body}`).join(' ');

  assert.match(combinedCopy, /wholesale/i);
  assert.match(combinedCopy, /collaboration|event/i);
});

test('partnership CTA points to an email inquiry path', () => {
  assert.match(partnershipCta.primaryLink.href, /^mailto:/);
  assert.match(partnershipCta.primaryLink.label, /partner|inquiry|conversation/i);
});
