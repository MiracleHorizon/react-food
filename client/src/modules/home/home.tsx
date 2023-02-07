import type { FC } from 'react'

import HomeContent from './home-content'
import EmptyHome from './empty-home'
import MainLayout from '@/layouts/main'
import { useRefreshAuth } from '@/hooks/useRefreshAuth'
import { APP_TITLE } from '@/utils/constants/app'
import type { ShowcaseProductCategoryModel } from '../product-category'

const Home: FC<Props> = ({ productCategories }) => {
  useRefreshAuth()

  return (
    <MainLayout title={`Главная | ${APP_TITLE}`}>
      <>
        {productCategories.length > 0 ? (
          <HomeContent productCategories={productCategories} />
        ) : (
          <EmptyHome />
        )}
      </>
    </MainLayout>
  )
}

export default Home

interface Props {
  productCategories: ShowcaseProductCategoryModel[]
}
