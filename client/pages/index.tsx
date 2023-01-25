import type { NextPage } from 'next'

import Home from '@/modules/home'
import { cartStore } from '@/stores/cart.store'
import { navigationStore } from '@/layouts/main'
import { cartService } from '@/api/services/cart.service'
import {
  ProductCategoryModel,
  productCategoryService
} from '@/modules/product-category'
import type { ProductModel } from '@/entities/product'
import type { NavigationCategory } from '@/models/navigation-category'

const HomePage: NextPage<Props> = ({
  cartProducts,
  navCategories,
  productCategories
}) => {
  cartStore.initializeCart(cartProducts)
  navigationStore.setCategories(navCategories)

  return <Home productCategories={productCategories} />
}

export default HomePage

export const getStaticProps = async () => {
  const cartProducts = await cartService.fetchCart()
  const navCategories = await productCategoryService.fetchNavCategories()
  const productCategories = await productCategoryService.fetchAllCategories({
    skip: 0,
    take: 4
  })

  return {
    props: {
      cartProducts,
      navCategories,
      productCategories
    }
  }
}

interface Props {
  cartProducts: ProductModel[]
  navCategories: NavigationCategory[]
  productCategories: ProductCategoryModel[]
}
