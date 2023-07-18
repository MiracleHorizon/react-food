import type { FC } from 'react'

import { LoadMoreButton } from './LoadMoreButton'
import { Routes } from '@router/Routes.enum'
import type { ShowcaseProductCategoryModel } from '@models/productCategory/ShowcaseProductCategory'
import * as Header from './ProductCategoryHeader.styled'

export const ProductCategoryHeader: FC<Props> = ({ id, title, imagePath }) => (
  <Header.Root>
    <Header.Content>
      {imagePath ? (
        <Header.Picture bgImagePath={imagePath} />
      ) : (
        <Header.PictureFallback />
      )}
      <Header.Title>
        <Header.Link href={`${Routes.CATEGORY}/${id}`}>{title}</Header.Link>
      </Header.Title>
    </Header.Content>
    <LoadMoreButton productCategoryId={id} />
  </Header.Root>
)

type Props = Pick<ShowcaseProductCategoryModel, 'id' | 'title' | 'imagePath'>
