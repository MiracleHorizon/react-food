import type { NextPage } from 'next'

import Cart from '@/modules/cart'
import { useCartStore } from '@/stores/cart.store'
import { cartService } from '@/api/services/cart.service'
import { CART_ID } from '@/utils/constants/mock-user'
import type { CartModel } from '@/models/cart.model'

const CartPage: NextPage<Props> = ({ cart }) => {
  useCartStore.initialize(cart)

  return <Cart />
}

export default CartPage

export const getServerSideProps = async () => {
  const cart = await cartService.fetchCart(CART_ID)

  return {
    props: {
      cart
    }
  }
}

interface Props {
  cart: CartModel
}
