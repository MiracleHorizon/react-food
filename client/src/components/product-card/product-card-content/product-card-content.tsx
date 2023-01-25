import type { FC } from 'react'

import type { ProductModel } from '@/entities/product'
import type { IProductCardVariant } from '../product-card-models'
import * as Content from './product-card-content.styled'

const ProductCardContent: FC<Props> = ({ title, price, weight, variant }) => (
  <Content.Root variant={variant}>
    <Content.Container>
      <Content.Price>{price}</Content.Price>
      <Content.Title variant={variant}>{title}</Content.Title>
    </Content.Container>
    <Content.Weight>{weight}</Content.Weight>
  </Content.Root>
)

export default ProductCardContent

type Props = Pick<ProductModel, 'title'> &
  IProductCardVariant & {
    weight: string
    price: string
  }
