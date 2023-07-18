import type { FC } from 'react'

import { SmallPlusSvg } from '@ui/svg/SmallPlusSvg'
import { SmallMinusSvg } from '@ui/svg/SmallMinusSvg'
import type { CartProductHocProps } from '@hoc/withCartProduct'
import * as Label from './ChangeCountLabel.styled'

export const ChangeCountLabel: FC<Props> = ({
  count,
  actions: { increment, decrement }
}) => (
  <Label.Root>
    <Label.Button placement='left' onClick={decrement}>
      <SmallMinusSvg />
    </Label.Button>
    <Label.Count>{count}</Label.Count>
    <Label.Button placement='right' onClick={increment}>
      <SmallPlusSvg />
    </Label.Button>
  </Label.Root>
)

interface Props extends Pick<CartProductHocProps, 'actions'> {
  count: number
}
