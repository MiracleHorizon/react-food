import styled from '@emotion/styled'

import { Input as InputComponent } from '@ui/Input'
import { colors } from '@styles/colors'

export const Input = styled(InputComponent)`
  height: 44px;
  padding: 0 6px;
  background: white;

  input {
    margin-left: 4px;
    font-size: 16px;
  }

  svg {
    stroke: ${colors.gray['8']};
  }
`
