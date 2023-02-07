import type { FC } from 'react'

import MainLayout from '@/layouts/main'
import ProductsGrid from '@/components/products-grid'
import SubcategoryHeader from './product-subcategory-header'
import { APP_TITLE } from '@/utils/constants/app'
import { useRefreshAuth } from '@/hooks/useRefreshAuth'
import type { Props } from '@/pages/category/[categoryId]/subcategory/[subcategoryId]'
import { StyledWrapper } from './product-subcategory.styled'

const ProductSubcategory: FC<Omit<Props, 'environmentData'>> = ({
  categoryTitle,
  subcategory
}) => {
  useRefreshAuth()

  return (
    <MainLayout title={`${subcategory.title} | ${APP_TITLE}`}>
      <StyledWrapper>
        <SubcategoryHeader {...subcategory} categoryTitle={categoryTitle} />
        <ProductsGrid products={subcategory.products} />
      </StyledWrapper>
    </MainLayout>
  )
}

export default ProductSubcategory
