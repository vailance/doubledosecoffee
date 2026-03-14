'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { createRevealVariants, createStagger, viewportOnce } from '@/components/homepage/motion.config.mjs';
import {
  aboutClosingCta,
  aboutHero,
  brandValues,
  storyChapters,
} from './about.content.mjs';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80';
const DETAIL_IMAGE = 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&q=80';

export default function AboutPageContent() {
  const reduceMotion = useReducedMotion();
  const heroReveal = createRevealVariants(Boolean(reduceMotion), 40) as Variants;
  const sectionReveal = createRevealVariants(Boolean(reduceMotion), 28) as Variants;
  const cardReveal = createRevealVariants(Boolean(reduceMotion), 22) as Variants;
  const heroStagger = createStagger(reduceMotion ? 0 : 0.14, 0.08) as Variants;
  const contentStagger = createStagger(reduceMotion ? 0 : 0.12, 0.04) as Variants;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-stone-950 text-white">
        <motion.div
          className="absolute inset-0"
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.06],
                  x: [0, 8, -4, 0],
                  y: [0, -10, 6, 0],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 18,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                }
          }
        >
          <Image
            src={HERO_IMAGE}
            alt="Warm coffee bar atmosphere at Double Dose Coffee"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(12,10,9,0.92),rgba(12,10,9,0.6)_45%,rgba(120,53,15,0.55))]" />
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
              {aboutHero.eyebrow}
            </motion.p>
            <motion.h1
              variants={heroReveal}
              className="mx-auto max-w-4xl text-5xl font-bold leading-[0.94] tracking-[-0.04em] text-white md:text-7xl lg:text-[5.75rem]"
            >
              {aboutHero.title}
            </motion.h1>
            <motion.p
              variants={heroReveal}
              className="mx-auto mt-8 max-w-2xl text-base leading-8 text-stone-200 md:text-lg"
            >
              {aboutHero.intro}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="radial-warm-surface overflow-hidden py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={contentStagger}
              className="space-y-8"
            >
              {storyChapters.map((chapter) => (
                <motion.article
                  key={chapter.id}
                  variants={cardReveal}
                  className="editorial-panel rounded-[2rem] border border-stone-200/80 p-8 md:p-10"
                >
                  <p className="text-xs uppercase tracking-[0.34em] text-accent">{chapter.label}</p>
                  <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight text-stone-900 md:text-4xl">
                    {chapter.title}
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
                    {chapter.body}
                  </p>
                </motion.article>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={sectionReveal}
              className="lg:sticky lg:top-24"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-stone-200/80 bg-stone-900">
                <Image
                  src={DETAIL_IMAGE}
                  alt="Fresh coffee being poured into a cup"
                  width={960}
                  height={1200}
                  className="aspect-[4/5] w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-xs uppercase tracking-[0.34em] text-amber-200/80">What shaped the brand</p>
                  <p className="mt-4 max-w-sm font-serif text-2xl leading-relaxed text-white">
                    Coffee became more interesting the moment we realized a roast profile could
                    change not just flavor, but feeling.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
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
              What Double Dose stands for
            </motion.p>
            <motion.h2
              variants={sectionReveal}
              className="text-4xl font-bold text-stone-900 md:text-5xl"
            >
              A page about coffee, but really about how coffee should feel.
            </motion.h2>
            <motion.p
              variants={sectionReveal}
              className="mt-6 text-base leading-8 text-stone-600"
            >
              The brand is built around three ideas: precision in the cup, warmth in the room, and a
              coffee identity that feels rooted in Melaka while still looking forward.
            </motion.p>
          </motion.div>

          <motion.div
            className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={contentStagger}
          >
            {brandValues.map((value) => (
              <motion.article
                key={value.id}
                variants={cardReveal}
                className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8"
              >
                <p className="text-xs uppercase tracking-[0.34em] text-accent">{value.number}</p>
                <h3 className="mt-4 text-2xl font-semibold text-stone-900">{value.title}</h3>
                <p className="mt-4 text-base leading-8 text-stone-600">{value.body}</p>
              </motion.article>
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
              {aboutClosingCta.eyebrow}
            </motion.p>
            <motion.h2
              variants={sectionReveal}
              className="relative max-w-3xl text-3xl font-bold text-stone-900 md:text-5xl"
            >
              {aboutClosingCta.title}
            </motion.h2>
            <motion.p
              variants={sectionReveal}
              className="relative mt-5 max-w-2xl text-base leading-8 text-stone-600"
            >
              {aboutClosingCta.body}
            </motion.p>
            <motion.div
              variants={sectionReveal}
              className="relative mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href={aboutClosingCta.primaryLink.href}
                className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-stone-900 px-7 py-4 text-sm font-medium uppercase tracking-[0.24em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent motion-reduce:transform-none"
              >
                {aboutClosingCta.primaryLink.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
              </Link>
              <Link
                href={aboutClosingCta.secondaryLink.href}
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-stone-300 bg-white/80 px-7 py-4 text-sm font-medium uppercase tracking-[0.24em] text-stone-900 transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                {aboutClosingCta.secondaryLink.label}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
