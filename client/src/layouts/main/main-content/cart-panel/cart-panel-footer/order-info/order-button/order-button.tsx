import { FC, memo } from 'react'

import * as Button from './order-button.styled'

// TODO Доработать пропс
const OrderButton: FC<Props> = ({ title, cost, disabled, onClick }) => (
  <Button.Root disabled={disabled} onClick={onClick}>
    <Button.Title>{title}</Button.Title>
    <Button.Cost>{cost}</Button.Cost>
  </Button.Root>
)

export default memo(OrderButton)

interface Props {
  title: string
  cost: string
  disabled: boolean
  onClick?: () => void
}
