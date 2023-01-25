import type { FC } from 'react'

import LoadMoreButton from './load-more-button'
import { Routes } from '@/types/Routes'
import type { ProductCategoryModel } from '@/modules/product-category'
import * as Header from './category-section-header.styled'

const ProductCategorySectionHeader: FC<
  Pick<ProductCategoryModel, 'id' | 'title' | 'imageUrl'>
> = ({ id, title, imageUrl }) => (
  <Header.Root>
    <Header.Content>
      {imageUrl ? (
        <Header.Image backgroundImage={imageUrl} />
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
