import type { FC } from 'react'

import * as Label from './discount-percent-label.styled'

const DiscountPercentLabel: FC<Props> = ({ percent }) => (
  <Label.Root data-el='discount-percent'>
    <Label.Text>-{percent}%</Label.Text>
  </Label.Root>
)

export default DiscountPercentLabel

interface Props {
  percent: number
}
