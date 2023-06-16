import dynamic from 'next/dynamic'

import CartLayout from '@layouts/Cart'
import CartContent from './CartContent'
import { useCartStore } from '@stores/cartStore'
import { Root } from './Cart.styled'

const EmptyCart = dynamic(import('./EmptyCart'))

const Cart = () => {
  const isCartEmpty = useCartStore(state => state.isEmpty())

  return (
    <CartLayout title='Моя корзина'>
      <Root>{isCartEmpty ? <EmptyCart /> : <CartContent />}</Root>
    </CartLayout>
  )
}

export default Cart
