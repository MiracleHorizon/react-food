import { observer } from 'mobx-react-lite'

import OrderProductItem from './order-product-item'
import { cartStore } from '@/stores/cart.store'

const OrderProductsList = () => (
  <ul>
    {cartStore.products.map(product => (
      <OrderProductItem key={product.id} {...product} />
    ))}
  </ul>
)

export default observer(OrderProductsList)
