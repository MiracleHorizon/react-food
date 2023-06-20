import { useCallback, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'

import type { UseScrollOptions } from '@app-types/UseScrollOptions'
import type { NonEmptyArray } from '@app-types/NonEmptyArray'

export const useVerticalScrollProgress = ({
  positions,
  ...options
}: Parameters) => {
  const { scrollY, scrollYProgress } = useScroll(options)
  const [isScrollOnTop, setIsScrollOnTop] = useState<boolean>(
    scrollYProgress.get() <= 0
  )
  const [isScrollOnBottom, setIsScrollOnBottom] = useState<boolean>(
    scrollYProgress.get() >= 1
  )

  const handleVerticalScroll = useCallback(
    (latest: number): void => {
      const scrollYValue = scrollY.get()

      if (positions.includes('top')) {
        if (latest > 0) {
          setIsScrollOnTop(false)
        }
        if (latest <= 0) {
          setIsScrollOnTop(true)
        }
        if (latest === 1 && scrollYValue === 0) {
          setIsScrollOnTop(true)
        }
      }

      if (positions.includes('bottom')) {
        if (latest >= 1) {
          setIsScrollOnBottom(true)
        }
        if (latest < 1) {
          setIsScrollOnBottom(false)
        }
      }
    },
    [positions, scrollY]
  )

  useMotionValueEvent(scrollYProgress, 'change', handleVerticalScroll)

  return { isScrollOnTop, isScrollOnBottom }
}

interface Parameters extends UseScrollOptions {
  positions: NonEmptyArray<'top' | 'bottom'>
}
