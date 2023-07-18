import dynamic from 'next/dynamic'

import { CartLayout } from '@layouts/Cart'
import { useCartStore } from '@stores/cartStore'
import { Root } from './Cart.styled'

const EmptyCart = dynamic(import('./EmptyCart').then(mod => mod.EmptyCart))
// TODO: Loader
const CartContent = dynamic(
  import('./CartContent').then(mod => mod.CartContent),
  { ssr: false }
)

export const Cart = () => {
  const isCartEmpty = useCartStore(state => state.isEmpty())

  return (
    <CartLayout title='Моя корзина'>
      <Root>{isCartEmpty ? <EmptyCart /> : <CartContent />}</Root>
    </CartLayout>
  )
}
