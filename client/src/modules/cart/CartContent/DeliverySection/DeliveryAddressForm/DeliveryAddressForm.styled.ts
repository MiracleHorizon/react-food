import styled from '@emotion/styled'

import DeliveryAddressFormInput from './DeliveryAddressFormInput'

export const Root = styled.form`
  width: 100%;
`

export const Input = styled(DeliveryAddressFormInput)`
  &:not(&:first-of-type) {
    margin-left: 12px;
  }
`

export const FirstLine = styled.section`
  width: 100%;
  display: flex;
  margin-bottom: 12px;
`
