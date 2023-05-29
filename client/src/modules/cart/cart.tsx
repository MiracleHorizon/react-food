import CartLayout from '@layouts/Cart'
import CartContent from './CartContent'
import { Root } from './Cart.styled'

const Cart = () => (
  <CartLayout title='Моя корзина'>
    <Root>
      <CartContent />
    </Root>
  </CartLayout>
)

export default Cart
