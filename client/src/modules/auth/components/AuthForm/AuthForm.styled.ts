import styled from '@emotion/styled'

import Button from '@ui/Button'
import { AuthFormInput } from './AuthFormInput'
import { maxDeviceWidth } from '@styles/responsiveness/devices'

const contentElVerticalMargin = 18
const contentElHeight = 44
const contentElMobileHeight = 42

export const Root = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Input = styled(AuthFormInput)`
  height: ${contentElHeight}px;

  &:not([type='submit']):not(&:first-of-type) {
    margin-top: ${contentElVerticalMargin}px;
  }

  @media screen and (${maxDeviceWidth.mobileLg}) {
    height: ${contentElMobileHeight}px;
  }
`

export const SubmitButton = styled(Button)`
  width: 100%;
  height: ${contentElHeight}px;
  margin-top: ${contentElVerticalMargin}px;
  border-radius: 8px;

  span {
    font-weight: 500;
    font-size: 18px;
  }

  @media screen and (${maxDeviceWidth.mobileLg}) {
    height: ${contentElMobileHeight}px;

    span {
      font-size: 17px;
    }
  }
`
