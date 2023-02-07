import type { FC } from 'react'

import MainLayout from '@/layouts/main'
import CategoryHeader from './product-category-header'
import CategoryShowcase from './product-category-showcase'
import { useRefreshAuth } from '@/hooks/useRefreshAuth'
import { APP_TITLE } from '@/utils/constants/app'
import type { ProductCategoryModel } from '@/modules/product-category'
import { StyledWrapper } from './product-category.styled'

const ProductCategory: FC<ProductCategoryModel> = category => {
  useRefreshAuth()

  return (
    <MainLayout title={`${category.title} | ${APP_TITLE}`}>
      <StyledWrapper>
        <CategoryHeader {...category} />
        <CategoryShowcase {...category} />
      </StyledWrapper>
    </MainLayout>
  )
}

export default ProductCategory
