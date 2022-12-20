import type { FC } from 'react'

import ChangeCountButton from '@/ui/buttons/ChangeCountButton'
import * as Bar from './ChangeCountBar.styles'

const ChangeCountBar: FC<Props> = ({ value, decrement, increment }) => (
  <Bar.Root>
    <ChangeCountButton destination='decrement' onClick={decrement} />
    <Bar.Count>{value}</Bar.Count>
    <ChangeCountButton destination='increment' onClick={increment} />
  </Bar.Root>
)

export default ChangeCountBar

interface Props {
  value: number
  decrement: () => void
  increment: () => void
}
