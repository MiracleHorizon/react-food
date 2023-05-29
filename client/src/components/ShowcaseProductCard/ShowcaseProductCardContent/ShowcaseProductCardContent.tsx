import type { FC } from 'react'

import ShowcaseProductCardPrice from './ShowcaseProductCardPrice'
import type { ProductModel } from '@models/product/Product'
import type { IShowcaseProductCardVariant } from '@components/ShowcaseProductCard'
import type { MainPriceData } from '@entities/ProductPrice/ProductPrice.types'
import * as Content from './ShowcaseProductCardContent.styled'

const ShowcaseProductCardContent: FC<Props> = ({
  weight,
  title,
  variant,
  ...mainPriceData
}) => (
  <Content.Root variant={variant}>
    <Content.Wrapper>
      <ShowcaseProductCardPrice {...mainPriceData} />
      <Content.Title variant={variant}>{title}</Content.Title>
    </Content.Wrapper>
    <Content.Weight>{weight}</Content.Weight>
  </Content.Root>
)

interface Props
  extends Pick<ProductModel, 'title'>,
    IShowcaseProductCardVariant,
    MainPriceData {
  weight: string
}

export default ShowcaseProductCardContent