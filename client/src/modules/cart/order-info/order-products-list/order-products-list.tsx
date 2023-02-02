import { observer } from 'mobx-react-lite'

import OrderProductItem from '@/components/order-product-item'
import { useCartStore } from '@/stores/cart.store'

const OrderProductsList = () => (
  <ul>
    {useCartStore.products.map(product => (
      <OrderProductItem
        key={product.id}
        {...product}
        variant='default'
        count={product.count}
        discountPercent={product.price.discountPercent}
        fullPrice={product.price.fullPrice}
      />
    ))}
  </ul>
)

export default observer(OrderProductsList)
