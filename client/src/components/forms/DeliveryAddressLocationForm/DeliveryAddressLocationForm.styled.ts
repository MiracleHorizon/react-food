import styled from '@emotion/styled'

import { colors } from '@styles/colors'

export const Root = styled.form`
  position: relative;
  width: 100%;
  margin-bottom: 12px;
`

export const InputWrapper = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-radius: 16px;
  padding-left: 16px;
  padding-right: 8px;
  border: none;
  background: ${colors.gray['2']};
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  font-weight: 500;
  font-size: 16px;

  &::placeholder {
    font-size: 16px;
  }
`
