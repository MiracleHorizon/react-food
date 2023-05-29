import type { FC } from 'react'

import type { CartProductModel } from '@models/product/CartProduct'
import * as Content from './CartProductItemContent.styled'

const CartProductItemContent: FC<Props> = ({
  title,
  imagePath,
  withDiscount,
  formattedWeight
}) => (
  <Content.Root>
    {withDiscount && <Content.DiscountBadge />}
    <Content.ImageContainer>
      <Content.Image src={imagePath} alt={title} sizes='100%' priority fill />
    </Content.ImageContainer>
    <Content.Container>
      <Content.Title>{title}</Content.Title>
      <Content.Weight>{formattedWeight}</Content.Weight>
    </Content.Container>
  </Content.Root>
)

export default CartProductItemContent

interface Props extends Pick<CartProductModel, 'title'> {
  formattedWeight: string
  imagePath: string
  withDiscount: boolean
}
