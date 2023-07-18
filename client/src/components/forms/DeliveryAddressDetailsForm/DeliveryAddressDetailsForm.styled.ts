import styled from '@emotion/styled'

import { DeliveryAddressDetailsFormInput } from './DeliveryAddressDetailsFormInput'
import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Root = styled.form`
  width: 100%;
`

export const Input = styled(DeliveryAddressDetailsFormInput)`
  @media screen and (${maxDeviceWidth.mobileLg}) {
    &:not(&:last-of-type) {
      margin-bottom: 8px;
    }
  }
`

export const FirstLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0 10px;
  margin-bottom: 12px;

  @media screen and (${maxDeviceWidth.mobileLg}) {
    flex-direction: column;
    margin-bottom: 8px;
  }
`
