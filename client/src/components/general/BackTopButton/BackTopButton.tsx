import { useCallback, useState } from 'react'
import { AnimatePresence, useMotionValueEvent, useScroll } from 'framer-motion'

import * as Button from './BackTopButton.styled'

const calcIsVisible = (scrollProgress: number): boolean => {
  const VISION_POINT: number = 400 // NOTE: Pixels
  return scrollProgress >= VISION_POINT
}

export const BackTopButton = () => {
  const { scrollY } = useScroll()
  const [isVisible, setIsVisible] = useState(calcIsVisible(scrollY.get()))

  const handleVerticalScroll = useCallback((latest: number) => {
    setIsVisible(calcIsVisible(latest))
  }, [])

  const handleBackTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    })
  }

  useMotionValueEvent(scrollY, 'change', handleVerticalScroll)

  return (
    <AnimatePresence>
      {isVisible && (
        <Button.Root {...Button.animation} onClick={handleBackTop}>
          <Button.Icon />
        </Button.Root>
      )}
    </AnimatePresence>
  )
}
