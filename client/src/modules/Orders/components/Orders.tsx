import { type FC, useEffect } from 'react'
import dynamic from 'next/dynamic'

import { useOrdersStore } from '@modules/Orders/store'
import type { OrderModel } from '@modules/Orders'
import { Layout } from './Orders.styled'

// TODO: Loader
const OrdersContent = dynamic(() =>
  import('./OrdersContent').then(mod => mod.OrdersContent)
)

// TODO: Empty orders
export const Orders: FC<Props> = ({ orders }) => {
  const initialize = useOrdersStore(state => state.initialize)

  useEffect(() => initialize(orders), [initialize, orders])

  return (
    <Layout title='Мои заказы' withSidePanels={false}>
      {orders.length > 0 ? <OrdersContent orders={orders} /> : <div></div>}
    </Layout>
  )
}

interface Props {
  orders: OrderModel[]
}
