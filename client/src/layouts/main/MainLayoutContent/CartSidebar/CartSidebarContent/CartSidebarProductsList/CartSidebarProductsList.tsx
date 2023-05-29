import WithCartProduct from '@hoc/withCartProduct'
import ProductItem from './ProductItem'
import { useCartStore } from '@stores/cartStore'
import { Root } from './CartSidebarProductsList.styled'

const CartSidebarProductsList = () => {
  const cartProducts = useCartStore(state => state.products)

  return (
    <Root>
      {cartProducts.map(product => (
        <WithCartProduct
          key={product.id}
          productData={product.getData()}
          WrappedComponent={ProductItem}
        />
      ))}
    </Root>
  )
}

export default CartSidebarProductsList
