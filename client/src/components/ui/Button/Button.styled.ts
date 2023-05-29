import styled from '@emotion/styled'
import { darken, lighten } from 'polished'

import { ButtonVariant } from './Button.types'
import { colors } from '@styles/colors'

export const Root = styled.button<RootProps>`
  width: auto;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px 16px 0;
  border-radius: 16px;
  transition: all 100ms ease-out;

  ${p => {
    const bgColor = getBgColorByButtonVariant(p.variant)

    return `
    background: ${bgColor};
    
    &:hover {
      background: ${darken(0.03, bgColor)};
    }
    
    &:active {
      background: ${lighten(0.01, bgColor)};
    }`
  }};
`

export const Title = styled.span<TitleProps>``

interface RootProps {
  variant: ButtonVariant
}

interface TitleProps {
  withLeadIcon: boolean
}

const getBgColorByButtonVariant = (variant: ButtonVariant): string => {
  switch (variant) {
    case ButtonVariant.PRIMARY:
      return colors.yellow.primary
    case ButtonVariant.SECONDARY:
      return '#eeeeee'
  }
}
