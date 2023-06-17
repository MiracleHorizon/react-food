import { useEffect, useState } from 'react'

import { useOrdersStore } from '@modules/Orders/store'
import { useUserStore } from '@stores/userStore'
import { ordersService } from '@api/OrdersService'
import type { OrderModel } from '@modules/Orders/models/Order'
import * as List from './OrdersList.styled'

const OrdersList = () => {
  const [orders, setOrders] = useState<OrderModel[]>([])
  const isAuth = useUserStore(state => state.isAuth())
  const initializeOrders = useOrdersStore(state => state.initialize)

  useEffect(() => {
    if (!isAuth) return
    ordersService.fetchAllUserOrders().then(orders => setOrders(orders))
  }, [isAuth])

  useEffect(() => {
    if (orders.length > 0) {
      initializeOrders(orders)
    }
  }, [initializeOrders, orders])

  if (orders.length === 0) {
    // TODO: Empty orders
    return null
  }

  return (
    <List.Root>
      {orders.map(order => (
        <List.OrderCard key={order.id} {...order} />
      ))}
    </List.Root>
  )
}

export default OrdersList
