import type { FC } from 'react'

import type { OrderModel } from '@modules/Orders'
import * as List from './OrdersList.styled'

const OrdersList: FC<Props> = ({ orders }) => (
  <List.Root>
    {orders.map(order => (
      <List.OrderCard key={order.id} {...order} />
    ))}
  </List.Root>
)

export default OrdersList

interface Props {
  orders: OrderModel[]
}
