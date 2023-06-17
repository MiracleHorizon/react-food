import OrdersScreen from '@modules/Orders'
import { useRefreshAuth } from '@hooks/useRefreshAuth'

const OrdersPage = () => {
  useRefreshAuth()

  return <OrdersScreen />
}

export default OrdersPage
