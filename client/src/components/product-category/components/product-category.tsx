import type { FC } from 'react'

import MainLayout from '@/layouts/main'
import CategoryShowcase from './showcase'
import CartStore from '@/stores/Cart.store'
import NavigationStore from '@/stores/Navigation.store'
import ProductCategoryStore from '../product-category.store'
import type { Props } from '@/pages/category/[id]'
import * as Category from './product-category.styled'

const ProductCategory: FC<Props> = ({
  cartProducts,
  navCategories,
  category
}) => {
  CartStore.initializeCart(cartProducts)
  NavigationStore.setCategories(navCategories)
  ProductCategoryStore.setCategory(category)

  return (
    <MainLayout title={category.title}>
      <Category.Root>
        <Category.Title>{category.title}</Category.Title>
        <CategoryShowcase />
      </Category.Root>
    </MainLayout>
  )
}

export default ProductCategory
