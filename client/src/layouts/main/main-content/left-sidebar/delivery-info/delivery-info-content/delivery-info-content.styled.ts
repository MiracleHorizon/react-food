import styled from '@emotion/styled'

import { textMarginY } from '../delivery-info.styled'

export const Root = styled.div`
  font-size: 16px;
`

export const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 17px;

  svg {
    margin-right: 5px;
    margin-left: -2px;
  }
`

export const TimeRange = styled.span`
  margin-top: 2px;
`

export const Price = styled.span`
  display: block;
  margin: ${textMarginY}px 0;
`

export const ServiceFee = styled.span`
  font-weight: 600;
`
