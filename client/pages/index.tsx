import type { NextPage } from 'next'

import Home from '@/modules/home'
import { useCartStore } from '@/stores/cart.store'
import {
  baseMainLayoutApiRequest,
  BaseMainLayoutApiRequest,
  useNavigationStore
} from '@/layouts/main'
import {
  ProductCategoryModel,
  productCategoryService
} from '@/modules/product-category'
import { CART_ID } from '@/utils/constants/mock-user'
import type { PaginationParams } from '@/api/models/pagination-params.model'

const HomePage: NextPage<Props> = ({
  cart,
  orderParameters,
  navCategories,
  productCategories
}) => {
  useCartStore.initialize(cart)
  useCartStore.setParameters(orderParameters)
  useNavigationStore.setCategories(navCategories)

  return <Home productCategories={productCategories} />
}

export default HomePage

export const getStaticProps = async () => {
  const startPaginationParams: PaginationParams = {
    skip: 0,
    take: 3
  }
  const productCategories = await productCategoryService.fetchAllCategories(
    startPaginationParams
  )

  const environmentData = await baseMainLayoutApiRequest(CART_ID)

  return {
    props: {
      productCategories,
      ...environmentData
    }
  }
}

interface Props extends BaseMainLayoutApiRequest {
  productCategories: ProductCategoryModel[]
}
