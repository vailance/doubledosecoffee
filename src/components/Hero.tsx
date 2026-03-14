'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

const Hero = () => {
  const letters = 'DOUBLE DOSE';

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center"
    >
      {letters.split(' ').map((word, wordIndex) => (
        <div key={wordIndex} className="mb-4">
          {word.split('').map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              variants={letterVariants}
              className="inline-block font-bold tracking-tight text-neutral-900"
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </div>
      ))}
    </motion.div>
  );
};

export default Hero;
