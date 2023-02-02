import { Dispatch, FC, SetStateAction, useRef } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'

import ProductsList from './order-products-list'
import OrderInfo from './order-info'
import * as Content from './order-modal-content.styled'

// TODO: useScrollPosition.
const OrderModalContent: FC<Props> = ({
  isScrollOnTop,
  isScrollOnBottom,
  setScrollOnTop,
  setScrollOnBottom
}) => {
  const rootRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll({
    container: rootRef
  })

  const handleScrollPosition = (latest: number) => {
    if (!rootRef.current) return
    const scrollHeight = rootRef.current.scrollHeight
    const offsetHeight = rootRef.current.offsetHeight

    if (isScrollOnTop && latest > 0) {
      setScrollOnTop(false)
    }

    if (!isScrollOnTop && latest <= 0) {
      setScrollOnTop(true)
    }

    if (isScrollOnBottom && latest !== scrollHeight - offsetHeight) {
      setScrollOnBottom(false)
    }

    if (!isScrollOnBottom && latest === scrollHeight - offsetHeight) {
      setScrollOnBottom(true)
    }
  }

  useMotionValueEvent(scrollY, 'change', handleScrollPosition)

  return (
    <Content.Root ref={rootRef}>
      <ProductsList />
      <OrderInfo />
    </Content.Root>
  )
}

export default OrderModalContent

interface Props {
  isScrollOnTop: boolean
  isScrollOnBottom: boolean
  setScrollOnTop: Dispatch<SetStateAction<boolean>>
  setScrollOnBottom: Dispatch<SetStateAction<boolean>>
}
