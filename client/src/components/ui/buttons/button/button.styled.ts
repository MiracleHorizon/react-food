import styled from '@emotion/styled'

import { ButtonVariant } from '@/ui/buttons/button/button-variant'
import { colors } from '@/styles/variables'

export const Root = styled.button<RootProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 50px;
  padding: 0 16px;
  border-radius: 16px;
  background: ${colors.yellow['1']};
`

export const Text = styled.span`
  margin-left: 6px;
  font-size: 18px;
  font-weight: 500;
`

interface RootProps {
  variant: ButtonVariant
}
