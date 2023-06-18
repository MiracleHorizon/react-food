import { type FC, memo } from 'react'

import { numberFormatter } from '@utils/NumberFormatter'
import { getOrderStatusTitle } from '@modules/Orders/helpers/getOrderStatusTitle'
import { getFormattedOrderDate } from '@modules/Orders/helpers/getFormattedOrderDate'
import { DEFAULT_CURRENCY_INTL_ARGS } from '@constants/intl'
import type { OrderModel } from '@modules/Orders/models/Order'
import * as Header from './OrderCardHeader.styled'

const OrderCardHeader: FC<Props> = ({
  deliveryAddress,
  createdAt,
  totalCost,
  status
}) => (
  <Header.Root>
    <Header.LeftSide>
      <Header.CreatedAt>{getFormattedOrderDate(createdAt)}</Header.CreatedAt>
      <Header.DeliveryAddress>{deliveryAddress}</Header.DeliveryAddress>
    </Header.LeftSide>
    <Header.RightSide>
      <Header.TotalCost>
        {numberFormatter.formatCurrency({
          value: totalCost,
          ...DEFAULT_CURRENCY_INTL_ARGS
        })}
      </Header.TotalCost>
      <Header.Status status={status}>
        {getOrderStatusTitle(status)}
      </Header.Status>
    </Header.RightSide>
  </Header.Root>
)

export default memo(OrderCardHeader)

type Props = Pick<
  OrderModel,
  'createdAt' | 'totalCost' | 'status' | 'deliveryAddress'
>
