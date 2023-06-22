import { useEffect } from 'react'
import type { GetServerSidePropsContext, NextPage } from 'next'

import ProductSubcategory, {
  productSubcategoryService
} from '@modules/ProductSubcategory'
import { useNavigationStore } from '@stores/navigationStore'
import { environmentService } from '@api/EnvironmentService'
import { productCategoriesService } from '@api/ProductCategoriesService'
import { ParsedUrlQueryHandler } from '@utils/ParsedUrlQueryHandler'
import { Routes } from '@router/Routes.enum'
import type { NavigationCategory } from '@models/NavigationCategory'
import type { ProductSubcategoryModel } from '@models/productCategory/ProductSubcategory'

const ProductSubcategoryPage: NextPage<Props> = ({
  navigationCategories,
  ...props
}) => {
  const setNavigation = useNavigationStore(state => state.setCategories)

  useEffect(() => {
    setNavigation(navigationCategories)
  }, [navigationCategories, setNavigation])

  return <ProductSubcategory {...props} />
}

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
    const navigationCategories =
      await environmentService.fetchNavigationCategories()

    return {
      props: {
        navigationCategories,
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
  navigationCategories: NavigationCategory[]
  productSubcategory: ProductSubcategoryModel
  categoryTitle: string
}
