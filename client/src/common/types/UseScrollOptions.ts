import type { RefObject } from 'react'

export interface UseScrollOptions
  extends Omit<ScrollOptions, 'container' | 'target'> {
  container?: RefObject<HTMLElement>
  target?: RefObject<HTMLElement>
  layoutEffect?: boolean
}
