import {
  type Dispatch,
  type FC,
  type SetStateAction,
  useEffect,
  useRef
} from 'react'

import { OrderInfo } from './OrderInfo'
import { CartProductsList } from './CartProductsList'
import { useVerticalScrollProgress } from '@hooks/useVerticalScrollProgress'
import { Root } from './CartModalContent.styled'

export const CartModalContent: FC<Props> = ({
  setScrollIsOnTop,
  setScrollIsOnBottom
}) => {
  const rootRef = useRef<HTMLElement>(null)
  const { isScrollOnTop, isScrollOnBottom } = useVerticalScrollProgress({
    positions: ['top', 'bottom'],
    container: rootRef
  })

  useEffect(() => {
    setScrollIsOnTop(isScrollOnTop)
  }, [setScrollIsOnTop, isScrollOnTop])

  useEffect(() => {
    setScrollIsOnBottom(isScrollOnBottom)
  }, [setScrollIsOnBottom, isScrollOnBottom])

  return (
    <Root ref={rootRef}>
      <CartProductsList />
      <OrderInfo />
    </Root>
  )
}

interface Props {
  setScrollIsOnTop: Dispatch<SetStateAction<boolean>>
  setScrollIsOnBottom: Dispatch<SetStateAction<boolean>>
}
