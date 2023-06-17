import { type FC, memo } from 'react'

import ChevronSvg from '@ui/svg/ChevronSvg'
import { Root } from './CarouselButton.styled'

const CarouselButton: FC<Props> = props => (
  <Root {...props}>
    <ChevronSvg />
  </Root>
)

export default memo(CarouselButton)

interface Props {
  direction: 'next' | 'prev'
  isActive: boolean
  onClick: VoidFunction
}
