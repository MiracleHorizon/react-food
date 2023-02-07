import { FC, memo } from 'react'

import SubcategoriesNavigation from './subcategories-navigation'
import Breadcrumb, { BreadcrumbItem } from '@/ui/breadcrumb'
import { Routes } from '@router/routes.enum'
import type { ProductSubcategoryModel } from '@/modules/product-category'
import * as Header from './product-category-header.styled'

const breadcrumbItems: BreadcrumbItem[] = [
  { title: 'Главная', href: Routes.HOME }
]

const ProductCategoryHeader: FC<Props> = ({ title, subcategories }) => (
  <Header.Root>
    <Breadcrumb items={breadcrumbItems} withFinishingSeparator />
    <Header.Title>{title}</Header.Title>
    <SubcategoriesNavigation subcategories={subcategories} />
  </Header.Root>
)

export default memo(ProductCategoryHeader)

interface Props {
  title: string
  subcategories: ProductSubcategoryModel[]
}
