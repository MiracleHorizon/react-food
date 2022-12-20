import dynamic from 'next/dynamic'
import type { NextPage } from 'next'

import CartStore from '@/stores/Cart.store'
import CartLayout from '@/layouts/Cart'
import OrderingProductsListLoader from '@/components/Ordering/Loader'
import CartService from '@/services/CartService'
import type { TCartProduct } from '@/models/product/TCartProduct'

const Ordering = dynamic(() => import('@/components/Ordering'), {
  loading: OrderingProductsListLoader
})

const CartPage: NextPage<Props> = ({ cartProducts }) => {
  CartStore.initializeCart(cartProducts)

  return (
    <CartLayout title='React.Еда'>
      <div style={{ paddingTop: '40px' }}>
        <Ordering />
      </div>
    </CartLayout>
  )
}

export default CartPage

export const getServerSideProps = async () => {
  const cartProducts = await CartService.fetchCart()

  return {
    props: {
      cartProducts
    }
  }
}

interface Props {
  cartProducts: TCartProduct[]
}
