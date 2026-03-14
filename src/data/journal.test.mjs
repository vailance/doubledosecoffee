import test from 'node:test';
import assert from 'node:assert/strict';
import {
  featuredJournalSlug,
  getJournalArticleBySlug,
  journalArticles,
} from './journal.mjs';

test('journal launches with exactly six articles', () => {
  assert.equal(journalArticles.length, 6);
});

test('journal has a balanced mix of brewing guides and coffee stories', () => {
  const categoryCounts = journalArticles.reduce((acc, article) => {
    acc[article.category] = (acc[article.category] ?? 0) + 1;
    return acc;
  }, {});

  assert.equal(categoryCounts['Brewing Guides'], 3);
  assert.equal(categoryCounts['Coffee Stories'], 3);
});

test('journal slugs are unique and the featured slug resolves to an article', () => {
  const slugs = journalArticles.map((article) => article.slug);
  assert.equal(new Set(slugs).size, slugs.length);
  assert.ok(getJournalArticleBySlug(featuredJournalSlug));
});

test('every article has SEO-friendly title, excerpt, and sections', () => {
  for (const article of journalArticles) {
    assert.ok(article.title.length > 20);
    assert.ok(article.excerpt.length > 60);
    assert.ok(article.sections.length >= 3);
  }
});
