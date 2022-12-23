import type { FC } from 'react'

import ChangeCountButton from '@/ui/buttons/change-count'
import * as Bar from './ChangeCountBar.styles'

const ChangeCountBar: FC<Props> = ({
  value,
  decrement,
  increment,
  isDecrementDisabled,
  isIncrementDisabled
}) => (
  <Bar.Root>
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

export default ChangeCountBar

interface Props {
  value: number
  decrement: () => void
  increment: () => void
  isDecrementDisabled?: boolean
  isIncrementDisabled?: boolean
}
