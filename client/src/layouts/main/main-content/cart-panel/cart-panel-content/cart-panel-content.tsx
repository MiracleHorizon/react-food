import { observer } from 'mobx-react-lite'
import { useRef } from 'react'

import EmptyPanel from './empty-cart-panel'
import CartPanelList from './cart-panel-list'
import ServiceFeeLabel from '@/ui/service-fee-label'
import { useCartStore } from '@/stores/cart.store'
import { useDeliveryStore } from '@/stores/delivery.store'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import * as Content from './cart-panel-content.styled'

const CartPanelContent = () => {
  const rootRef = useRef<HTMLElement>(null)
  const { isScrollOnTop } = useScrollProgress({
    positions: ['top'],
    container: rootRef
  })

  return (
    <Content.StyledWrapper ref={rootRef} isScrollOnTop={isScrollOnTop}>
      {!useCartStore.isEmpty ? (
        <>
          <CartPanelList />
          <ServiceFeeLabel
            serviceFee={useDeliveryStore.description.formattedServiceFee}
          />
        </>
      ) : (
        <EmptyPanel />
      )}
    </Content.StyledWrapper>
  )
}

export default observer(CartPanelContent)
