import { type FC, memo } from 'react'

import { Routes } from '@router/Routes.enum'
import type { ProductSubcategoryModel } from '@models/productCategory/ProductSubcategory'
import * as Item from './SubcategoriesNavigationItem.styled'

const SubcategoriesNavigationItem: FC<ProductSubcategoryModel> = ({
  id,
  title,
  categoryId
}) => (
  <Item.Root>
    <Item.Link href={`${Routes.CATEGORY}/${categoryId}?subcategory=${id}`}>
      {title}
    </Item.Link>
  </Item.Root>
)

export default memo(SubcategoriesNavigationItem)