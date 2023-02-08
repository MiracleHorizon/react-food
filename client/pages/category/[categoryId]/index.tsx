import type { GetServerSidePropsContext, NextPage } from 'next'

import ProductCategory, {
  ProductCategoryModel,
  productCategoryService
} from '@modules/product-category'
import { ParsedUrlQueryHandler } from '@utils/parsed-url-query-handler'
import {
  EnvironmentData,
  fetchEnvironmentData,
  initializeEnvironmentData
} from '@lib/environment'
import { Routes } from '@router/routes.enum'

const ProductCategoryPage: NextPage<Props> = ({
  category,
  environmentData
}) => {
  initializeEnvironmentData(environmentData)

  return <ProductCategory {...category} />
}

export default ProductCategoryPage

export const getServerSideProps = async ({
  query
}: GetServerSidePropsContext) => {
  try {
    const parsedUrlQueryHandler = new ParsedUrlQueryHandler(query)
    const categoryId = parsedUrlQueryHandler.getCustomQuery('categoryId')

    const category = await productCategoryService.fetchOne(categoryId)
    const environmentData = await fetchEnvironmentData()

    return {
      props: {
        category,
        environmentData
      }
    }
  } catch {
    return {
      redirect: {
        destination: Routes.HOME,
        permanent: false
      }
    }
  }
}

export interface Props {
  category: ProductCategoryModel
  environmentData: EnvironmentData
}
