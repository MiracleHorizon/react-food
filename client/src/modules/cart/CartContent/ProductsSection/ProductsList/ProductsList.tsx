import ProductItem from './ProductItem'
import { useCartStore } from '@stores/cartStore'
import { Item } from './ProductsList.styled'

const ProductsList = () => (
  <ul>
    {useCartStore(state => state.products).map(product => (
      <Item
        key={product.id}
        productData={product.getData()}
        WrappedComponent={ProductItem}
      />
    ))}
  </ul>
)

export default ProductsList
