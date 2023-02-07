import type { GetServerSidePropsContext, NextPage } from 'next'

import {
  productCategoryService,
  ProductSubcategoryModel
} from '@/modules/product-category'
import ProductSubcategory, {
  productSubcategoryService
} from '@/modules/product-subcategory'
import {
  EnvironmentData,
  fetchEnvironmentData,
  initializeEnvironmentData
} from '@lib/environment'
import { Routes } from '@/types/routes'
import { ParsedUrlQueryHandler } from '@/utils/parsed-url-query-handler'

const ProductSubcategoryPage: NextPage<Props> = ({
  environmentData,
  ...props
}) => {
  initializeEnvironmentData(environmentData)

  return <ProductSubcategory {...props} />
}

export default ProductSubcategoryPage

export const getServerSideProps = async ({
  query
}: GetServerSidePropsContext) => {
  try {
    const parsedUrlQueryHandler = new ParsedUrlQueryHandler(query)
    const categoryId = parsedUrlQueryHandler.getCustomQuery('categoryId')
    const subcategoryId = parsedUrlQueryHandler.getCustomQuery('subcategoryId')

    const category = await productCategoryService.fetchOne(categoryId)
    const subcategory = await productSubcategoryService.fetchOne(subcategoryId)
    const environmentData = await fetchEnvironmentData()

    return {
      props: {
        environmentData,
        subcategory,
        categoryTitle: category.title
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
  environmentData: EnvironmentData
  subcategory: ProductSubcategoryModel
  categoryTitle: string
}
