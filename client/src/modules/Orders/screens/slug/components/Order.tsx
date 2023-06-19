import type { FC } from 'react'

import MainLayout from '@layouts/Main'
import type { OrderModel } from '@modules/Orders'

const OrderComponent: FC<Props> = ({ order }) => {
  return (
    <MainLayout title={`Заказ №${order.id}`} withSidePanels={false}>
      <div>
        <article>
          <h1>Заказ №{order.id}</h1>
        </article>
      </div>
    </MainLayout>
  )
}

export default OrderComponent

interface Props {
  order: OrderModel
}
