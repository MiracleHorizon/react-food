import { type FC, memo } from 'react'

import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import * as Button from './OrderButton.styled'

const OrderButton: FC<Props> = ({
  title,
  orderCost,
  withoutCost,
  onClick,
  ...styles
}) => (
  <Button.Root onClick={onClick} {...styles}>
    <Button.Title>{title}</Button.Title>
    {!withoutCost && <Button.Cost>{orderCost}</Button.Cost>}
  </Button.Root>
)

export default memo(OrderButton)

// TODO: orderCost, withoutCost
interface Props extends EmotionClassNameProps {
  title: string
  orderCost: string
  isDisabled: boolean
  withoutCost?: boolean
  isTransparent?: boolean
  onClick?: VoidFunction
}
