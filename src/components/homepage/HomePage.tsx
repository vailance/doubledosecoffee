'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import { createRevealVariants, createStagger, viewportOnce } from './motion.config.mjs';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80';
const SPACE_IMAGE = 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80';

export default function HomePage() {
  const reduceMotion = useReducedMotion();
  const heroReveal = createRevealVariants(Boolean(reduceMotion), 44) as Variants;
  const sectionReveal = createRevealVariants(Boolean(reduceMotion), 30) as Variants;
  const cardReveal = createRevealVariants(Boolean(reduceMotion), 24) as Variants;
  const heroStagger = createStagger(reduceMotion ? 0 : 0.14, 0.08) as Variants;
  const gridStagger = createStagger(reduceMotion ? 0 : 0.1, 0.08) as Variants;

  return (
    <>
      <section className="relative isolate flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden bg-stone-950 text-white">
        <motion.div
          className="absolute inset-0"
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.08],
                  x: [0, 10, -6, 0],
                  y: [0, -14, 8, 0],
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
            alt="Coffee bar atmosphere at Double Dose Coffee"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(12,10,9,0.9),rgba(12,10,9,0.55)_45%,rgba(120,53,15,0.52))]" />
        <div className="hero-grain absolute inset-0 opacity-70" />
        <div className="ambient-orb absolute -left-12 top-24 h-56 w-56 rounded-full bg-amber-300/18 blur-3xl" />
        <div className="ambient-orb ambient-orb-delay absolute right-10 top-16 h-72 w-72 rounded-full bg-orange-400/16 blur-3xl" />
        <div className="ambient-orb ambient-orb-slow absolute bottom-12 right-1/4 h-64 w-64 rounded-full bg-yellow-200/10 blur-3xl" />

        <div className="relative container mx-auto px-6 py-20 md:py-28">
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
              Craft coffee in Melaka
            </motion.p>
            <motion.h1
              variants={heroReveal}
              className="mx-auto max-w-4xl text-5xl font-bold leading-[0.9] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[7rem]"
            >
              The ritual of
              <br />
              a better cup.
            </motion.h1>
            <motion.p
              variants={heroReveal}
              className="mx-auto mt-8 max-w-2xl text-base leading-8 text-stone-200 md:text-lg"
            >
              Double Dose Coffee brings together carefully sourced single-origin beans, warm service,
              and a slower kind of hospitality for drinkers who notice the details.
            </motion.p>
            <motion.div
              variants={heroReveal}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/shop"
                className="cursor-pointer rounded-full bg-accent px-8 py-4 text-sm font-medium uppercase tracking-[0.24em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light motion-reduce:transform-none"
              >
                Shop the roast
              </Link>
              <Link
                href="/about"
                className="cursor-pointer rounded-full border border-white/35 bg-white/8 px-8 py-4 text-sm font-medium uppercase tracking-[0.24em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-stone-900 motion-reduce:transform-none"
              >
                Discover the story
              </Link>
            </motion.div>
            <motion.div
              variants={heroReveal}
              className="mx-auto mt-14 grid max-w-3xl gap-6 rounded-[2rem] border border-white/12 bg-white/8 px-6 py-5 backdrop-blur-md sm:grid-cols-3"
            >
              {[
                ['Single-origin focus', 'Rotating beans from origin-led producers'],
                ['Slow hospitality', 'Built for sipping, tasting, and conversation'],
                ['Fresh weekly roasts', 'Roasted for clarity, sweetness, and depth'],
              ].map(([title, description]) => (
                <div key={title} className="text-left">
                  <p className="text-sm uppercase tracking-[0.24em] text-amber-100/70">{title}</p>
                  <p className="mt-3 text-sm leading-6 text-stone-200">{description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-stone-950 py-16 text-stone-200">
        <motion.div
          className="container mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={createStagger(reduceMotion ? 0 : 0.12, 0)}
        >
          <motion.div
            variants={sectionReveal}
            className="mx-auto mb-6 h-px w-24 bg-gradient-to-r from-transparent via-amber-300 to-transparent"
          />
          <motion.p
            variants={sectionReveal}
            className="mx-auto max-w-3xl font-serif text-2xl italic leading-relaxed text-stone-100 md:text-3xl"
          >
            &ldquo;Great coffee should feel composed, generous, and memorable from the first aroma to
            the last sip.&rdquo;
          </motion.p>
        </motion.div>
      </section>

      <section className="radial-warm-surface relative overflow-hidden py-24">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-amber-200/20 to-transparent" />
        <div className="container mx-auto px-6">
          <motion.div
            className="mx-auto mb-16 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={createStagger(reduceMotion ? 0 : 0.12, 0.04)}
          >
            <motion.p
              variants={sectionReveal}
              className="mb-3 text-xs uppercase tracking-[0.38em] text-accent"
            >
              Our selection
            </motion.p>
            <motion.h2
              variants={sectionReveal}
              className="text-4xl font-bold text-stone-900 md:text-5xl"
            >
              Coffee beans with a tactile point of view
            </motion.h2>
            <motion.p
              variants={sectionReveal}
              className="mt-5 text-base leading-8 text-stone-600"
            >
              Each roast is chosen for character, balance, and the kind of cup that rewards slow
              attention.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={gridStagger}
          >
            {products.map((product) => (
              <motion.div key={product.slug} variants={cardReveal}>
                <Link
                  href={`/shop/${product.slug}`}
                  className="group editorial-panel card-sheen block cursor-pointer rounded-[2rem] border border-stone-200/70 p-4 transition-transform duration-300 hover:-translate-y-2 motion-reduce:transform-none"
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
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-stone-950/50 to-transparent" />
                  </div>
                  <div className="px-2 pb-2 pt-6">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                        {product.origin}
                      </p>
                      <p className="text-xs uppercase tracking-[0.3em] text-accent">
                        {product.roastType}
                      </p>
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold text-stone-900 transition-colors duration-300 group-hover:text-accent">
                      {product.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-stone-600">
                      {product.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {product.notes.slice(0, 3).map((note) => (
                        <span
                          key={note}
                          className="rounded-full bg-white/80 px-3 py-1 text-xs uppercase tracking-[0.24em] text-stone-500"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-stone-200/80 pt-5">
                      <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-900">
                        From RM{product.pricing.size250g}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-accent">
                        View roast
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

      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={sectionReveal}
              className="relative overflow-hidden rounded-[2rem]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-stone-950/10 via-transparent to-amber-300/15" />
              <Image
                src={SPACE_IMAGE}
                alt="Freshly brewed coffee being prepared at Double Dose Coffee"
                width={960}
                height={1200}
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={createStagger(reduceMotion ? 0 : 0.12, 0.02)}
            >
              <motion.p
                variants={sectionReveal}
                className="mb-3 text-xs uppercase tracking-[0.38em] text-accent"
              >
                Our space
              </motion.p>
              <motion.h2
                variants={sectionReveal}
                className="max-w-xl text-4xl font-bold leading-tight text-stone-900 md:text-5xl"
              >
                A room for tasting, talking, and finding your next favorite bean
              </motion.h2>
              <motion.p
                variants={sectionReveal}
                className="mt-6 max-w-xl text-base leading-8 text-stone-600"
              >
                Visit our Melaka space for a slower kind of coffee service, where you can browse
                beans, ask questions, and drink something brewed with care.
              </motion.p>
              <motion.div
                variants={sectionReveal}
                className="mt-8 grid gap-4 text-sm text-stone-600 sm:grid-cols-2"
              >
                <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-stone-500">For curious drinkers</p>
                  <p className="mt-3 leading-7">Get guided recommendations based on roast, brew style, and flavor preference.</p>
                </div>
                <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-stone-500">For daily rituals</p>
                  <p className="mt-3 leading-7">Take home beans that keep your morning cup precise, warm, and dependable.</p>
                </div>
              </motion.div>
              <motion.div variants={sectionReveal} className="mt-10">
                <Link
                  href="/locations"
                  className="group inline-flex cursor-pointer items-center gap-3 text-sm font-medium uppercase tracking-[0.24em] text-stone-900 transition-colors duration-300 hover:text-accent"
                >
                  Plan your visit
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-stone-950 px-6 py-24 text-white">
        <motion.div
          className="editorial-panel relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 px-6 py-14 text-center sm:px-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={createStagger(reduceMotion ? 0 : 0.12, 0.04)}
        >
          <div className="ambient-orb absolute left-8 top-8 h-40 w-40 rounded-full bg-amber-300/25 blur-3xl" />
          <div className="ambient-orb ambient-orb-delay absolute bottom-0 right-12 h-48 w-48 rounded-full bg-orange-300/18 blur-3xl" />
          <motion.p
            variants={sectionReveal}
            className="relative mb-3 text-xs uppercase tracking-[0.38em] text-accent"
          >
            Newsletter
          </motion.p>
          <motion.h2
            variants={sectionReveal}
            className="relative text-3xl font-bold text-stone-900 md:text-5xl"
          >
            Join the circle around the next roast.
          </motion.h2>
          <motion.p
            variants={sectionReveal}
            className="relative mx-auto mt-5 max-w-2xl text-base leading-8 text-stone-600"
          >
            Get first notice on fresh arrivals, brewing notes, and seasonal recommendations from
            Double Dose Coffee.
          </motion.p>
          <motion.form
            variants={sectionReveal}
            action="#"
            className="relative mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email-home" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email-home"
              type="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 rounded-full border border-stone-300 bg-white px-5 py-4 text-sm text-stone-900 placeholder:text-stone-400 focus:border-accent focus:outline-none"
              required
            />
            <button
              type="submit"
              className="cursor-pointer rounded-full bg-stone-900 px-7 py-4 text-sm font-medium uppercase tracking-[0.24em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent motion-reduce:transform-none"
            >
              Subscribe
            </button>
          </motion.form>
        </motion.div>
      </section>
    </>
  );
}
