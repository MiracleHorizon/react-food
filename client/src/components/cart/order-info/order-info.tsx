import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'

import Header from './order-info-header'
import CutleryPanel from './cutlery-panel'
import ProductsList from './order-products-list'
import FullWidthOvalLoader from '@/ui/loaders/full-width-oval-loader'
import CartStore from '@/stores/Cart.store'
import CutleryStore from '@/stores/Cutlery.store'
import { Routes } from '@/types/Routes'
import { colors } from '@/styles/variables'
import * as Info from './order-info.styled'

const OrderInfo = () => {
  const router = useRouter()

  if (CartStore.isEmpty) {
    router.push(Routes.HOME)
  }

  if (CartStore.isCartDataLoading) {
    return <FullWidthOvalLoader color={colors.gray['7']} />
  }

  return (
    <Info.Root>
      <Header />
      {CutleryStore.isCutleryRequired && <CutleryPanel />}
      <ProductsList />
    </Info.Root>
  )
}

export default observer(OrderInfo)
