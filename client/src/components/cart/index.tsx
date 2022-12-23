import dynamic from 'next/dynamic'

import OrderingProductsListLoader from '@/components/cart/order-info/products-list/loader'
import * as Styled from './Cart.styles'

const OrderInfo = dynamic(() => import('@/components/cart/order-info'), {
  loading: OrderingProductsListLoader
})

const Cart = () => {
  return (
    <Styled.Wrapper>
      <Styled.Left>
        <OrderInfo />
      </Styled.Left>
    </Styled.Wrapper>
  )
}

export default Cart
