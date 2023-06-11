import { useEffect } from 'react'
import type { NextPage } from 'next'

import Home from '@modules/Home'
import { Routes } from '@router/Routes.enum'
import { useRefreshAuth } from '@hooks/useRefreshAuth'
import { useNavigationStore } from '@stores/navigationStore'
import { environmentService } from '@api/EnvironmentService'
import { productCategoriesService } from '@api/ProductCategoriesService'
import type { NavigationCategory } from '@models/NavigationCategory'
import type { ShowcaseProductCategoryModel } from '@models/productCategory/ShowcaseProductCategory'

const HomePage: NextPage<Props> = ({
  navigationCategories,
  productCategories
}) => {
  const setNavigation = useNavigationStore(state => state.setCategories)

  useRefreshAuth()

  useEffect(() => {
    setNavigation(navigationCategories)
  }, [navigationCategories, setNavigation])

  return <Home productCategories={productCategories} />
}

export default HomePage

export const getServerSideProps = async () => {
  try {
    const navigationCategories =
      await environmentService.fetchNavigationCategories()
    const productCategories = await productCategoriesService.fetchAllCategories(
      {
        skip: 0,
        take: 3
      }
    )

    return {
      props: {
        navigationCategories,
        productCategories
      }
    }
  } catch {
    return {
      redirect: {
        destination: Routes.NOT_FOUND,
        permanent: false
      }
    }
  }
}

interface Props {
  navigationCategories: NavigationCategory[]
  productCategories: ShowcaseProductCategoryModel[]
}
