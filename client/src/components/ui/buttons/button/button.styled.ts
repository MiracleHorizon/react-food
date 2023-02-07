import styled from '@emotion/styled'
import { darken, lighten } from 'polished'

import { ButtonVariant } from './button-variant'
import { colors } from '@/styles/variables'

export const Root = styled.button<RootProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 50px;
  padding: 0 16px;
  border-radius: 16px;
  transition: all 100ms ease-out;

  ${p => {
    const bgColor = getBackgroundColorByVariant(p.variant)

    return `
    background: ${bgColor};
    
    &:hover {
      background: ${darken(0.03, bgColor)};
    }
    
    &:active {
      background: ${lighten(0.01, bgColor)};
    }
    `
  }};
`

export const Text = styled.span<TextProps>`
  ${p => p.withIcon && 'margin-left: 6px'};
  font-size: 18px;
  font-weight: 500;
`

interface RootProps {
  variant: ButtonVariant
}

interface TextProps {
  withIcon: boolean
}

const getBackgroundColorByVariant = (variant: ButtonVariant): string => {
  switch (variant) {
    case ButtonVariant.PRIMARY:
      return colors.yellow['1']
    case ButtonVariant.SECONDARY:
      return '#eeeeee'
  }
}
