import { RefObject, useCallback, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'

export const useScrollPosition = ({
  positions,
  nodeRef,
  baseTopScrollValue,
  baseBottomScrollValue,
  scrollTopOffset
}: Parameters) => {
  const [isScrollOnTop, setScrollOnTop] = useState<boolean>(
    baseTopScrollValue ?? true
  )
  const [isScrollOnBottom, setScrollOnBottom] = useState<boolean>(
    baseBottomScrollValue ?? false
  )
  const { scrollY } = useScroll({
    container: nodeRef
  })

  const onTopScrollPositionHandler = useCallback(
    (latest: number): void => {
      const offsetValue = scrollTopOffset ?? 0

      if (isScrollOnTop && latest > offsetValue) {
        setScrollOnTop(false)
      }

      if (!isScrollOnTop && latest <= offsetValue) {
        setScrollOnTop(true)
      }
    },
    [isScrollOnTop, scrollTopOffset]
  )

  const onBottomScrollPositionHandler = useCallback(
    (latest: number): void => {
      // TODO: Сделать так, чтобы пропс nodeRef был обязательным для данной позиции
      if (!nodeRef || !nodeRef.current) return

      const scrollHeight = nodeRef.current.scrollHeight
      const offsetHeight = nodeRef.current.offsetHeight

      if (isScrollOnBottom && latest !== scrollHeight - offsetHeight) {
        setScrollOnBottom(false)
      }

      if (!isScrollOnBottom && latest === scrollHeight - offsetHeight) {
        setScrollOnBottom(true)
      }
    },
    [isScrollOnBottom, nodeRef]
  )

  useMotionValueEvent(scrollY, 'change', latest => {
    if (positions.includes('top')) onTopScrollPositionHandler(latest)
    if (positions.includes('bottom')) onBottomScrollPositionHandler(latest)
  })

  return {
    isScrollOnTop: positions.includes('top') && isScrollOnTop,
    isScrollOnBottom: positions.includes('bottom') && isScrollOnBottom
  }
}

interface Parameters {
  positions: ('top' | 'bottom')[]
  baseTopScrollValue?: boolean
  baseBottomScrollValue?: boolean
  nodeRef?: RefObject<HTMLElement>
  scrollTopOffset?: number
}
