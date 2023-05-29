import WithCartProduct from '@hoc/withCartProduct'
import CartProductItem from './CartProductItem'
import {useCartStore} from '@stores/cartStore'
import * as List from './CartProductsList.styled'

// TODO: State refresh
const CartProductsList = () => (
  <List.Root>
    {useCartStore(state => state.products).map(product => (
      <WithCartProduct
        key={product.id}
        productData={product.getData()}
        WrappedComponent={CartProductItem}
      />
    ))}
  </List.Root>
)

export default CartProductsList
