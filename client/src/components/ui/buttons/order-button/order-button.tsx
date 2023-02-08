import { FC, memo } from 'react'

import * as Button from './order-button.styled'

const OrderButton: FC<Props> = ({
  title,
  cost,
  onClick,
  withoutCost,
  ...stylesData
}) => (
  <Button.Root onClick={onClick} {...stylesData}>
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
  className?: string
}
