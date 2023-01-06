import type { NextPage } from 'next'

import CartStore from '@/stores/Cart.store'
import AppStore from '@/stores/App.store'
import Home from '@/components/home'
import CartService from '@/services/CartService'
import ProductCategoriesService from '@/services/ProductCategoriesService'
import type { CartProductModel } from '@/models/product/CartProductModel'
import type { NavigationCategory } from '@/models/NavigationCategory'

const HomePage: NextPage<Props> = ({ cartProducts, navigationCategories }) => {
  AppStore.setNavigationCategories(navigationCategories)
  CartStore.initializeCart(cartProducts)

  return <Home />
}

export default HomePage

export const getStaticProps = async () => {
  const cartProducts = await CartService.fetchCart()
  const navigationCategories =
    await ProductCategoriesService.fetchNavCategories()

  return {
    props: {
      cartProducts,
      navigationCategories
    }
  }
}

interface Props {
  cartProducts: CartProductModel[]
  navigationCategories: NavigationCategory[]
}
