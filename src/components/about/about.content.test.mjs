import test from 'node:test';
import assert from 'node:assert/strict';
import {
  aboutHero,
  storyChapters,
  brandValues,
  aboutClosingCta,
} from './about.content.mjs';

test('about hero uses a founder-led headline instead of a generic title', () => {
  assert.notEqual(aboutHero.title, 'About Us');
  assert.match(aboutHero.title, /cup|coffee|ritual|roast/i);
});

test('story chapters explicitly anchor the brand in origin and roast curiosity', () => {
  const combinedCopy = storyChapters.map((chapter) => chapter.body).join(' ');

  assert.match(combinedCopy, /origin/i);
  assert.match(combinedCopy, /roast/i);
});

test('brand values express craft, hospitality, and Melaka identity', () => {
  const combinedCopy = brandValues
    .flatMap((value) => [value.title, value.body])
    .join(' ');

  assert.match(combinedCopy, /craft|detail|brewing/i);
  assert.match(combinedCopy, /welcome|warm|hospitality/i);
  assert.match(combinedCopy, /Melaka/i);
});

test('closing CTA invites people into the brand experience', () => {
  assert.match(aboutClosingCta.title, /visit|pour|cup|space/i);
  assert.ok(aboutClosingCta.primaryLink.href.length > 1);
});
