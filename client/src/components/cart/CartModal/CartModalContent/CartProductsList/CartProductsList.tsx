import { WithCartProduct } from '@hoc/withCartProduct'
import { CartProductItem } from './CartProductItem'
import { useCartStore } from '@stores/cartStore'
import * as List from './CartProductsList.styled'

export const CartProductsList = () => {
  const products = useCartStore(state => state.products)

  return (
    <List.Root>
      {products.map(product => (
        <WithCartProduct
          key={product.id}
          productData={product.getData()}
          WrappedComponent={CartProductItem}
        />
      ))}
    </List.Root>
  )
}
