import SelectedOrderHeader from './SelectedOrderHeader'
import SelectedOrderAddress from './SelectedOrderAddress'
import SelectedOrderList from './SelectedOrderList'
import SelectedOrderPayment from './SelectedOrderPayment'
import { useOrdersStore } from '@modules/Orders/store'
import { Root } from './SelectedOrder.styled'

const SelectedOrder = () => {
  const selectedOrder = useOrdersStore(state => state.selectedOrder)

  if (!selectedOrder) {
    return null
  }

  return (
    <Root>
      <SelectedOrderHeader {...selectedOrder} />
      <SelectedOrderAddress deliveryAddress={selectedOrder.deliveryAddress} />
      <SelectedOrderList products={selectedOrder.products} />
      <SelectedOrderPayment {...selectedOrder} />
    </Root>
  )
}

export default SelectedOrder
