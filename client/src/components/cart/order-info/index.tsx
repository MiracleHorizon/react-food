import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'

import CartStore from '@/stores/Cart.store'
import Loader from '@/components/cart/order-info/products-list/loader'
import OrderCutleryPanel from '@/components/cart/order-info/cutlery-panel'
import OrderProductsList from '@/components/cart/order-info/products-list'
import OrderInfoHeader from '@/components/cart/order-info/header'
import * as Styled from './OrderInfo.styles'

const OrderInfo = observer(() => {
  const router = useRouter()

  if (CartStore.isCartDataLoading) {
    return <Loader />
  }

  if (CartStore.isEmpty) {
    router.back()
  }

  return (
    <Styled.Root>
      <OrderInfoHeader />
      <OrderCutleryPanel />
      <OrderProductsList />
    </Styled.Root>
  )
})

export default OrderInfo
