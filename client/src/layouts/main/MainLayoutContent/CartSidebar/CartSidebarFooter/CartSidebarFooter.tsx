import DeliveryInfo from './DeliveryInfo'
import OrderInfo from './OrderInfo'
import { useCartStore } from '@stores/cartStore'
import { Root } from './CartSidebarFooter.styled'

const CartSidebarFooter = () => (
  <Root>
    {useCartStore(state => state.isEmpty()) ? <DeliveryInfo /> : <OrderInfo />}
  </Root>
)

export default CartSidebarFooter
