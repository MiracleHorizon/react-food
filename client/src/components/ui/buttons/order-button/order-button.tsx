import { FC, memo } from 'react'

import * as Button from './order-button.styled'

// TODO Доработать пропс
// TODO Цвета наведения и клика на кнопке
const OrderButton: FC<Props> = ({
  title,
  cost,
  onClick,
  withoutCost,
  ...disabledData
}) => (
  <Button.Root onClick={onClick} {...disabledData}>
    <Button.Title>{title}</Button.Title>
    {!withoutCost && <Button.Cost>{cost}</Button.Cost>}
  </Button.Root>
)

export default memo(OrderButton)

interface Props {
  title: string
  cost: string
  disabled: boolean
  onClick?: () => void
  withoutCost?: boolean
  transparentDisableColor?: boolean
}
