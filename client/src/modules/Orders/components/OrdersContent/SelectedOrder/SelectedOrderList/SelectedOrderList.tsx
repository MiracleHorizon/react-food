import type { FC } from 'react'

import { SelectedOrderListItem } from './SelectedOrderListItem'
import type { OrderModel } from '@modules/Orders'
import { SectionTitle } from '../SelectedOrder.styled'
import * as List from './SelectedOrderList.styled'

export const SelectedOrderList: FC<Props> = ({ products }) => (
  <>
    <List.Divider />
    {products.length > 0 && (
      <>
        <section>
          <SectionTitle>Состав заказа</SectionTitle>
          <List.List>
            {products.map(product => (
              <SelectedOrderListItem key={product.id} {...product} />
            ))}
          </List.List>
        </section>
        <List.Divider />
      </>
    )}
  </>
)

type Props = Pick<OrderModel, 'products'>
