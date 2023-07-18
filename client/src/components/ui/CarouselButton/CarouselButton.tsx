import type { FC } from 'react'

import { ChevronSvg } from '@ui/svg/ChevronSvg'
import { Root } from './CarouselButton.styled'

export const CarouselButton: FC<Props> = props => (
  <Root {...props}>
    <ChevronSvg />
  </Root>
)

interface Props {
  direction: 'next' | 'prev'
  isActive: boolean
  onClick: VoidFunction
}
