import { type FC, memo } from 'react'

import plusIconPng from '@public/images/plus.png'
import minusIconPng from '@public/images/minus.png'
import { Button } from './ChangeCountButton.styled'

const ChangeCountButton: FC<Props> = ({ destination, isDisabled, onClick }) => (
  <Button
    imagePath={(destination === 'increment' ? plusIconPng : minusIconPng).src}
    isDisabled={isDisabled}
    onClick={onClick}
  />
)

export default memo(ChangeCountButton)

interface Props {
  destination: 'increment' | 'decrement'
  onClick: VoidFunction
  isDisabled?: boolean
}
