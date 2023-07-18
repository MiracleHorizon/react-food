import styled from '@emotion/styled'
import { darken, lighten } from 'polished'
import { css } from '@emotion/react'

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

    return css`
      background: ${bgColor};

      &:hover {
        background: ${darken(0.03, bgColor)};
      }

      &:active {
        background: ${lighten(0.01, bgColor)};
      }
    `
  }};

  ${p =>
    p.isDisabled &&
    css`
      pointer-events: none;
      user-select: none;
      opacity: 0.5;
    `};
`

export const Title = styled.span<TitleProps>`
  font-size: 17px;
  ${p => p.withLeadIcon && 'margin-left: 4px'};
`

interface RootProps {
  variant: ButtonVariant
  isDisabled?: boolean
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
