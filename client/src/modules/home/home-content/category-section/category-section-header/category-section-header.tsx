import type { FC } from 'react'

import LoadMoreButton from './load-more-button'
import { Routes } from '@router/routes.enum'
import type { ProductCategoryModel } from '@/modules/product-category'
import * as Header from './category-section-header.styled'

const ProductCategorySectionHeader: FC<
  Pick<ProductCategoryModel, 'id' | 'title' | 'imagePath'>
> = ({ id, title, imagePath }) => (
  <Header.Root>
    <Header.Content>
      {imagePath ? (
        <Header.Image backgroundImage={imagePath} />
      ) : (
        <Header.ImageFallback />
      )}
      <Header.Title>
        <Header.TitleLink href={`${Routes.CATEGORY}/${id}`}>
          {title}
        </Header.TitleLink>
      </Header.Title>
    </Header.Content>
    <LoadMoreButton categoryId={id} />
  </Header.Root>
)

export default ProductCategorySectionHeader
