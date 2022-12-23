import type { NextPage } from 'next'

import CartStore from '@/stores/Cart.store'
import Home from '@/components/home'
import DefaultLayout from '@/layouts/default'
import CartService from '@/services/CartService'
import type { CartProductModel } from '@/models/product/CartProductModel'

const HomePage: NextPage<Props> = ({ cartProducts }) => {
  CartStore.initializeCart(cartProducts)

  return (
    <DefaultLayout title='React.Еда'>
      <Home />
    </DefaultLayout>
  )
}

export default HomePage

export const getStaticProps = async () => {
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
