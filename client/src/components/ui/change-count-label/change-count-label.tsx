import type { FC } from 'react'

import ChangeCountButton from '@ui/buttons/change-count-button'
import * as Bar from './change-count-label.styled'

const ChangeCountLabel: FC<Props> = ({
  value,
  decrement,
  increment,
  isDecrementDisabled,
  isIncrementDisabled
}) => (
  <Bar.Root data-ui='change-count-label'>
    <ChangeCountButton
      destination='decrement'
      onClick={decrement}
      disabled={isDecrementDisabled}
    />
    <Bar.Count>{value}</Bar.Count>
    <ChangeCountButton
      destination='increment'
      onClick={increment}
      disabled={isIncrementDisabled}
    />
  </Bar.Root>
)

export default ChangeCountLabel

interface Props {
  value: number
  decrement: () => void
  increment: () => void
  isDecrementDisabled?: boolean
  isIncrementDisabled?: boolean
}
