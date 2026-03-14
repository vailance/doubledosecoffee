'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, Handshake, Store } from 'lucide-react';
import { createRevealVariants, createStagger, viewportOnce } from '@/components/homepage/motion.config.mjs';
import {
  partnerBenefits,
  partnerPaths,
  partnershipCta,
  partnershipHero,
} from './partnerships.content.mjs';

const partnerIcons = {
  retail: Store,
  wholesale: BriefcaseBusiness,
  collaborations: Handshake,
} as const;

export default function PartnershipsPageContent() {
  const reduceMotion = useReducedMotion();
  const heroReveal = createRevealVariants(Boolean(reduceMotion), 40) as Variants;
  const sectionReveal = createRevealVariants(Boolean(reduceMotion), 28) as Variants;
  const cardReveal = createRevealVariants(Boolean(reduceMotion), 22) as Variants;
  const heroStagger = createStagger(reduceMotion ? 0 : 0.14, 0.08) as Variants;
  const contentStagger = createStagger(reduceMotion ? 0 : 0.1, 0.04) as Variants;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-stone-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.16),transparent_28%),linear-gradient(145deg,rgba(12,10,9,0.94),rgba(12,10,9,0.68)_45%,rgba(120,53,15,0.5))]" />
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
              {partnershipHero.eyebrow}
            </motion.p>
            <motion.h1
              variants={heroReveal}
              className="mx-auto max-w-4xl text-5xl font-bold leading-[0.92] tracking-[-0.04em] text-white md:text-7xl lg:text-[5.8rem]"
            >
              {partnershipHero.title}
            </motion.h1>
            <motion.p
              variants={heroReveal}
              className="mx-auto mt-8 max-w-2xl text-base leading-8 text-stone-200 md:text-lg"
            >
              {partnershipHero.intro}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="radial-warm-surface py-24">
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
              Partnership paths
            </motion.p>
            <motion.h2
              variants={sectionReveal}
              className="text-4xl font-bold text-stone-900 md:text-5xl"
            >
              Retail leads the conversation, with room for the right next fit.
            </motion.h2>
            <motion.p
              variants={sectionReveal}
              className="mt-6 text-base leading-8 text-stone-600"
            >
              The page is structured so potential stockists can understand the main offer quickly,
              while cafes, restaurants, and collaborators still have a clear way in.
            </motion.p>
          </motion.div>

          <motion.div
            className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={contentStagger}
          >
            {partnerPaths.map((path, index) => {
              const Icon = partnerIcons[path.id as keyof typeof partnerIcons];

              return (
                <motion.article
                  key={path.id}
                  variants={cardReveal}
                  className={`rounded-[2rem] border p-8 ${
                    index === 0
                      ? 'editorial-panel border-stone-200/80'
                      : 'border-stone-200 bg-white'
                  }`}
                >
                  <Icon className="h-6 w-6 text-accent" />
                  <p className="mt-5 text-xs uppercase tracking-[0.3em] text-stone-500">{path.eyebrow}</p>
                  <h3 className="mt-4 text-2xl font-semibold leading-tight text-stone-900">
                    {path.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-stone-600">{path.body}</p>
                </motion.article>
              );
            })}
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
              What partners can expect
            </motion.p>
            <motion.h2
              variants={sectionReveal}
              className="text-4xl font-bold text-stone-900 md:text-5xl"
            >
              A more considered partnership page, not a catch-all contact box.
            </motion.h2>
          </motion.div>

          <motion.div
            className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={contentStagger}
          >
            {partnerBenefits.map((benefit) => (
              <motion.article
                key={benefit.title}
                variants={cardReveal}
                className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8"
              >
                <h3 className="text-2xl font-semibold text-stone-900">{benefit.title}</h3>
                <p className="mt-4 text-base leading-8 text-stone-600">{benefit.body}</p>
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
              {partnershipCta.eyebrow}
            </motion.p>
            <motion.h2
              variants={sectionReveal}
              className="relative max-w-3xl text-3xl font-bold text-stone-900 md:text-5xl"
            >
              {partnershipCta.title}
            </motion.h2>
            <motion.p
              variants={sectionReveal}
              className="relative mt-5 max-w-2xl text-base leading-8 text-stone-600"
            >
              {partnershipCta.body}
            </motion.p>
            <motion.div
              variants={sectionReveal}
              className="relative mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href={partnershipCta.primaryLink.href}
                className="group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full bg-stone-900 px-7 py-4 text-sm font-medium uppercase tracking-[0.24em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent motion-reduce:transform-none"
              >
                {partnershipCta.primaryLink.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
              </a>
              <Link
                href={partnershipCta.secondaryLink.href}
                className="inline-flex cursor-pointer items-center justify-center rounded-full border border-stone-300 bg-white/80 px-7 py-4 text-sm font-medium uppercase tracking-[0.24em] text-stone-900 transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                {partnershipCta.secondaryLink.label}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
