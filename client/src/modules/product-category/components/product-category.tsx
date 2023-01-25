import type { FC } from 'react'

import MainLayout, { navigationStore } from '@/layouts/main'
import CategoryShowcase from './showcase'
import { cartStore } from '@/stores/cart.store'
import type { Props } from '@/pages/category/[id]'
import * as Category from './product-category.styled'

const ProductCategory: FC<Props> = ({
  cartProducts,
  navCategories,
  category
}) => {
  cartStore.initializeCart(cartProducts)
  navigationStore.setCategories(navCategories)

  return (
    <MainLayout title={category.title}>
      <Category.Root>
        <Category.Title>{category.title}</Category.Title>
        <CategoryShowcase {...category} />
      </Category.Root>
    </MainLayout>
  )
}

export default ProductCategory
