import { observer } from 'mobx-react-lite'

import Header from './order-info-header'
import CutleryPanel, { useCutleryStore } from './cutlery-panel'
import ProductsList from './order-products-list'
import * as Info from './order-info.styled'

const OrderInfo = () => (
  <Info.Root>
    <Header />
    {useCutleryStore.isCutleryRequired && <CutleryPanel />}
    <ProductsList />
  </Info.Root>
)

export default observer(OrderInfo)
