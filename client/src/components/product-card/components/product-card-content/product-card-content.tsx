import { FC, memo } from 'react'

import ContentPrice from './product-card-price'
import type { ProductModel } from '@entities/product'
import type { IProductCardVariant } from '@components/product-card'
import * as Content from './product-card-content.styled'

const ProductCardContent: FC<Props> = ({
  title,
  weight,
  variant,
  ...priceProps
}) => (
  <Content.Root variant={variant}>
    <Content.Container>
      <ContentPrice {...priceProps} />
      <Content.Title variant={variant}>{title}</Content.Title>
    </Content.Container>
    <Content.Weight>{weight}</Content.Weight>
  </Content.Root>
)

export default memo(ProductCardContent)

type Props = Pick<ProductModel, 'title'> &
  IProductCardVariant & {
    weight: string
    price: string
    fullPrice: string
    withDiscount: boolean
  }
