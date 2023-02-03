import type { FC } from 'react'

import MainLayout, { useNavigationStore } from '@/layouts/main'
import Breadcrumb, { BreadcrumbItem } from '@/ui/breadcrumb'
import CategoryShowcase from './showcase'
import { useCartStore } from '@/stores/cart.store'
import { APP_TITLE } from '@/utils/constants/app'
import { Routes } from '@/types/routes'
import type { Props } from '@/pages/category/[id]'
import * as Category from './product-category.styled'

const breadcrumbItems: BreadcrumbItem[] = [
  { title: 'Главная', href: Routes.HOME }
]

const ProductCategory: FC<Props> = ({ category, navCategories, cart }) => {
  useCartStore.initialize(cart)
  useNavigationStore.setCategories(navCategories)

  return (
    <MainLayout title={`${APP_TITLE} | ${category.title}`}>
      <Category.Root>
        <Breadcrumb items={breadcrumbItems} withFinishingSeparator />
        <Category.Title>{category.title}</Category.Title>
        <CategoryShowcase {...category} />
      </Category.Root>
    </MainLayout>
  )
}

export default ProductCategory
