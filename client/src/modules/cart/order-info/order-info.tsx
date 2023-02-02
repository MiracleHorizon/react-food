import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'

import Header from './order-info-header'
import CutleryPanel, { cutleryStore } from './cutlery-panel'
import ProductsList from './order-products-list'
import { cartStore } from '@/stores/cart.store'
import { Routes } from '@/types/routes'
import * as Info from './order-info.styled'

const OrderInfo = () => {
  const router = useRouter()

  if (cartStore.isEmpty) {
    router.push(Routes.HOME)
  }

  return (
    <Info.Root>
      <Header />
      {cutleryStore.isCutleryRequired && <CutleryPanel />}
      <ProductsList />
    </Info.Root>
  )
}

export default observer(OrderInfo)
