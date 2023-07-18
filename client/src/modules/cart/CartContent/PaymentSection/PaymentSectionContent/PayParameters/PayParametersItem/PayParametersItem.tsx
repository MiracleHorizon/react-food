import { type FC, memo } from 'react'

import { Item } from './PayParametersItem.styled'

export const PayParametersItem: FC<Props> = memo(({ title, value }) => (
  <Item>
    <span>{title}</span>
    <span>{value}</span>
  </Item>
))

interface Props {
  title: string
  value: string
}
