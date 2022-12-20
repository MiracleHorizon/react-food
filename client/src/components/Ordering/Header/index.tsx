import { observer } from 'mobx-react-lite'

import CartStore from '@/stores/Cart.store'
import ClearCartButton from '@/components/Ordering/Header/ClearCartButton'
import * as Header from './OrderingHeader'

const OrderingHeader = observer(() => (
  <Header.Root>
    <Header.TitleBlock>
      <h2>Ваш заказ</h2>
      <span>{CartStore.products.length} товара</span>
    </Header.TitleBlock>
    <ClearCartButton />
  </Header.Root>
))

export default OrderingHeader
