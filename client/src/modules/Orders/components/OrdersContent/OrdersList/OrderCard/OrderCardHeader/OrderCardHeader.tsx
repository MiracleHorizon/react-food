import { type FC, memo } from 'react'

import { numberFormatter } from '@utils/NumberFormatter'
import { DEFAULT_CURRENCY_INTL_ARGS } from '@constants/intl'
import type { OrderModel } from '@modules/Orders/models/Order'
import * as Header from './OrderCardHeader.styled'

export const OrderCardHeader: FC<Props> = memo(
  ({ deliveryAddress, formattedDate, totalCost, statusTitle, statusColor }) => (
    <Header.Root>
      <Header.LeftSide>
        <Header.CreatedAt>{formattedDate}</Header.CreatedAt>
        <Header.DeliveryAddress>{deliveryAddress}</Header.DeliveryAddress>
      </Header.LeftSide>
      <Header.RightSide>
        <Header.TotalCost>
          {numberFormatter.formatCurrency({
            value: totalCost,
            ...DEFAULT_CURRENCY_INTL_ARGS
          })}
        </Header.TotalCost>
        <Header.Status color={statusColor}>{statusTitle}</Header.Status>
      </Header.RightSide>
    </Header.Root>
  )
)

interface Props extends Pick<OrderModel, 'totalCost' | 'deliveryAddress'> {
  formattedDate: string
  statusColor: string
  statusTitle: string
}
