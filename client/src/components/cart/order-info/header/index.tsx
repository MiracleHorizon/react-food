import { observer } from 'mobx-react-lite'

import CartStore from '@/stores/Cart.store'
import ClearCartButton from '@/components/cart/order-info/header/clear-cart-button'
import * as Header from './OrderInfoHeader'

const OrderInfoHeader = observer(() => (
  <Header.Root>
    <Header.TitleBlock>
      <h2>Ваш заказ</h2>
      <span>{CartStore.products.length} товара</span>
    </Header.TitleBlock>
    <ClearCartButton />
  </Header.Root>
))

export default OrderInfoHeader
