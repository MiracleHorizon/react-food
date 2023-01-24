import { observer } from 'mobx-react-lite'

import CartStore from '@/stores/Cart.store'
import CartBanner from '@/ui/banner/components/cart-banner'
import * as Shortage from './order-cost-shortage.styled'

const OrderCostShortage = () => (
  <Shortage.Root>
    <CartBanner />
    <Shortage.Title>
      Ещё {CartStore.getFormattedOrderCostShortage()} до минимального заказа
    </Shortage.Title>
  </Shortage.Root>
)

export default observer(OrderCostShortage)
