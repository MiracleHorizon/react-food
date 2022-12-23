import styled from '@emotion/styled'

import { ButtonVariant } from '@/models/ButtonVariant'

const StyledButton = styled.button<{ variant: ButtonVariant }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 50px;
  padding: 0 16px;
  border-radius: 16px;
  background: #fbe000;

  span {
    margin-left: 6px;
    font-size: 18px;
    font-weight: 500;
  }
`

export default StyledButton
