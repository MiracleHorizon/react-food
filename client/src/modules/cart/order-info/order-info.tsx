import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'

import Header from './order-info-header'
import CutleryPanel, { cutleryStore } from './cutlery-panel'
import ProductsList from './order-products-list'
import FullWidthOvalLoader from '@/ui/loaders/full-width-oval-loader'
import { cartStore } from '@/stores/cart.store'
import { Routes } from '@/types/Routes'
import { colors } from '@/styles/variables'
import * as Info from './order-info.styled'

const OrderInfo = () => {
  const router = useRouter()

  if (cartStore.isEmpty) {
    router.push(Routes.HOME)
  }

  if (cartStore.isCartDataLoading) {
    return <FullWidthOvalLoader color={colors.gray['7']} />
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
