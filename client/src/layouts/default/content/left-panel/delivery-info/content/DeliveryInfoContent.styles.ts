import styled from '@emotion/styled'
import { TEXT_Y_MARGIN } from '../DeliveryInfo.styles'

export const Root = styled.div`
  font-size: 16px;
`

export const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 17px;

  svg {
    margin-right: 4px;
    margin-left: -2px;
  }
`

export const Price = styled.div`
  margin: ${TEXT_Y_MARGIN}px 0;
`

export const ServiceFee = styled.div`
  font-weight: 600;
`
