import styled from '@emotion/styled'

import InputComponent from '@ui/Input'

export const Root = styled.div`
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(&:last-of-type) {
    margin-bottom: 12px;
  }
`

export const Label = styled.label`
  max-width: 90px;
  width: 100%;
  margin-right: 10px;
  font-size: 18px;
  font-weight: 600;
`

export const Input = styled(InputComponent)`
  height: 100%;
`
