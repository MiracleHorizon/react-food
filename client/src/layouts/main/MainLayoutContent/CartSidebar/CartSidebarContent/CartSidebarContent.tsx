import { useRef } from 'react'

import ServiceFeeLabel from '@components/ServiceFeeLabel'
import EmptyCartSidebar from './EmptyCartSidebar'
import ProductsList from './CartSidebarProductsList'
import { useCartStore } from '@stores/cartStore'
import { useVerticalScrollProgress } from '@hooks/useVerticalScrollProgress'
import { Root } from './CartSidebarContent.styled'

const CartSidebarContent = () => {
  const isCartEmpty = useCartStore(state => state.isEmpty())
  const rootRef = useRef<HTMLElement>(null)
  const { isScrollOnTop } = useVerticalScrollProgress({
    positions: ['top'],
    container: rootRef
  })

  return (
    <Root isScrollOnTop={isScrollOnTop} ref={rootRef}>
      {!isCartEmpty ? (
        <>
          <ProductsList />
          <ServiceFeeLabel />
        </>
      ) : (
        <EmptyCartSidebar />
      )}
    </Root>
  )
}

export default CartSidebarContent
