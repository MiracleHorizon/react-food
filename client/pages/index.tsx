import type { NextPage } from 'next'

import Home from '@modules/home'
import {
  productCategoryService,
  ShowcaseProductCategoryModel
} from '@modules/product-category'
import {
  EnvironmentData,
  fetchEnvironmentData,
  initializeEnvironmentData
} from '@lib/environment'

const HomePage: NextPage<Props> = ({ environmentData, productCategories }) => {
  initializeEnvironmentData(environmentData)

  return <Home productCategories={productCategories} />
}

export default HomePage

export const getServerSideProps = async () => {
  const environmentData = await fetchEnvironmentData()
  const productCategories = await productCategoryService.fetchAll({
    skip: 0,
    take: 3
  })

  return {
    props: {
      environmentData,
      productCategories
    }
  }
}

interface Props {
  productCategories: ShowcaseProductCategoryModel[]
  environmentData: EnvironmentData
}
