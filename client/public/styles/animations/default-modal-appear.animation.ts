import type { Variants } from 'framer-motion'

export const defaultModalAppearAnimation: Variants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.2
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeIn',
      duration: 0.2
    }
  }
}
