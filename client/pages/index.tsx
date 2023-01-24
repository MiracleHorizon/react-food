import type { NextPage } from 'next'

import Home from '@/components/home'
import CartStore from '@/stores/Cart.store'
import NavigationStore from '@/stores/Navigation.store'
import { cartService } from '@/api/services/Cart.service'
import { productCategoryService } from '@/components/product-category'
import type { ProductModel } from '@/entities/product'
import type { NavigationCategory } from '@/models/navigation-category'

const HomePage: NextPage<Props> = ({ cartProducts, navCategories }) => {
  CartStore.initializeCart(cartProducts)
  NavigationStore.setCategories(navCategories)

  return <Home />
}

export default HomePage

export const getStaticProps = async () => {
  const cartProducts = await cartService.fetchCart()
  const navCategories = await productCategoryService.fetchNavCategories()

  return {
    props: {
      cartProducts,
      navCategories
    }
  }
}

interface Props {
  cartProducts: ProductModel[]
  navCategories: NavigationCategory[]
}
