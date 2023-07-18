import { type FC, memo } from 'react'

import plusIconPng from '@public/images/plus.png'
import minusIconPng from '@public/images/minus.png'
import { Button } from './ChangeCountButton.styled'

export const ChangeCountButton: FC<Props> = memo(
  ({ destination, isDisabled, onClick }) => (
    <Button
      imagePath={(destination === 'increment' ? plusIconPng : minusIconPng).src}
      isDisabled={isDisabled}
      onClick={onClick}
    />
  )
)

interface Props {
  destination: 'increment' | 'decrement'
  onClick: VoidFunction
  isDisabled?: boolean
}
