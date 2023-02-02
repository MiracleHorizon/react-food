import { FC, memo } from 'react'

import ArrowRightSvg from '@/ui/svg/arrow-right-svg'
import StyledButton from './carousel-button.styled'

const CarouselButton: FC<Props> = ({ onClick, ...stylesProps }) => (
  <StyledButton {...stylesProps} onClick={onClick}>
    <ArrowRightSvg />
  </StyledButton>
)

export default memo(CarouselButton)

interface Props {
  dest: 'next' | 'prev'
  isActive: boolean
  onClick: () => void
}
