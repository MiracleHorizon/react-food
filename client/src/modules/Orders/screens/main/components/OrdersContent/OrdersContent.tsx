import MediaQuery from 'react-responsive'
import type { FC } from 'react'

import OrdersList from './OrdersList'
import type { OrderModel } from '@modules/Orders'
import { breakpoints } from '@styles/responsiveness/breakpoints'
import * as Content from './OrdersContent.styled'

const OrdersContent: FC<Props> = ({ orders }) => (
  <Content.Root>
    <Content.TitleArticle>
      <Content.Title>Мои заказы</Content.Title>
    </Content.TitleArticle>
    <Content.Main>
      <OrdersList orders={orders} />
      <MediaQuery minWidth={breakpoints.laptop + 1}>
        <Content.SelectedOrder />
      </MediaQuery>
    </Content.Main>
  </Content.Root>
)

export default OrdersContent

interface Props {
  orders: OrderModel[]
}
