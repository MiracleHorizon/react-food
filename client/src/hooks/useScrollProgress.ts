import { RefObject, useCallback, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import type { ScrollOptions } from '@motionone/dom/types/gestures/scroll/types'

export const useScrollProgress = ({ positions, ...options }: Parameters) => {
  const [isScrollOnTop, setScrollOnTop] = useState(true)
  const [isScrollOnBottom, setScrollOnBottom] = useState(false)
  const [isScrollOnTheLeft, setScrollOnTheLeft] = useState(true)
  const [isScrollOnTheRight, setScrollOnTheRight] = useState(false)

  const { scrollYProgress, scrollXProgress } = useScroll(options)

  const handleVerticalScroll = useCallback(
    (latest: number): void => {
      if (positions.includes('top')) {
        if (isScrollOnTop && latest === 1) return
        if (latest > 0) setScrollOnTop(false)
        if (latest === 0) setScrollOnTop(true)
      }

      if (positions.includes('bottom')) {
        if (latest >= 1) setScrollOnBottom(true)
        if (latest < 1) setScrollOnBottom(false)
      }
    },
    [isScrollOnTop, positions]
  )

  const handleHorizontalScroll = useCallback(
    (latest: number): void => {
      if (positions.includes('left')) {
        if (isScrollOnTheLeft && latest === 1) return
        if (latest > 0) setScrollOnTheLeft(false)
        if (latest === 0) setScrollOnTheLeft(true)
      }

      if (positions.includes('right')) {
        if (!isScrollOnTheRight && latest === 1) return
        if (latest >= 1) setScrollOnTheRight(true)
        if (latest < 1) setScrollOnTheRight(false)
      }
    },
    [isScrollOnTheLeft, isScrollOnTheRight, positions]
  )

  useMotionValueEvent(scrollYProgress, 'change', handleVerticalScroll)
  useMotionValueEvent(scrollXProgress, 'change', handleHorizontalScroll)

  return {
    isScrollOnTop,
    isScrollOnBottom,
    isScrollOnTheLeft,
    isScrollOnTheRight
  }
}

type Position = 'top' | 'bottom' | 'left' | 'right'

interface UseScrollOptions extends Omit<ScrollOptions, 'container' | 'target'> {
  container?: RefObject<HTMLElement>
  target?: RefObject<HTMLElement>
  layoutEffect?: boolean
}

interface Parameters extends UseScrollOptions {
  positions: Position[]
}
