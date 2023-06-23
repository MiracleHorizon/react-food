import type { GetServerSidePropsContext, NextPage } from 'next'

import ProductCategory from '@modules/ProductCategory'
import { productCategoriesService } from '@api/ProductCategoriesService'
import { ParsedUrlQueryHandler } from '@utils/ParsedUrlQueryHandler'
import { Routes } from '@router/Routes.enum'
import type { ProductCategoryModel } from '@models/productCategory/ProductCategory'

const ProductCategoryPage: NextPage<Props> = ({ productCategory }) => (
  <ProductCategory {...productCategory} />
)

export default ProductCategoryPage

export const getServerSideProps = async ({
  query
}: GetServerSidePropsContext) => {
  try {
    const parsedUrlQueryHandler = new ParsedUrlQueryHandler(query)
    const categoryId = parsedUrlQueryHandler.getSlug()
    const productCategory = await productCategoriesService.fetchOneCategory(
      categoryId
    )

    return {
      props: {
        productCategory
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

interface Props {
  productCategory: ProductCategoryModel
}
