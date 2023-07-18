import type { FC } from 'react'

import { MainLayout } from '@layouts/Main'
import { HomeContent } from './HomeContent'
import { EmptyHome } from './EmptyHome'
import type { ShowcaseProductCategoryModel } from '@models/productCategory/ShowcaseProductCategory'

export const Home: FC<Props> = ({ productCategories }) => (
  <MainLayout title='Главная' withSidePanels>
    {productCategories.length > 0 ? (
      <HomeContent productCategories={productCategories} />
    ) : (
      <EmptyHome />
    )}
  </MainLayout>
)

interface Props {
  productCategories: ShowcaseProductCategoryModel[]
}
