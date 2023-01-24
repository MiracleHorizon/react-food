import { observer } from 'mobx-react-lite'

import CartStore from '@/stores/Cart.store'
import OrderProductItem from './order-product-item'

const OrderProductsList = () => (
  <ul>
    {CartStore.products.map(product => (
      <OrderProductItem key={product.id} {...product} />
    ))}
  </ul>
)

export default observer(OrderProductsList)
