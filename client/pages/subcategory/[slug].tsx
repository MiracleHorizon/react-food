import type { GetServerSidePropsContext, NextPage } from 'next'

import ProductSubcategory, {
  productSubcategoryService
} from '@modules/ProductSubcategory'
import { productCategoriesService } from '@api/ProductCategoriesService'
import { ParsedUrlQueryHandler } from '@utils/ParsedUrlQueryHandler'
import { Routes } from '@router/Routes.enum'
import type { ProductSubcategoryModel } from '@models/productCategory/ProductSubcategory'

const ProductSubcategoryPage: NextPage<Props> = props => (
  <ProductSubcategory {...props} />
)

export default ProductSubcategoryPage

export const getServerSideProps = async ({
  query
}: GetServerSidePropsContext) => {
  try {
    const parsedUrlQueryHandler = new ParsedUrlQueryHandler(query)
    const subcategoryId = parsedUrlQueryHandler.getSlug()

    const subcategory = await productSubcategoryService.fetchOneSubcategory(
      subcategoryId
    )
    const category = await productCategoriesService.fetchOneCategory(
      subcategory.categoryId
    )

    return {
      props: {
        productSubcategory: subcategory,
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

interface Props {
  productSubcategory: ProductSubcategoryModel
  categoryTitle: string
}
