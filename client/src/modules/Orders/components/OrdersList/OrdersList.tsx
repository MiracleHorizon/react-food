import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

import { ordersService } from '@modules/Orders/api'
import { useOrdersStore } from '@modules/Orders/store'
import { useUserStore } from '@stores/userStore'
import * as List from './OrdersList.styled'

const OrdersList = () => {
  const isAuth = useUserStore(state => state.isAuth())
  const initialize = useOrdersStore(state => state.initialize)
  const { data: orders } = useQuery({
    queryKey: ['fetchAllOrders'],
    queryFn: ordersService.fetchAllUserOrders,
    refetchOnWindowFocus: false,
    enabled: isAuth
  })

  useEffect(() => {
    if (orders) initialize(orders)
  }, [initialize, orders])

  if (!orders) {
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
