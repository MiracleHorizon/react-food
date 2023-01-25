import type { NextPage } from 'next'

import Cart from '@/modules/cart'
import { cartStore } from '@/stores/cart.store'
import { cartService } from '@/api/services/cart.service'
import type { ProductModel } from '@/entities/product'

const CartPage: NextPage<Props> = ({ cartProducts }) => {
  cartStore.initializeCart(cartProducts)

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
