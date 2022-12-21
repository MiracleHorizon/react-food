import { observer } from 'mobx-react-lite'

import CartStore from '@/stores/Cart.store'
import OrderProductItem from '@/components/cart/order-info/products-list/item'

const OrderProductsList = observer(() => (
  <ul>
    {CartStore.products.map(product => (
      <OrderProductItem key={product.id} {...product} />
    ))}
  </ul>
))

export default OrderProductsList
