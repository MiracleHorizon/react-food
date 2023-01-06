import type { NextPage } from 'next'

import CartStore from '@/stores/Cart.store'
import Cart from '@/components/cart'
import CartService from '@/services/CartService'
import type { CartProductModel } from '@/models/product/CartProductModel'

const CartPage: NextPage<Props> = ({ cartProducts }) => {
  CartStore.initializeCart(cartProducts)

  return <Cart />
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
  cartProducts: CartProductModel[]
}
