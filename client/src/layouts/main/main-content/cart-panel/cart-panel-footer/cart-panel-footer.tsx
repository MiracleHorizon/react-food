import { observer } from 'mobx-react-lite'

import OrderInfo from './order-info'
import DeliveryInfo from './delivery-info'
import CartStore from '@/stores/Cart.store'
import StyledFooter from './cart-panel-footer.styled'

const CartPanelFooter = () => (
  <StyledFooter>
    {CartStore.isEmpty ? <DeliveryInfo /> : <OrderInfo />}
  </StyledFooter>
)

export default observer(CartPanelFooter)
