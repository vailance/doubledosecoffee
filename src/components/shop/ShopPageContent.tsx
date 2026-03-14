'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Dot } from 'lucide-react';
import { products } from '@/data/products';
import { menuCategories } from '@/data/menu';
import { createRevealVariants, createStagger, viewportOnce } from '@/components/homepage/motion.config.mjs';
import {
  beanSection,
  cafeSection,
  shopClosingCta,
  shopHero,
} from './shop.content.mjs';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80';

export default function ShopPageContent() {
  const reduceMotion = useReducedMotion();
  const heroReveal = createRevealVariants(Boolean(reduceMotion), 40) as Variants;
  const sectionReveal = createRevealVariants(Boolean(reduceMotion), 28) as Variants;
  const cardReveal = createRevealVariants(Boolean(reduceMotion), 22) as Variants;
  const heroStagger = createStagger(reduceMotion ? 0 : 0.14, 0.08) as Variants;
  const contentStagger = createStagger(reduceMotion ? 0 : 0.1, 0.04) as Variants;

  const featuredCategories = menuCategories.slice(0, 3);
  const remainingCategories = menuCategories.slice(3);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-stone-950 text-white">
        <motion.div
          className="absolute inset-0"
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.07],
                  x: [0, 10, -6, 0],
                  y: [0, -12, 8, 0],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 20,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                }
          }
        >
          <Image
            src={HERO_IMAGE}
            alt="Double Dose Coffee bar and menu atmosphere"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(12,10,9,0.92),rgba(12,10,9,0.6)_45%,rgba(120,53,15,0.52))]" />
        <div className="hero-grain absolute inset-0 opacity-70" />
        <div className="ambient-orb absolute left-0 top-24 h-56 w-56 rounded-full bg-amber-300/18 blur-3xl" />
        <div className="ambient-orb ambient-orb-delay absolute right-10 top-16 h-72 w-72 rounded-full bg-orange-400/14 blur-3xl" />

        <div className="relative container mx-auto px-6 py-28 md:py-36">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            variants={heroStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={heroReveal}
              className="mb-6 text-xs uppercase tracking-[0.42em] text-amber-100/80"
            >
              {shopHero.eyebrow}
            </motion.p>
            <motion.h1
              variants={heroReveal}
              className="mx-auto max-w-4xl text-5xl font-bold leading-[0.92] tracking-[-0.04em] text-white md:text-7xl lg:text-[5.8rem]"
            >
              {shopHero.title}
            </motion.h1>
            <motion.p
              variants={heroReveal}
              className="mx-auto mt-8 max-w-2xl text-base leading-8 text-stone-200 md:text-lg"
            >
              {shopHero.intro}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="radial-warm-surface overflow-hidden py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={contentStagger}
          >
            <motion.p
              variants={sectionReveal}
              className="mb-3 text-xs uppercase tracking-[0.38em] text-accent"
            >
              {cafeSection.eyebrow}
            </motion.p>
            <motion.h2
              variants={sectionReveal}
              className="text-4xl font-bold text-stone-900 md:text-5xl"
            >
              {cafeSection.title}
            </motion.h2>
            <motion.p
              variants={sectionReveal}
              className="mt-6 text-base leading-8 text-stone-600"
            >
              {cafeSection.body}
            </motion.p>
          </motion.div>

          <motion.div
            className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-full border border-stone-200 bg-white/80 px-6 py-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={contentStagger}
          >
            {cafeSection.highlights.map((highlight) => (
              <motion.div
                key={highlight}
                variants={sectionReveal}
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-stone-600"
              >
                <Dot className="h-4 w-4 text-accent" />
                {highlight}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mx-auto mt-16 grid max-w-6xl gap-6 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={contentStagger}
          >
            {featuredCategories.map((category) => (
              <motion.article
                key={category.name}
                variants={cardReveal}
                className="editorial-panel rounded-[2rem] border border-stone-200/80 p-8"
              >
                <p className="text-xs uppercase tracking-[0.34em] text-accent">Featured category</p>
                <h3 className="mt-4 text-2xl font-semibold text-stone-900">{category.name}</h3>
                <ul className="mt-6 space-y-4">
                  {category.items.slice(0, 5).map((item) => (
                    <li key={`${category.name}-${item.id}`} className="flex items-start justify-between gap-4 border-b border-stone-200/70 pb-4">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-stone-900">{item.name}</p>
                        {item.note && <p className="mt-1 text-xs text-stone-500">{item.note}</p>}
                      </div>
                      <span className="shrink-0 text-sm font-medium tabular-nums text-stone-900">
                        RM{item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="mx-auto mt-8 grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={contentStagger}
          >
            {remainingCategories.map((category) => (
              <motion.article
                key={category.name}
                variants={cardReveal}
                className="rounded-[1.75rem] border border-stone-200 bg-white p-7"
              >
                <h3 className="border-b border-stone-200 pb-4 text-lg font-semibold text-stone-900">
                  {category.name}
                </h3>
                <ul className="mt-5 space-y-3.5">
                  {category.items.map((item) => (
                    <li key={`${category.name}-${item.id}`} className="flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-stone-800">{item.name}</p>
                        {item.note && <p className="mt-0.5 text-xs text-stone-400">{item.note}</p>}
                      </div>
                      <span className="shrink-0 text-sm font-medium tabular-nums text-stone-900">
                        RM{item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={contentStagger}
          >
            <motion.p
              variants={sectionReveal}
              className="mb-3 text-xs uppercase tracking-[0.38em] text-accent"
            >
              {beanSection.eyebrow}
            </motion.p>
            <motion.h2
              variants={sectionReveal}
              className="text-4xl font-bold text-stone-900 md:text-5xl"
            >
              {beanSection.title}
            </motion.h2>
            <motion.p
              variants={sectionReveal}
              className="mt-6 text-base leading-8 text-stone-600"
            >
              {beanSection.body}
            </motion.p>
          </motion.div>

          <motion.div
            className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={contentStagger}
          >
            {products.map((product) => (
              <motion.div key={product.slug} variants={cardReveal}>
                <Link
                  href={`/shop/${product.slug}`}
                  className="group editorial-panel card-sheen block cursor-pointer rounded-[2rem] border border-stone-200/80 p-4 transition-transform duration-300 hover:-translate-y-2 motion-reduce:transform-none"
                  aria-label={`${product.name} from ${product.origin}, ${product.roastType} roast, from RM${product.pricing.size250g}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-stone-200">
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 motion-reduce:transform-none"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] uppercase tracking-[0.22em] text-stone-900">
                      {product.roastType}
                    </span>
                  </div>
                  <div className="px-2 pb-2 pt-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-stone-500">{product.origin}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-stone-900 transition-colors duration-300 group-hover:text-accent">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-stone-600">
                      {product.description}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-stone-200/80 pt-5">
                      <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-900">
                        RM{product.pricing.size250g} / RM{product.pricing.size500g}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-accent">
                        View bean
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-stone-950 py-24 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="editorial-panel relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 px-8 py-14 md:px-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={contentStagger}
          >
            <div className="ambient-orb absolute -left-6 bottom-0 h-44 w-44 rounded-full bg-amber-300/22 blur-3xl" />
            <div className="ambient-orb ambient-orb-delay absolute right-0 top-0 h-52 w-52 rounded-full bg-orange-300/18 blur-3xl" />
            <motion.p
              variants={sectionReveal}
              className="relative mb-3 text-xs uppercase tracking-[0.38em] text-accent"
            >
              {shopClosingCta.eyebrow}
            </motion.p>
            <motion.h2
              variants={sectionReveal}
              className="relative max-w-3xl text-3xl font-bold text-stone-900 md:text-5xl"
            >
              {shopClosingCta.title}
            </motion.h2>
            <motion.p
              variants={sectionReveal}
              className="relative mt-5 max-w-2xl text-base leading-8 text-stone-600"
            >
              {shopClosingCta.body}
            </motion.p>
            <motion.div
              variants={sectionReveal}
              className="relative mt-10 flex flex-col gap-4 sm:flex-row"
            >
              {shopClosingCta.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-stone-900 px-7 py-4 text-sm font-medium uppercase tracking-[0.24em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent motion-reduce:transform-none first:bg-stone-900 last:border last:border-stone-300 last:bg-white/80 last:text-stone-900 last:hover:border-accent last:hover:text-accent"
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
