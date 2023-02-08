import styled from '@emotion/styled'
import { darken } from 'polished'

import DefaultButton from '@ui/buttons/button'
import { colors } from '@styles/variables'

export const StyledButton = styled(DefaultButton)`
  height: 100%;
  padding: 0 26px;
  background: ${colors.gray['6']};

  &:hover {
    background: ${darken(0.03, colors.gray['6'])};
  }

  &:active {
    background: ${darken(0.06, colors.gray['6'])};
  }

  span {
    font-size: 16px;
  }
`
