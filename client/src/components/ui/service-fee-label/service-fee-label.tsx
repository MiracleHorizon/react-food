import type { FC } from 'react'

import * as Label from './service-fee-label.styled'

const ServiceFeeLabel: FC<Props> = ({ serviceFee }) => (
  <Label.Root>
    <span>Работа сервиса</span>
    <Label.Value>{serviceFee}</Label.Value>
  </Label.Root>
)

export default ServiceFeeLabel

interface Props {
  serviceFee: string
}
