import dynamic from 'next/dynamic'

import CartLayout from '@layouts/cart'
import FullWidthOvalLoader from '@ui/loaders/full-width-oval-loader'
import * as Styled from './cart.styled'

const OrderInfo = dynamic(() => import('./order-info'), {
  loading: () => <FullWidthOvalLoader />
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
