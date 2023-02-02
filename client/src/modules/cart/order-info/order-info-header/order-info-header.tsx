import {observer} from 'mobx-react-lite'

import ClearCartButton from '@/components/cart/clear-cart-button'
import {cartStore} from '@/stores/cart.store'
import * as Header from './order-info-header.styled'

// TODO Окончание существительного "товар".
const OrderInfoHeader = () => (
  <Header.Root>
    <div>
      <Header.Title>Ваш заказ</Header.Title>
      <Header.ProductsCount>
        {cartStore.totalPositions} товара
      </Header.ProductsCount>
    </div>
    <ClearCartButton title='Очистить корзину' withIcon withConfirm />
  </Header.Root>
)

export default observer(OrderInfoHeader)
