import dynamic from 'next/dynamic'

import CartLayout from '@/layouts/cart'
import OrderingProductsListLoader from './order-info/products-list/loader'
import * as Styled from './Cart.styles'

const OrderInfo = dynamic(() => import('./order-info'), {
  loading: OrderingProductsListLoader
})

const Cart = () => {
  return (
    <CartLayout title='Корзина'>
      <Styled.Wrapper>
        <Styled.Left>
          <OrderInfo />
        </Styled.Left>
      </Styled.Wrapper>
    </CartLayout>
  )
}

export default Cart
