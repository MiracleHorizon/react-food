import { useEffect } from 'react'
import type { GetServerSidePropsContext, NextPage } from 'next'

import ProductCategory from '@modules/ProductCategory'
import { useNavigationStore } from '@stores/navigationStore'
import { useRefreshAuth } from '@hooks/useRefreshAuth'
import { environmentService } from '@api/EnvironmentService'
import { productCategoriesService } from '@api/ProductCategoriesService'
import { Routes } from '@router/Routes.enum'
import { ParsedUrlQueryHandler } from '@utils/ParsedUrlQueryHandler'
import type { NavigationCategory } from '@models/NavigationCategory'
import type { ProductCategoryModel } from '@models/productCategory/ProductCategory'

const ProductCategoryPage: NextPage<Props> = ({
  navigationCategories,
  productCategory
}) => {
  const setNavigation = useNavigationStore(state => state.setCategories)

  useRefreshAuth()

  useEffect(() => {
    setNavigation(navigationCategories)
  }, [navigationCategories, setNavigation])
  return <ProductCategory {...productCategory} />
}

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
    const navigationCategories =
      await environmentService.fetchNavigationCategories()

    return {
      props: {
        productCategory,
        navigationCategories
      }
    }
  } catch {
    return {
      redirect: {
        destination: Routes.HOME,
        permanent: true
      }
    }
  }
}

interface Props {
  navigationCategories: NavigationCategory[]
  productCategory: ProductCategoryModel
}
