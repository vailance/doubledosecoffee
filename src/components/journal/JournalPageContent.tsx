'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { createRevealVariants, createStagger, viewportOnce } from '@/components/homepage/motion.config.mjs';

type JournalArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  image: string;
  imageAlt: string;
};

type Props = {
  articles: JournalArticle[];
  featuredSlug: string;
};

function formatDisplayDate(date: string) {
  return new Intl.DateTimeFormat('en-MY', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}

export default function JournalPageContent({ articles, featuredSlug }: Props) {
  const reduceMotion = useReducedMotion();
  const heroReveal = createRevealVariants(Boolean(reduceMotion), 40) as Variants;
  const sectionReveal = createRevealVariants(Boolean(reduceMotion), 28) as Variants;
  const cardReveal = createRevealVariants(Boolean(reduceMotion), 22) as Variants;
  const heroStagger = createStagger(reduceMotion ? 0 : 0.14, 0.08) as Variants;
  const contentStagger = createStagger(reduceMotion ? 0 : 0.1, 0.04) as Variants;

  const featuredArticle = articles.find((article) => article.slug === featuredSlug) ?? articles[0];
  const remainingArticles = articles.filter((article) => article.slug !== featuredArticle.slug);
  const brewingGuides = remainingArticles.filter((article) => article.category === 'Brewing Guides');
  const coffeeStories = remainingArticles.filter((article) => article.category === 'Coffee Stories');

  return (
    <>
      <section className="relative isolate overflow-hidden bg-stone-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.16),transparent_30%),linear-gradient(145deg,rgba(12,10,9,0.94),rgba(12,10,9,0.68)_45%,rgba(120,53,15,0.5))]" />
        <div className="hero-grain absolute inset-0 opacity-70" />
        <div className="ambient-orb absolute left-0 top-20 h-56 w-56 rounded-full bg-amber-300/18 blur-3xl" />
        <div className="ambient-orb ambient-orb-delay absolute right-8 top-14 h-72 w-72 rounded-full bg-orange-400/12 blur-3xl" />

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
              Brewing Guides and Coffee Stories
            </motion.p>
            <motion.h1
              variants={heroReveal}
              className="mx-auto max-w-4xl text-5xl font-bold leading-[0.92] tracking-[-0.04em] text-white md:text-7xl lg:text-[5.8rem]"
            >
              A Journal for better brews, sharper questions, and deeper coffee curiosity.
            </motion.h1>
            <motion.p
              variants={heroReveal}
              className="mx-auto mt-8 max-w-2xl text-base leading-8 text-stone-200 md:text-lg"
            >
              The Double Dose Journal is where practical brewing advice meets the bigger stories
              behind coffee: origin, roast, ritual, and the details that make the cup more memorable.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="radial-warm-surface py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={contentStagger}
            className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]"
          >
            <motion.div variants={cardReveal} className="relative overflow-hidden rounded-[2rem] bg-stone-900">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.imageAlt}
                width={1400}
                height={900}
                className="aspect-[5/4] h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/92 via-stone-950/28 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <p className="text-xs uppercase tracking-[0.32em] text-amber-200/80">Featured article</p>
                <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-white md:text-4xl">
                  {featuredArticle.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-stone-200">
                  {featuredArticle.excerpt}
                </p>
                <div className="mt-5 flex flex-wrap gap-4 text-sm uppercase tracking-[0.22em] text-stone-300">
                  <span>{featuredArticle.category}</span>
                  <span>{formatDisplayDate(featuredArticle.publishedAt)}</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <Link
                  href={`/journal/${featuredArticle.slug}`}
                  className="group mt-7 inline-flex cursor-pointer items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium uppercase tracking-[0.22em] text-stone-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-100 motion-reduce:transform-none"
                >
                  Read the article
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
                </Link>
              </div>
            </motion.div>

            <motion.div variants={sectionReveal} className="editorial-panel rounded-[2rem] border border-stone-200/80 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.34em] text-accent">What the Journal covers</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-stone-900 md:text-4xl">
                Useful enough to brew from, thoughtful enough to return to.
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-600">
                We launch with six articles split between practical brewing guides and broader coffee
                stories, so the Journal helps both people looking for a better recipe and readers
                trying to understand the cup more deeply.
              </p>
              <div className="mt-8 grid gap-4">
                {[
                  ['Brewing Guides', 'Clear, practical articles for making better coffee at home.'],
                  ['Coffee Stories', 'Longer-form pieces about origin, roast, ritual, and coffee culture.'],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-[1.5rem] border border-stone-200 bg-white/80 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-accent">{title}</p>
                    <p className="mt-3 text-sm leading-7 text-stone-600">{body}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="mx-auto max-w-6xl"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={contentStagger}
          >
            <motion.div variants={sectionReveal} className="mb-12">
              <p className="text-xs uppercase tracking-[0.34em] text-accent">Brewing Guides</p>
              <h2 className="mt-4 text-4xl font-bold text-stone-900 md:text-5xl">
                Practical reads for a better cup at home.
              </h2>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {brewingGuides.map((article) => (
                <motion.article
                  key={article.slug}
                  variants={cardReveal}
                  className="editorial-panel card-sheen overflow-hidden rounded-[2rem] border border-stone-200/80"
                >
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    width={900}
                    height={600}
                    className="aspect-[4/3] w-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-accent">{article.category}</p>
                    <h3 className="mt-4 text-2xl font-semibold leading-tight text-stone-900">
                      {article.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-stone-600">{article.excerpt}</p>
                    <div className="mt-5 flex flex-wrap gap-4 text-xs uppercase tracking-[0.22em] text-stone-500">
                      <span>{formatDisplayDate(article.publishedAt)}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <Link
                      href={`/journal/${article.slug}`}
                      className="group mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-medium uppercase tracking-[0.22em] text-stone-900 transition-colors duration-300 hover:text-accent"
                    >
                      Read guide
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-stone-50 py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="mx-auto max-w-6xl"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={contentStagger}
          >
            <motion.div variants={sectionReveal} className="mb-12">
              <p className="text-xs uppercase tracking-[0.34em] text-accent">Coffee Stories</p>
              <h2 className="mt-4 text-4xl font-bold text-stone-900 md:text-5xl">
                The bigger ideas that shape how coffee tastes and feels.
              </h2>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {coffeeStories.map((article) => (
                <motion.article
                  key={article.slug}
                  variants={cardReveal}
                  className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white"
                >
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    width={900}
                    height={600}
                    className="aspect-[4/3] w-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.28em] text-accent">{article.category}</p>
                    <h3 className="mt-4 text-2xl font-semibold leading-tight text-stone-900">
                      {article.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-stone-600">{article.excerpt}</p>
                    <div className="mt-5 flex flex-wrap gap-4 text-xs uppercase tracking-[0.22em] text-stone-500">
                      <span>{formatDisplayDate(article.publishedAt)}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <Link
                      href={`/journal/${article.slug}`}
                      className="group mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-medium uppercase tracking-[0.22em] text-stone-900 transition-colors duration-300 hover:text-accent"
                    >
                      Read story
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
