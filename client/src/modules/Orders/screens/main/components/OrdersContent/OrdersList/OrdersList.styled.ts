import styled from '@emotion/styled'

import OrderCardComponent from './OrderCard'
import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Root = styled.ul`
  min-width: 460px;
  width: 460px;

  @media (${maxDeviceWidth.laptop}) {
    width: 600px;
    margin: 0;
  }

  @media (${maxDeviceWidth.tablet}) {
    min-width: initial;
    width: 100%;
  }
`

export const OrderCard = styled(OrderCardComponent)`
  &:not(&:first-of-type) {
    margin-top: 16px;
  }

  @media (${maxDeviceWidth.laptop}) {
    width: 600px;
  }

  @media (${maxDeviceWidth.tablet}) {
    width: 100%;
  }
`
