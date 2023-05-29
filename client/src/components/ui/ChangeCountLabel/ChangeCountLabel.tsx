import type { FC } from 'react'

import ChangeCountButton from './ChangeCountButton'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import * as Label from './ChangeCountLabel.styled'

const ChangeCountLabel: FC<Props> = ({
  value,
  decrement,
  increment,
  isDecrementDisabled,
  isIncrementDisabled,
  className
}) => (
  <Label.Root className={className}>
    <ChangeCountButton
      destination='decrement'
      isDisabled={isDecrementDisabled}
      onClick={decrement}
    />
    <Label.Count>{value}</Label.Count>
    <ChangeCountButton
      destination='increment'
      isDisabled={isIncrementDisabled}
      onClick={increment}
    />
  </Label.Root>
)

export default ChangeCountLabel

interface Props extends EmotionClassNameProps {
  value: number
  decrement: VoidFunction
  increment: VoidFunction
  isDecrementDisabled?: boolean
  isIncrementDisabled?: boolean
}
