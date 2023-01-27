import { FC, memo } from 'react'

import type { ProductModel } from '@/entities/product'
import * as Content from './order-product-item-content.styled'

const OrderProductItemContent: FC<Props> = ({ title, imagePath, weight }) => (
  <Content.Root>
    <Content.Image src={imagePath} width={100} height={100} alt={title} />
    <Content.Container>
      <Content.Title>{title}</Content.Title>
      <Content.Weight>{weight}</Content.Weight>
    </Content.Container>
  </Content.Root>
)

export default memo(OrderProductItemContent)

type Props = Pick<ProductModel, 'title'> & {
  imagePath: string
  weight: string
}
