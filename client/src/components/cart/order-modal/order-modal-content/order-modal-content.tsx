import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react'

import ProductsList from './order-products-list'
import OrderInfo from './order-info'
import { useScrollProgress } from '@hooks/useScrollProgress'
import { StyledContent } from './order-modal-content.styled'

const OrderModalContent: FC<Props> = ({
  setScrollOnTop,
  setScrollOnBottom
}) => {
  const ref = useRef<HTMLElement>(null)
  const { isScrollOnTop, isScrollOnBottom } = useScrollProgress({
    positions: ['top', 'bottom'],
    container: ref
  })

  useEffect(() => {
    setScrollOnTop(isScrollOnTop)
  }, [setScrollOnTop, isScrollOnTop])

  useEffect(() => {
    setScrollOnBottom(isScrollOnBottom)
  }, [setScrollOnBottom, isScrollOnBottom])

  return (
    <StyledContent ref={ref}>
      <ProductsList />
      <OrderInfo />
    </StyledContent>
  )
}

export default OrderModalContent

interface Props {
  setScrollOnTop: Dispatch<SetStateAction<boolean>>
  setScrollOnBottom: Dispatch<SetStateAction<boolean>>
}
