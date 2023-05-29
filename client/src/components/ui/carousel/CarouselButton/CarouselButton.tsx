import { type FC, memo } from 'react'

import ArrowSvg from '@ui/svg/ArrowSvg'
import { Root } from './CarouselButton.styled'

const CarouselButton: FC<Props> = props => (
  <Root {...props}>
    <ArrowSvg />
  </Root>
)

export default memo(CarouselButton)

interface Props {
  direction: 'next' | 'prev'
  isActive: boolean
  onClick: VoidFunction
}
