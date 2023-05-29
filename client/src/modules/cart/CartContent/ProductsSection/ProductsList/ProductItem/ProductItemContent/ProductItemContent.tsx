import { type FC, memo } from 'react'

import type { CartProductModel } from '@models/product/CartProduct'
import * as Content from './ProductItemContent.styled'

const ProductItemContent: FC<Props> = ({
  title,
  image,
  withDiscount,
  formattedWeight,
  formattedTotalPrice
}) => (
  <Content.Root>
    {withDiscount && <Content.DiscountBadge />}
    <Content.ImageContainer>
      <Content.Image src={image} alt={title} sizes='100%' priority fill />
    </Content.ImageContainer>
    <Content.Wrapper>
      <Content.Title>{title}</Content.Title>
      <div>
        <Content.Weight>{formattedWeight}</Content.Weight>
        <Content.Price>{formattedTotalPrice}</Content.Price>
      </div>
    </Content.Wrapper>
  </Content.Root>
)

export default memo(ProductItemContent)

interface Props extends Pick<CartProductModel, 'title'> {
  image: string
  withDiscount: boolean
  formattedWeight: string
  formattedTotalPrice: string
}
