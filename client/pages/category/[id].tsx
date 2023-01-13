import type { GetServerSidePropsContext, NextPage } from 'next'

import ApplicationStore from '@/stores/Application.store'
import CartStore from '@/stores/Cart.store'
import ProductCategoryStore from '@/stores/ProductCategory.store'
import ProductCategory from '@/components/product-category'
import CartService from '@/services/CartService'
import ProductCategoriesService from '@/services/ProductCategoriesService'
import type { CartProductModel } from '@/models/product/CartProductModel'
import type { ProductCategoryModel } from '@/models/product/ProductCategoryModel'
import type { NavigationCategory } from '@/models/NavigationCategory'

const CategoryPage: NextPage<Props> = ({
  category,
  cartProducts,
  navigationCategories
}) => {
  ApplicationStore.setNavigationCategories(navigationCategories)
  CartStore.initializeCart(cartProducts)
  ProductCategoryStore.setCategory(category)

  return <ProductCategory />
}

export default CategoryPage

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.query.id

  if (!id) return

  const category = await ProductCategoriesService.fetchOneCategory(
    Array.isArray(id) ? id[0] : id
  )

  const cartProducts = await CartService.fetchCart()

  const navigationCategories =
    await ProductCategoriesService.fetchNavCategories()

  return {
    props: {
      category,
      cartProducts,
      navigationCategories
    }
  }
}

interface Props {
  category: ProductCategoryModel
  cartProducts: CartProductModel[]
  navigationCategories: NavigationCategory[]
}
