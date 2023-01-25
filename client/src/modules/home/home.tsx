import type { FC } from 'react'

import MainLayout from '@/layouts/main'
import ProductCategorySection from './category-section'
import { APP_TITLE } from '@/utils/constants/app'
import type { ProductCategoryModel } from '@/modules/product-category'
import * as Styled from './home.styled'

const Home: FC<Props> = ({ productCategories }) => (
  <MainLayout title={`${APP_TITLE} | Главная`}>
    <Styled.Wrapper>
      {productCategories.map(productCategory => (
        <ProductCategorySection key={productCategory.id} {...productCategory} />
      ))}
    </Styled.Wrapper>
  </MainLayout>
)

export default Home

interface Props {
  productCategories: ProductCategoryModel[]
}
