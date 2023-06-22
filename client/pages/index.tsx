import { useEffect } from 'react'
import type { GetServerSidePropsContext, NextPage } from 'next'

import Home from '@modules/Home'
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

  useEffect(() => {
    setNavigation(navigationCategories)
  }, [navigationCategories, setNavigation])

  return <Home productCategories={productCategories} />
}

export default HomePage

export const getServerSideProps = async ({
  res
}: GetServerSidePropsContext) => {
  res.setHeader(
    'Cache-Control',
    `public, s-maxage=10, stale-while-revalidate=${60 * 10 - 1}`
  )

  try {
    const navigation = await environmentService.fetchNavigationCategories()
    const productCategories = await productCategoriesService.fetchAllCategories(
      {
        skip: 0,
        take: 3
      }
    )

    return {
      props: {
        navigationCategories: navigation,
        productCategories
      }
    }
  } catch {
    return {
      props: {
        navigationCategories: [],
        productCategories: []
      }
    }
  }
}

interface Props {
  navigationCategories: NavigationCategory[]
  productCategories: ShowcaseProductCategoryModel[]
}
