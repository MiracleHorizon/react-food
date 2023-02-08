import { FC, memo } from 'react'

import ArrowSvg from '@ui/svg/arrow-svg'
import StyledButton from './carousel-button.styled'

const CarouselButton: FC<Props> = ({ onClick, ...stylesProps }) => (
  <StyledButton {...stylesProps} onClick={onClick}>
    <ArrowSvg />
  </StyledButton>
)

export default memo(CarouselButton)

interface Props {
  dest: 'next' | 'prev'
  isActive: boolean
  onClick: () => void
}
