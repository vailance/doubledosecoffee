'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight, Clock3, Mail, MapPin, Phone } from 'lucide-react';
import { locations } from '@/data/locations';
import { createRevealVariants, createStagger, viewportOnce } from '@/components/homepage/motion.config.mjs';
import {
  locationHero,
  locationMap,
  locationsClosingCta,
  quickAccess,
} from './location.content.mjs';

function formatTime(time: string) {
  const [h, m] = time.split(':');
  const hour = Number.parseInt(h, 10);
  const suffix = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  return `${displayHour}:${m} ${suffix}`;
}

export default function LocationsPageContent() {
  const reduceMotion = useReducedMotion();
  const heroReveal = createRevealVariants(Boolean(reduceMotion), 38) as Variants;
  const sectionReveal = createRevealVariants(Boolean(reduceMotion), 26) as Variants;
  const cardReveal = createRevealVariants(Boolean(reduceMotion), 20) as Variants;
  const heroStagger = createStagger(reduceMotion ? 0 : 0.14, 0.08) as Variants;
  const contentStagger = createStagger(reduceMotion ? 0 : 0.1, 0.04) as Variants;
  const location = locations[0];

  const days = [
    { key: 'monday' as const, label: 'Monday' },
    { key: 'tuesday' as const, label: 'Tuesday' },
    { key: 'wednesday' as const, label: 'Wednesday' },
    { key: 'thursday' as const, label: 'Thursday' },
    { key: 'friday' as const, label: 'Friday' },
    { key: 'saturday' as const, label: 'Saturday' },
    { key: 'sunday' as const, label: 'Sunday' },
  ];

  const todayHoursSummary = 'Mon-Thu 7:00 AM-7:00 PM, Fri-Sat 8:00 AM-9:00 PM, Sun 8:00 AM-6:00 PM';

  return (
    <>
      <section className="relative isolate overflow-hidden bg-stone-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_28%),linear-gradient(145deg,rgba(12,10,9,0.94),rgba(12,10,9,0.7)_45%,rgba(120,53,15,0.5))]" />
        <div className="hero-grain absolute inset-0 opacity-70" />
        <div className="ambient-orb absolute left-0 top-20 h-52 w-52 rounded-full bg-amber-300/18 blur-3xl" />
        <div className="ambient-orb ambient-orb-delay absolute right-8 top-16 h-72 w-72 rounded-full bg-orange-400/12 blur-3xl" />

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
              {locationHero.eyebrow}
            </motion.p>
            <motion.h1
              variants={heroReveal}
              className="mx-auto max-w-4xl text-5xl font-bold leading-[0.92] tracking-[-0.04em] text-white md:text-7xl lg:text-[5.8rem]"
            >
              {locationHero.title}
            </motion.h1>
            <motion.p
              variants={heroReveal}
              className="mx-auto mt-8 max-w-2xl text-base leading-8 text-stone-200 md:text-lg"
            >
              {locationHero.intro}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="radial-warm-surface py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="editorial-panel mx-auto grid max-w-6xl gap-5 rounded-[2rem] border border-stone-200/80 px-6 py-6 md:grid-cols-3 md:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={contentStagger}
          >
            <motion.div variants={sectionReveal} className="md:col-span-3">
              <p className="text-xs uppercase tracking-[0.36em] text-accent">{quickAccess.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-bold text-stone-900 md:text-4xl">{quickAccess.title}</h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-stone-600">{quickAccess.body}</p>
            </motion.div>

            <motion.a
              variants={cardReveal}
              href={location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[1.5rem] border border-stone-200 bg-white p-6 transition-transform duration-300 hover:-translate-y-1 motion-reduce:transform-none"
            >
              <MapPin className="h-5 w-5 text-accent" />
              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-stone-500">Directions</p>
              <p className="mt-3 text-lg font-semibold text-stone-900">Open route in Google Maps</p>
              <p className="mt-3 text-sm leading-7 text-stone-600">{location.address}</p>
            </motion.a>

            <motion.div
              variants={cardReveal}
              className="rounded-[1.5rem] border border-stone-200 bg-white p-6"
            >
              <Clock3 className="h-5 w-5 text-accent" />
              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-stone-500">Opening hours</p>
              <p className="mt-3 text-lg font-semibold text-stone-900">Check before you head over</p>
              <p className="mt-3 text-sm leading-7 text-stone-600">{todayHoursSummary}</p>
            </motion.div>

            <motion.div
              variants={cardReveal}
              className="rounded-[1.5rem] border border-stone-200 bg-white p-6"
            >
              <Phone className="h-5 w-5 text-accent" />
              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-stone-500">Contact</p>
              <p className="mt-3 text-lg font-semibold text-stone-900">Call or email the cafe</p>
              <p className="mt-3 text-sm leading-7 text-stone-600">{location.phone}</p>
              <p className="text-sm leading-7 text-stone-600">{location.email}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={contentStagger}
              className="space-y-6"
            >
              <motion.div variants={sectionReveal}>
                <p className="text-xs uppercase tracking-[0.36em] text-accent">Melaka</p>
                <h2 className="mt-4 text-4xl font-bold text-stone-900 md:text-5xl">{location.name}</h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-stone-600">
                  Double Dose Coffee is set up to be easy to find and easy to return to, whether you
                  are stopping by for a quick coffee or planning a slower visit around the menu.
                </p>
              </motion.div>

              <motion.div
                variants={cardReveal}
                className="rounded-[2rem] border border-stone-200 bg-stone-50 p-7"
              >
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Address</p>
                    <p className="mt-3 text-base leading-8 text-stone-700">{location.address}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={cardReveal}
                className="rounded-[2rem] border border-stone-200 bg-stone-50 p-7"
              >
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Phone</p>
                    <a
                      href={`tel:${location.phone}`}
                      className="mt-3 inline-block text-base leading-8 text-stone-700 transition-colors duration-200 hover:text-accent"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={cardReveal}
                className="rounded-[2rem] border border-stone-200 bg-stone-50 p-7"
              >
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Email</p>
                    <a
                      href={`mailto:${location.email}`}
                      className="mt-3 inline-block text-base leading-8 text-stone-700 transition-colors duration-200 hover:text-accent"
                    >
                      {location.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={contentStagger}
              className="space-y-6"
            >
              <motion.div
                variants={cardReveal}
                className="rounded-[2rem] border border-stone-200 bg-stone-50 p-6"
              >
                <div className="mb-6 flex items-center gap-3">
                  <Clock3 className="h-5 w-5 text-accent" />
                  <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Full weekly hours</p>
                </div>
                <div className="space-y-3">
                  {days.map(({ key, label }) => {
                    const hours = location.hours[key];
                    return (
                      <div
                        key={key}
                        className="flex justify-between gap-4 border-b border-stone-200 pb-3 text-sm last:border-0"
                      >
                        <span className="text-stone-500">{label}</span>
                        <span className="font-medium tabular-nums text-stone-900">
                          {hours ? `${formatTime(hours.open)} - ${formatTime(hours.close)}` : 'Closed'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                variants={cardReveal}
                className="overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-100"
              >
                <iframe
                  title="Map showing Double Dose Coffee location in Melaka"
                  src={locationMap.embedUrl}
                  className="h-[420px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
              <motion.div
                variants={sectionReveal}
                className="flex flex-col gap-3 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between"
              >
                <p>{locationMap.attribution}</p>
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium uppercase tracking-[0.22em] text-stone-900 transition-colors duration-200 hover:text-accent"
                >
                  Open full directions
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>
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
              {locationsClosingCta.eyebrow}
            </motion.p>
            <motion.h2
              variants={sectionReveal}
              className="relative max-w-3xl text-3xl font-bold text-stone-900 md:text-5xl"
            >
              {locationsClosingCta.title}
            </motion.h2>
            <motion.p
              variants={sectionReveal}
              className="relative mt-5 max-w-2xl text-base leading-8 text-stone-600"
            >
              {locationsClosingCta.body}
            </motion.p>
            <motion.div
              variants={sectionReveal}
              className="relative mt-10 flex flex-col gap-4 sm:flex-row"
            >
              {locationsClosingCta.links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group inline-flex cursor-pointer items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-medium uppercase tracking-[0.24em] transition-all duration-300 motion-reduce:transform-none ${
                    index === 0
                      ? 'bg-stone-900 text-white hover:-translate-y-0.5 hover:bg-accent'
                      : 'border border-stone-300 bg-white/80 text-stone-900 hover:border-accent hover:text-accent'
                  }`}
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
