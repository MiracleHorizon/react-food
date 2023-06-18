import dynamic from 'next/dynamic'
import type { FC } from 'react'

import OrdersList from './OrdersList'
import { OrderModel } from '@modules/Orders/models/Order'
import * as Content from './OrdersContent.styled'

// TODO: Loader
const SelectedOrder = dynamic(() => import('./SelectedOrder'), { ssr: false })

const OrdersContent: FC<Props> = ({ orders }) => (
  <Content.Root>
    <Content.TitleArticle>
      <Content.Title>Мои заказы</Content.Title>
    </Content.TitleArticle>
    <Content.Main>
      <OrdersList orders={orders} />
      <SelectedOrder />
    </Content.Main>
  </Content.Root>
)

export default OrdersContent

interface Props {
  orders: OrderModel[]
}
