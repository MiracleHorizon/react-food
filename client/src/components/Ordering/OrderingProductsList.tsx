import { observer } from 'mobx-react-lite'

import CartStore from '@/stores/Cart.store'
import CartProductCard from '@/components/Cards/CartProduct'

const OrderingProductsList = observer(() => (
  <ul>
    {CartStore.products.map(product => (
      <CartProductCard key={product.id} {...product} />
    ))}
  </ul>
))

export default OrderingProductsList
