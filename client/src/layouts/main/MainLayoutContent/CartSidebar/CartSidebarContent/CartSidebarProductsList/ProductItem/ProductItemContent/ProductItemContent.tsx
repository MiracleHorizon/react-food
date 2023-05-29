import type { FC } from 'react'

import type { ProductModel } from '@models/product/Product'
import * as Content from './ProductItemContent.styled'

const ProductItemContent: FC<Props> = ({
  title,
  withDiscount,
  formattedFullPrice,
  formattedTotalPrice,
  formattedWeight
}) => (
  <Content.Root>
    <Content.Title>{title}</Content.Title>
    <Content.Wrapper>
      {withDiscount ? (
        <>
          <Content.DiscountPrice>{formattedTotalPrice}</Content.DiscountPrice>
          <Content.ThroughFullPrice>
            {formattedFullPrice}
          </Content.ThroughFullPrice>
        </>
      ) : (
        <>
          <Content.TotalPrice>{formattedTotalPrice}</Content.TotalPrice>
          <Content.Dot>·</Content.Dot>
          <Content.Weight>{formattedWeight}</Content.Weight>
        </>
      )}
    </Content.Wrapper>
  </Content.Root>
)

export default ProductItemContent

interface Props extends Pick<ProductModel, 'title'> {
  formattedWeight: string
  formattedFullPrice: string
  formattedTotalPrice: string
  withDiscount: boolean
}
