import { observer } from 'mobx-react-lite'
import { useRef, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'

import CartPanelItem from './cart-panel-item'
import EmptyPanel from './empty-cart-panel'
import ServiceFeeLabel from '@/ui/service-fee-label'
import { cartStore } from '@/stores/cart.store'
import { deliveryStore } from '@/stores/delivery.store'
import * as Content from './cart-panel-content.styled'

const CartPanelContent = () => {
  const [isScrollOnTop, setScrollOnTop] = useState(true)
  const rootRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll({
    container: rootRef
  })

  useMotionValueEvent(scrollY, 'change', latest => {
    if (isScrollOnTop && latest > 10) {
      setScrollOnTop(false)
    }

    if (!isScrollOnTop && latest <= 10) {
      setScrollOnTop(true)
    }
  })

  return (
    <Content.Root ref={rootRef} isScrollOnTop={isScrollOnTop}>
      {cartStore.isEmpty ? (
        <EmptyPanel />
      ) : (
        <>
          <Content.List>
            {cartStore.products.map((product, i) => (
              <CartPanelItem
                key={product.id}
                lastInOrder={i + 1 === cartStore.totalPositions}
                {...product}
              />
            ))}
          </Content.List>
          <ServiceFeeLabel
            serviceFee={deliveryStore.description.getServiceFee()}
          />
        </>
      )}
    </Content.Root>
  )
}

export default observer(CartPanelContent)
