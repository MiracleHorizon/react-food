import { observer } from 'mobx-react-lite'

import CartBanner from '@/ui/banner/components/cart-banner'
import { cartStore } from '@/stores/cart.store'
import * as Shortage from './order-cost-shortage.styled'

const OrderCostShortage = () => (
  <Shortage.Root>
    <CartBanner />
    <Shortage.Title>
      Ещё {cartStore.formattedOrderCostShortage} до минимального заказа
    </Shortage.Title>
  </Shortage.Root>
)

export default observer(OrderCostShortage)