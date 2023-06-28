import type { FC } from 'react'

import SubcategoriesNavigation from './SubcategoriesNavigation'
import { Routes } from '@router/Routes.enum'
import type { BreadcrumbItem } from '@ui/Breadcrumb'
import type { ProductSubcategoryModel } from '@models/productCategory/ProductSubcategory'
import * as Header from './ProductCategoryHeader.styled'

const breadcrumbItems: BreadcrumbItem[] = [
  { title: 'Главная', href: Routes.HOME }
]

const ProductCategoryHeader: FC<Props> = ({ title, subcategories }) => (
  <Header.Root>
    <Header.Breadcrumb items={breadcrumbItems} withFinishingSeparator />
    <Header.TitleArticle>
      <Header.Title>{title}</Header.Title>
    </Header.TitleArticle>
    <SubcategoriesNavigation subcategories={subcategories} />
  </Header.Root>
)

export default ProductCategoryHeader

interface Props {
  title: string
  subcategories: ProductSubcategoryModel[]
}
