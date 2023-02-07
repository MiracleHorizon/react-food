import styled from '@emotion/styled'
import Link from 'next/link'

import DefaultInput from '@/ui/inputs/input'
import DefaultButton from '@/ui/buttons/button'

export const Root = styled.form`
  width: 100%;
`

export const Input = styled(DefaultInput)`
  &:not(&:last-of-type) {
    margin-bottom: 12px;
  }
`

export const SubmitButton = styled(DefaultButton)`
  margin-top: 14px;
  width: 100%;
  height: 44px;
`

export const SignupLink = styled(Link)`
  display: inline-block;
  width: 100%;
  margin-top: 14px;
  font-size: 16px;
  text-align: right;
  color: #479ced;

  &:hover {
    text-decoration: underline;
  }
`
