import type { FC } from 'react'

import type { ShowcaseProductModel } from '@models/product/ShowcaseProduct'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import * as Percent from './DiscountPercent.styled'

const DiscountPercent: FC<Props> = ({ discountPercent, className }) => (
  <Percent.Root className={className}>
    <Percent.Value>-{discountPercent}%</Percent.Value>
  </Percent.Root>
)

export default DiscountPercent

type Props = Pick<ShowcaseProductModel, 'discountPercent'> &
  EmotionClassNameProps
