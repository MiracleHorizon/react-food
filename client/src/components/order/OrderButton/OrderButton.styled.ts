import styled from '@emotion/styled'
import { darken } from 'polished'

import { colors } from '@styles/colors'

export const Root = styled.button<RootProps>`
  width: 100%;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  border-radius: 16px;
  color: ${colors.black.primary};
  transition: background 20ms ease-out;
  ${p => {
    const disableColor = p.isTransparent
      ? colors.gray['2']
      : colors.yellow.primary
    const bgColor = p.isDisabled ? disableColor : colors.yellow.primary

    return `
      background: ${bgColor};
      ${p.isDisabled && 'opacity: 0.6'};
      ${p.isDisabled && 'pointer-events: none'};
      
      ${
        !p.isDisabled &&
        `
      &:hover {
        background: ${darken(0.015, bgColor)};
      }`
      };
    `
  }};
`

export const Title = styled.span`
  margin-right: 16px;
  font-size: 17px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
`

export const Cost = styled.span`
  font-size: 19px;
  font-weight: 600;
`

interface RootProps {
  isDisabled: boolean
  isTransparent?: boolean
}
