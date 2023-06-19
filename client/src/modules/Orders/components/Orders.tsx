import { type FC, useEffect } from 'react'
import dynamic from 'next/dynamic'

import { useOrdersStore } from '@modules/Orders/store'
import type { OrderModel } from '@modules/Orders/models/Order'
import { Layout } from './Orders.styled'

// TODO: Loader
const OrdersContent = dynamic(() => import('./OrdersContent'))

// TODO: Empty orders
const Orders: FC<Props> = ({ orders }) => {
  const initializeOrders = useOrdersStore(state => state.initialize)

  useEffect(() => {
    initializeOrders(orders)
  }, [initializeOrders, orders])

  return (
    <Layout title='Мои заказы' withSidePanels={false}>
      {orders.length > 0 ? <OrdersContent orders={orders} /> : <div></div>}
    </Layout>
  )
}

export default Orders

interface Props {
  orders: OrderModel[]
}