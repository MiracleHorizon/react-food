import { type FC, memo } from 'react'

import { Root } from './PayParametersItem.styled'

const PayParametersItem: FC<Props> = ({ title, value }) => (
  <Root>
    <span>{title}</span>
    <span>{value}</span>
  </Root>
)

export default memo(PayParametersItem)

interface Props {
  title: string
  value: string
}
