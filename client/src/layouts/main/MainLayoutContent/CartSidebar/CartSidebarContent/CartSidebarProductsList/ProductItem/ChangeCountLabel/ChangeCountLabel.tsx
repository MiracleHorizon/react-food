import type { FC } from 'react'

import SmallPlusSvg from '@ui/svg/SmallPlusSvg'
import SmallMinusSvg from '@ui/svg/SmallMinusSvg'
import type { CartProductHocComponentProps } from '@hoc/withCartProduct'
import * as Label from './ChangeCountLabel.styled'

const ChangeCountLabel: FC<Props> = ({
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

export default ChangeCountLabel

interface Props extends Pick<CartProductHocComponentProps, 'actions'> {
  count: number
}