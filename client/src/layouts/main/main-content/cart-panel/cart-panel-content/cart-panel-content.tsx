import { observer } from 'mobx-react-lite'

import CartStore from '@/stores/Cart.store'
import DeliveryStore from '@/stores/Delivery.store'
import CartPanelItem from './cart-panel-item'
import EmptyPanel from './empty-cart-panel'
import ServiceFeeLabel from '@/ui/service-fee-label'
import * as Content from './cart-panel-content.styled'

// TODO scrollOnTop логика
const CartPanelContent = () => (
  <Content.Root>
    {CartStore.isEmpty ? (
      <EmptyPanel />
    ) : (
      <>
        <Content.List>
          {CartStore.products.map((product, i) => (
            <CartPanelItem
              key={product.id}
              lastInOrder={i + 1 === CartStore.totalPositions}
              {...product}
            />
          ))}
        </Content.List>
        <ServiceFeeLabel
          serviceFee={DeliveryStore.description.getServiceFee()}
        />
      </>
    )}
  </Content.Root>
)

export default observer(CartPanelContent)
