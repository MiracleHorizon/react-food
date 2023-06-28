import type { GetServerSidePropsContext, NextPage } from 'next'

import Home from '@modules/Home'
import { productCategoriesService } from '@modules/ProductCategory'
import type { ShowcaseProductCategoryModel } from '@models/productCategory/ShowcaseProductCategory'

const HomePage: NextPage<Props> = props => <Home {...props} />

export default HomePage

export const getServerSideProps = async ({
  res
}: GetServerSidePropsContext) => {
  res.setHeader(
    'Cache-Control',
    `public, s-maxage=10, stale-while-revalidate=${60 * 10 - 1}`
  )

  try {
    const productCategories = await productCategoriesService.fetchAllCategories(
      {
        skip: 0,
        take: 3
      }
    )

    return {
      props: {
        productCategories
      }
    }
  } catch {
    return {
      props: {
        productCategories: []
      }
    }
  }
}

interface Props {
  productCategories: ShowcaseProductCategoryModel[]
}
