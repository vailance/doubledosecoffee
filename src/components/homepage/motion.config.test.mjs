import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createRevealVariants,
  createStagger,
  viewportOnce,
} from './motion.config.mjs';

test('createRevealVariants adds upward travel when motion is enabled', () => {
  const variants = createRevealVariants(false, 24);

  assert.deepEqual(variants.hidden, {
    opacity: 0,
    y: 24,
    filter: 'blur(10px)',
  });
  assert.equal(variants.visible.transition.duration, 0.72);
});

test('createRevealVariants removes travel when reduced motion is enabled', () => {
  const variants = createRevealVariants(true, 24);

  assert.deepEqual(variants.hidden, {
    opacity: 0,
    y: 0,
    filter: 'blur(0px)',
  });
  assert.equal(variants.visible.transition.duration, 0.01);
});

test('createStagger returns a visible transition with the provided stagger', () => {
  const stagger = createStagger(0.12, 0.16);

  assert.equal(stagger.visible.transition.staggerChildren, 0.12);
  assert.equal(stagger.visible.transition.delayChildren, 0.16);
});

test('viewportOnce keeps scroll reveals one-shot', () => {
  assert.deepEqual(viewportOnce, {
    once: true,
    amount: 0.25,
  });
});
