import styled from '@emotion/styled'
import { darken } from 'polished'

import ButtonComponent from '@ui/Button'
import { colors } from '@styles/colors'

const buttonColor = colors.gray['6']

export const Button = styled(ButtonComponent)`
  height: 100%;
  padding: 0 26px;
  background: ${buttonColor};

  &:hover {
    background: ${darken(0.03, buttonColor)};
  }

  &:active {
    background: ${darken(0.06, buttonColor)};
  }
`
