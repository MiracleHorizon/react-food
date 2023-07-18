import { WithCartProduct } from '@hoc/withCartProduct'
import { useCartStore } from '@stores/cartStore'
import { Item } from './ProductsList.styled'

export const ProductsList = () => {
  const products = useCartStore(state => state.products)

  return (
    <ul>
      {products.map(product => (
        <WithCartProduct
          key={product.id}
          productData={product.getData()}
          WrappedComponent={Item}
        />
      ))}
    </ul>
  )
}
