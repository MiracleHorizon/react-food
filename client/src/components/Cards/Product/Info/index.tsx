import { FC } from 'react'

import * as Info from './ProductCardInfo.styles'

const ProductCardInfo: FC<Props> = ({ title, price, weight }) => (
  <Info.Root>
    <Info.Description>
      <Info.Price>
        {price}
        <Info.Currency>₽</Info.Currency>
      </Info.Price>
      <Info.Title>{title}</Info.Title>
    </Info.Description>
    <Info.Weight>
      {weight >= 1000 ? `${weight / 1000} кг` : `${weight} г`}
    </Info.Weight>
  </Info.Root>
)

export default ProductCardInfo

interface Props {
  title: string
  price: number
  weight: number
}
