import { DeliveryInfo } from './DeliveryInfo'
import { OrderInfo } from './OrderInfo'
import { useCartStore } from '@stores/cartStore'
import { Root } from './CartSidebarFooter.styled'

export const CartSidebarFooter = () => {
  const isCartEmpty = useCartStore(state => state.isEmpty())

  return <Root>{isCartEmpty ? <DeliveryInfo /> : <OrderInfo />}</Root>
}
