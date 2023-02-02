import { observer } from 'mobx-react-lite'
import { useRef } from 'react'

import CartPanelItem from './cart-panel-item'
import EmptyPanel from './empty-cart-panel'
import ServiceFeeLabel from '@/ui/service-fee-label'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { useCartStore } from '@/stores/cart.store'
import { useDeliveryStore } from '@/stores/delivery.store'
import * as Content from './cart-panel-content.styled'

// TODO: Лишние ререндеры.
const CartPanelContent = () => {
  const rootRef = useRef<HTMLElement>(null)
  const { isScrollOnTop } = useScrollPosition({
    positions: ['top'],
    nodeRef: rootRef
  })

  return (
    <Content.Root ref={rootRef} isScrollOnTop={isScrollOnTop}>
      {useCartStore.isEmpty ? (
        <EmptyPanel />
      ) : (
        <>
          <Content.List>
            {useCartStore.products.map(product => (
              <CartPanelItem
                key={product.id}
                {...product}
                discountPercent={product.price.discountPercent}
                fullPrice={product.price.fullPrice}
                count={product.count}
              />
            ))}
          </Content.List>
          <ServiceFeeLabel
            serviceFee={useDeliveryStore.description.formattedServiceFee}
          />
        </>
      )}
    </Content.Root>
  )
}

export default observer(CartPanelContent)
