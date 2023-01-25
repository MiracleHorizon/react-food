import { observer } from 'mobx-react-lite'

import CartPanelItem from './cart-panel-item'
import EmptyPanel from './empty-cart-panel'
import ServiceFeeLabel from '@/ui/service-fee-label'
import { cartStore } from '@/stores/cart.store'
import { deliveryStore } from '@/stores/delivery.store'
import * as Content from './cart-panel-content.styled'

// TODO scrollOnTop логика
const CartPanelContent = () => (
  <Content.Root>
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

export default observer(CartPanelContent)
