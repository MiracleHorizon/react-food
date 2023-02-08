import styled from '@emotion/styled'

import { colors } from '@styles/variables'

const size = 46

const StyledButton = styled.button<Props>`
  position: absolute;
  top: 33%;
  ${p =>
    p.dest === 'next'
      ? `right: -${size / 2 - 1}px`
      : `left: -${size / 2 - 1}px`};
  width: ${size}px;
  height: ${size}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: white;
  box-shadow: 0 8px 20px rgb(117 115 111 / 20%);
  opacity: ${p => (p.isActive ? 1 : 0)};
  z-index: 100;
  transition: opacity 200ms ease-out 0.8s, background 200ms;

  svg {
    width: 26px;
    height: 26px;
    ${p => p.dest === 'prev' && 'transform: rotate(-180deg)'};
  }

  &:hover {
    background: ${colors.gray['5']};
  }

  &:active {
    background: ${colors.gray['7']};
  }
`

export default StyledButton

interface Props {
  dest: 'next' | 'prev'
  isActive: boolean
}
