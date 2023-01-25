import type { GetServerSidePropsContext, NextPage } from 'next'

import ProductCategory, {
  ProductCategoryModel,
  productCategoryService
} from '@/modules/product-category'
import { UrlQueryHandler } from '@/utils/url-query-handler'
import { cartService } from '@/api/services/cart.service'
import type { ProductModel } from '@/entities/product'
import type { NavigationCategory } from '@/models/navigation-category'

const CategoryPage: NextPage<Props> = props => <ProductCategory {...props} />

export default CategoryPage

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = new UrlQueryHandler(context.query).getId()
  const category = await productCategoryService.fetchOneCategory(id)
  const navCategories = await productCategoryService.fetchNavCategories()
  const cartProducts = await cartService.fetchCart()

  return {
    props: {
      category,
      cartProducts,
      navCategories
    }
  }
}

export interface Props {
  category: ProductCategoryModel
  cartProducts: ProductModel[]
  navCategories: NavigationCategory[]
}
