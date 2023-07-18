import styled from '@emotion/styled'

import { getOrderStatusTitleColor } from '@modules/Orders/helpers/getOrderStatusTitleColor'
import type { OrderStatus } from '@modules/Orders/models/OrderStatus'
import { maxDeviceWidth } from '@styles/responsiveness/devices'

export const Root = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    word-break: break-word;
    overflow: hidden;

    &:first-of-type {
      margin-bottom: 5px;
      font-size: 20px;

      @media (max-width: 500px) {
        margin-bottom: 3px;
        font-size: 17px;
      }
    }
  }
`

export const LeftSide = styled(ContentContainer)`
  align-items: flex-start;
  max-width: 70%;
`

export const RightSide = styled(ContentContainer)`
  align-items: flex-end;
  max-width: 30%;
`

export const CreatedAt = styled.span`
  font-weight: 600;
`

export const DeliveryAddress = styled.span`
  font-size: 16px;

  @media (max-width: 500px) {
    font-size: 13px;
  }
`

export const TotalCost = styled.span`
  font-weight: 500;
`

export const Status = styled.span<StatusProps>`
  font-size: 14px;
  text-transform: lowercase;
  color: ${p => getOrderStatusTitleColor(p.status)};

  @media (${maxDeviceWidth.mobileMd}) {
    font-size: 12px;
  }
`

interface StatusProps {
  status: OrderStatus
}
