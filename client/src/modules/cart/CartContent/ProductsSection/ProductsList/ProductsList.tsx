import WithCartProduct from '@hoc/withCartProduct'
import { useCartStore } from '@stores/cartStore'
import { Item } from './ProductsList.styled'

const ProductsList = () => (
  <ul>
    {useCartStore(state => state.products).map(product => (
      <WithCartProduct
        key={product.id}
        productData={product.getData()}
        WrappedComponent={Item}
      />
    ))}
  </ul>
)

export default ProductsList
