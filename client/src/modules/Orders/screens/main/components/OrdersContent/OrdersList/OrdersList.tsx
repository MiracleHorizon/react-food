import type { FC } from 'react'

import { OrderModel } from '@modules/Orders/screens/main/models/Order'
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
