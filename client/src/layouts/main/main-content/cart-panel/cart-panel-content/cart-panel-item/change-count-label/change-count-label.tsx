import type {FC} from 'react'

import SmallMinusSvg from '@ui/svg/small-minus-svg'
import SmallPlusSvg from '@ui/svg/small-plus-svg'
import * as Label from './change-count-label.styled'

// TODO Добавить отключение кнопки по условию.
const ChangeCountLabel: FC<Props> = ({ count, increment, decrement }) => (
  <Label.Root>
    <Label.Button position='left' onClick={decrement}>
      <SmallMinusSvg />
    </Label.Button>
    <Label.Count>{count}</Label.Count>
    <Label.Button position='right' onClick={increment}>
      <SmallPlusSvg />
    </Label.Button>
  </Label.Root>
)

export default ChangeCountLabel

interface Props {
  count: number
  increment: () => void
  decrement: () => void
}
