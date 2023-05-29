import type { FC } from 'react'

import type { ShowcaseProductModel } from '@models/product/ShowcaseProduct'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import * as Label from './DiscountPercentLabel.styled'

const DiscountPercentLabel: FC<Props> = ({ discountPercent, className }) => (
  <Label.Root className={className}>
    <Label.Percent>-{discountPercent}%</Label.Percent>
  </Label.Root>
)

export default DiscountPercentLabel

type Props = Pick<ShowcaseProductModel, 'discountPercent'> &
  EmotionClassNameProps
