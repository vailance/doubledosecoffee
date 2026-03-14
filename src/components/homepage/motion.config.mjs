export const viewportOnce = {
  once: true,
  amount: 0.25,
};

export function createRevealVariants(reduceMotion = false, distance = 28) {
  return {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : distance,
      filter: reduceMotion ? 'blur(0px)' : 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: reduceMotion ? 0.01 : 0.72,
        ease: 'easeOut',
      },
    },
  };
}

export function createStagger(staggerChildren = 0.12, delayChildren = 0) {
  return {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
}
