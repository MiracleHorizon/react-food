import type { NextPage } from 'next'

import CartStore from '@/stores/Cart.store'
import CartLayout from '@/layouts/cart'
import Cart from '@/components/cart'
import CartService from '@/services/CartService'
import type { TCartProduct } from '@/models/product/TCartProduct'

const CartPage: NextPage<Props> = ({ cartProducts }) => {
  CartStore.initializeCart(cartProducts)

  return (
    <CartLayout title='React.Еда'>
      <Cart />
    </CartLayout>
  )
}

export default CartPage

export const getServerSideProps = async () => {
  const cartProducts = await CartService.fetchCart()

  return {
    props: {
      cartProducts
    }
  }
}

interface Props {
  cartProducts: TCartProduct[]
}
