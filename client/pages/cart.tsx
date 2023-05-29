import Cart from '@modules/Cart'
import { useRefreshAuth } from '@hooks/useRefreshAuth'

const CartPage = () => {
  useRefreshAuth()

  return <Cart />
}

export default CartPage
