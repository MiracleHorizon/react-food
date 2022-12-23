import Image from 'next/image'
import { FC, memo } from 'react'

import * as Info from './OrderProductItemInfo.styles'

const OrderProductItemInfo: FC<Props> = memo(({ title, weight, imageUrl }) => (
  <Info.Root>
    <Image src={imageUrl} width={100} height={100} alt={title + 'image'} />
    <Info.Container>
      <Info.Title>{title}</Info.Title>
      <Info.Weight>{weight}</Info.Weight>
    </Info.Container>
  </Info.Root>
))

OrderProductItemInfo.displayName = 'OrderProductItemInfo'

export default OrderProductItemInfo

interface Props {
  title: string
  weight: string
  imageUrl: string
}
