import OrdersList from '../components/OrdersList'
import SelectedOrder from '../components/SelectedOrder'
import * as Orders from './Orders.styled'

const OrdersComponent = () => (
  <Orders.Layout title='Мои заказы' withSidePanels={false}>
    <Orders.Root>
      <Orders.Title>Мои заказы</Orders.Title>
      <Orders.Content>
        <OrdersList />
        <SelectedOrder />
      </Orders.Content>
    </Orders.Root>
  </Orders.Layout>
)

export default OrdersComponent
