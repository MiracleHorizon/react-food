import Cart from '@/modules/cart'
import { useRefreshAuth } from '@/hooks/useRefreshAuth'

// TODO: Page loader.
const CartPage = () => {
  useRefreshAuth()

  return <Cart />
}

export default CartPage
