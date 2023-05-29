import type { FC } from 'react'

import MainLayout from '@layouts/Main'
import HomeContent from './HomeContent'
import EmptyHome from './EmptyHome'
import type { ShowcaseProductCategoryModel } from '@models/productCategory/ShowcaseProductCategory'

const Home: FC<Props> = ({ productCategories }) => (
  <MainLayout title='Главная' withSidePanels>
    {productCategories.length > 0 ? (
      <HomeContent productCategories={productCategories} />
    ) : (
      <EmptyHome />
    )}
  </MainLayout>
)

export default Home

interface Props {
  productCategories: ShowcaseProductCategoryModel[]
}
