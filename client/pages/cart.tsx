import type { NextPage } from 'next'

import Cart from '@/components/cart/cart'
import CartStore from '@/stores/Cart.store'
import { cartService } from '@/api/services/Cart.service'
import type { ProductModel } from '@/entities/product'

const CartPage: NextPage<Props> = ({ cartProducts }) => {
  CartStore.initializeCart(cartProducts)

  return <Cart />
}

export default CartPage

export const getServerSideProps = async () => {
  const cartProducts = await cartService.fetchCart()

  return {
    props: {
      cartProducts
    }
  }
}

interface Props {
  cartProducts: ProductModel[]
}
