import styled from '@emotion/styled'

import InputComponent from '@ui/Input'
import ButtonComponent from '@ui/Button'

export const Root = styled.form`
  width: 100%;
  height: 100%;
`

export const Input = styled(InputComponent)`
  height: 42px;

  &:not(&:last-of-type) {
    margin-bottom: 11px;
  }

  input {
    font-size: 16px;
  }
`

export const SubmitButton = styled(ButtonComponent)`
  height: 42px;
  margin: 12px auto 0;
`
