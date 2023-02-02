import type { FC } from 'react'

import HomeContent from './home-content'
import EmptyHome from './empty-home'
import MainLayout from '@/layouts/main'
import { APP_TITLE } from '@/utils/constants/app'
import type { ProductCategoryModel } from '@/modules/product-category'

const Home: FC<Props> = ({ productCategories }) => {
  return (
    <MainLayout title={`${APP_TITLE} | Главная`}>
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
  productCategories: ProductCategoryModel[]
}
