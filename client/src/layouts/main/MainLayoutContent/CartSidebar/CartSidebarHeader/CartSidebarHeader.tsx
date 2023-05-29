import ClearCartLabel from '@components/cart/ClearCartLabel'
import { useCartStore } from '@stores/cartStore'
import * as Header from './CartSidebarHeader.styled'

const CartSidebarHeader = () => (
  <Header.Root>
    <Header.Title>Корзина</Header.Title>
    {useCartStore(state => !state.isEmpty()) && (
      <ClearCartLabel title='Очистить' withConfirm withImage />
    )}
  </Header.Root>
)

export default CartSidebarHeader
