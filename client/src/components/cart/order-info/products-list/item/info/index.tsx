import Image from 'next/image'
import type { FC } from 'react'

import * as Info from './OrderProductItemInfo.styles'

const OrderProductItemInfo: FC<Props> = ({ title, weight, imageUrl }) => (
  <Info.Root>
    <Image src={imageUrl} width={100} height={100} alt={title + 'image'} />
    <Info.Container>
      <Info.Title>{title}</Info.Title>
      <Info.Weight>{weight}</Info.Weight>
    </Info.Container>
  </Info.Root>
)

export default OrderProductItemInfo

interface Props {
  title: string
  weight: string
  imageUrl: string
}
