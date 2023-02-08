import { FC, memo } from 'react'

import type { ProductSubcategoryModel } from '@modules/product-category'
import * as Item from './subcategories-navigation-item.styled'

const SubcategoriesNavigationItem: FC<ProductSubcategoryModel> = ({
  id,
  title,
  categoryId
}) => (
  <Item.Root>
    <Item.Link href={`/category/${categoryId}/subcategory/${id}`}>
      {title}
    </Item.Link>
  </Item.Root>
)

export default memo(SubcategoriesNavigationItem)
