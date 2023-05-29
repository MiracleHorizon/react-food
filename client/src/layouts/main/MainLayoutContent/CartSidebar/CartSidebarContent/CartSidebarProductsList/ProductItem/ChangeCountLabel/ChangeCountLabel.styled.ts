import styled from '@emotion/styled'

import { colors } from '@styles/colors'

const height = 32
const buttonSize = height
const borderRadius = 12

export const Root = styled.div`
  max-width: 100px;
  width: 100px;
  height: ${height}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${borderRadius}px;
  background: ${colors.gray['2']};
`

export const Button = styled.button<ButtonProps>`
  flex: 1 1 auto;
  height: ${buttonSize}px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${p =>
    p.placement === 'left'
      ? `
      border-radius: ${borderRadius}px 0 0 ${borderRadius}px;
      padding-right: 8px;
  `
      : `
      border-radius: 0 ${borderRadius}px ${borderRadius}px 0;
      padding-left: 8px;
  `};

  &:active {
    background: linear-gradient(
      ${p => (p.placement === 'left' ? 90 : -90)}deg,
      ${colors.gray['8']} -70%,
      ${colors.gray['2']} 100%
    );
  }

  svg {
    width: 21px;
    height: 21px;
  }
`

export const Count = styled.span`
  width: 15px;
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
`

interface ButtonProps {
  placement: 'left' | 'right'
}
