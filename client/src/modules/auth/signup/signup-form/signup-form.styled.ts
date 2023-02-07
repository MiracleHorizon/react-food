import styled from '@emotion/styled'

import DefaultInput from '@/ui/inputs/input'
import DefaultButton from '@/ui/buttons/button'

export const Root = styled.form`
  width: 100%;
  height: 100%;
`

export const Input = styled(DefaultInput)`
  height: 42px;

  &:not(&:last-of-type) {
    margin-bottom: 12px;
  }

  input {
    font-size: 16px;
  }
`

export const SubmitButton = styled(DefaultButton)`
  height: 42px;
  margin: 12px auto 0;
  padding-top: 1px;
`
