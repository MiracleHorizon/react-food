import { observer } from 'mobx-react-lite'

import OrderProductItem from '@components/order-product-item'
import { useCartStore } from '@stores/cart.store'
import StyledList from './order-products-list.styled'

const OrderProductsList = () => (
  <StyledList>
    {useCartStore.products.map(product => (
      <OrderProductItem
        key={product.id}
        {...product}
        variant='small'
        count={product.count}
        fullPrice={product.price.fullPrice}
        discountPercent={product.price.discountPercent}
      />
    ))}
  </StyledList>
)

export default observer(OrderProductsList)
