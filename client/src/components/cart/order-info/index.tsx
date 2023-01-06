import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'

import CartStore from '@/stores/Cart.store'
import CutleryStore from '@/stores/Cutlery.store'
import Loader from './products-list/loader'
import OrderInfoHeader from './header'
import OrderCutleryPanel from './cutlery-panel'
import OrderProductsList from './products-list'
import * as Styled from './OrderInfo.styles'

const OrderInfo = () => {
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
      {CutleryStore.isCutleryRequired && <OrderCutleryPanel />}
      <OrderProductsList />
    </Styled.Root>
  )
}

export default observer(OrderInfo)
