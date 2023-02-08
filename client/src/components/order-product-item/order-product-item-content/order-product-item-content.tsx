import { FC, memo } from 'react'

import DiscountIcon from '@ui/discount-icon'
import type { ProductModel } from '@entities/product'
import * as Content from './order-product-item-content.styled'

const OrderProductItemContent: FC<Props> = ({
  variant,
  title,
  imagePath,
  weight,
  withDiscount
}) => (
  <Content.Root variant={variant}>
    {withDiscount && <DiscountIcon />}
    <Content.Image
      src={imagePath}
      width={variant === 'default' ? 100 : 48}
      height={variant === 'default' ? 100 : 48}
      alt={title}
    />
    <Content.Container variant={variant}>
      <Content.Title>{title}</Content.Title>
      <Content.Weight>{weight}</Content.Weight>
    </Content.Container>
  </Content.Root>
)

export default memo(OrderProductItemContent)

type Props = Pick<ProductModel, 'title'> & {
  variant: 'default' | 'small'
  imagePath: string
  weight: string
  withDiscount?: boolean
}
