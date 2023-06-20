import styled from '@emotion/styled'

import DeliveryInfoComponent from '@components/general/DeliveryInfo'
import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Root = styled.aside`
  min-width: 240px;
  width: 240px;
  margin-right: 32px;

  @media screen and (${maxDeviceWidth.laptop}) {
    min-width: 50px;
    width: 50px;
    margin-right: 22px;
  }

  @media screen and (${maxDeviceWidth.tablet}) {
    display: none;
  }
`

export const Title = styled.h4`
  display: inline-block;
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 600;
`

export const DeliveryInfo = styled(DeliveryInfoComponent)`
  margin-bottom: 36px;
`
