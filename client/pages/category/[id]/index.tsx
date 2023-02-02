import type { GetServerSidePropsContext, NextPage } from 'next'

import ProductCategory, {
  ProductCategoryModel,
  productCategoryService
} from '@/modules/product-category'
import {
  baseMainLayoutApiRequest,
  BaseMainLayoutApiRequest
} from '@/layouts/main'
import { ParsedUrlQueryHandler } from '@/utils/parsed-url-query-handler'
import { CART_ID } from '@/utils/constants/mock-user'

const CategoryPage: NextPage<Props> = props => <ProductCategory {...props} />

export default CategoryPage

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = new ParsedUrlQueryHandler(context.query).getId()
  const category = await productCategoryService.fetchOneCategory(id)
  const environmentData = await baseMainLayoutApiRequest(CART_ID)

  return {
    props: {
      category,
      ...environmentData
    }
  }
}

export interface Props extends BaseMainLayoutApiRequest {
  category: ProductCategoryModel
}
