import { observer } from 'mobx-react-lite'

import OrderInfo from './order-info'
import DeliveryInfo from './delivery-info'
import { cartStore } from '@/stores/cart.store'
import StyledFooter from './cart-panel-footer.styled'

const CartPanelFooter = () => (
  <StyledFooter>
    {cartStore.isEmpty ? <DeliveryInfo /> : <OrderInfo />}
  </StyledFooter>
)

export default observer(CartPanelFooter)
