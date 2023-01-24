import ClearButton from './cart-panel-clear-button'
import * as Header from './cart-panel-header.styled'

const CartPanelHeader = () => (
  <Header.Root>
    <Header.Title>Корзина</Header.Title>
    <ClearButton />
  </Header.Root>
)

export default CartPanelHeader
