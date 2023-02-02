import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'

import Header from './order-info-header'
import CutleryPanel, { useCutleryStore } from './cutlery-panel'
import ProductsList from './order-products-list'
import { useCartStore } from '@/stores/cart.store'
import { Routes } from '@/types/routes'
import * as Info from './order-info.styled'

const OrderInfo = () => {
  const router = useRouter()

  if (useCartStore.isEmpty) {
    router.push(Routes.HOME)
  }

  return (
    <Info.Root>
      <Header />
      {useCutleryStore.isCutleryRequired && <CutleryPanel />}
      <ProductsList />
    </Info.Root>
  )
}

export default observer(OrderInfo)
