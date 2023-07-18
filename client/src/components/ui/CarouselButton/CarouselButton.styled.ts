import styled from '@emotion/styled'

import { colors } from '@styles/colors'

const buttonSize = 46

export const Root = styled.button<RootProps>`
  position: absolute;
  top: 33%;
  ${p =>
    p.direction === 'next'
      ? `right: -${buttonSize / 2 - 1}px`
      : `left: -${buttonSize / 2 - 1}px`};
  width: ${buttonSize}px;
  height: ${buttonSize}px;
  display: ${p => (p.isActive ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: white;
  box-shadow: 0 8px 20px rgb(117 115 111 / 20%);
  z-index: 100;
  transition: background 200ms;

  svg {
    width: 26px;
    height: 26px;
    ${p => p.direction === 'prev' && 'transform: rotate(-180deg)'};
  }

  &:hover {
    background: ${colors.gray['5']};
  }

  &:active {
    background: ${colors.gray['7']};
  }
`

interface RootProps {
  direction: 'next' | 'prev'
  isActive: boolean
}
