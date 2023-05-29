import styled from '@emotion/styled'

import InputComponent from '@ui/Input'
import ButtonComponent from '@ui/Button'

export const Root = styled.form`
  width: 100%;
`

export const Input = styled(InputComponent)`
  &:not(&:last-of-type) {
    margin-bottom: 12px;
  }
`

export const SubmitButton = styled(ButtonComponent)`
  width: 100%;
  height: 44px;
  margin-top: 14px;
`
