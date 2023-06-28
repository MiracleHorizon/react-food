import type { GetServerSidePropsContext, NextPage } from 'next'

import ProductCategory from '@modules/ProductCategory'
import ProductSubcategory, {
  productSubcategoriesService
} from '@modules/ProductSubcategory'
import { productCategoriesService } from '@api/ProductCategoriesService'
import { ParsedUrlQueryHandler } from '@utils/ParsedUrlQueryHandler'
import { Routes } from '@router/Routes.enum'
import type { ProductCategoryModel } from '@models/productCategory/ProductCategory'
import type { ProductSubcategoryModel } from '@models/productCategory/ProductSubcategory'

const ProductCategoryPage: NextPage<Props> = ({
  productCategory,
  productSubcategory
}) => (
  <>
    {productCategory && <ProductCategory {...productCategory} />}
    {productSubcategory && <ProductSubcategory {...productSubcategory} />}
  </>
)

export default ProductCategoryPage

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const parsedUrlQueryHandler = new ParsedUrlQueryHandler(ctx.query)

    if (ctx.query?.subcategory) {
      const subcategoryId = parsedUrlQueryHandler.getCustomQuery('subcategory')
      const productSubcategory =
        await productSubcategoriesService.fetchOneSubcategory(subcategoryId)

      return {
        props: {
          productSubcategory
        }
      }
    }

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

type Props = WithCategory | WithSubcategory

interface WithCategory {
  productCategory: ProductCategoryModel
  productSubcategory?: never
}

interface WithSubcategory {
  productSubcategory: ProductSubcategoryModel
  productCategory?: never
}
