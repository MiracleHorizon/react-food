import { observer } from 'mobx-react-lite'

import CartStore from '@/stores/Cart.store'
import ClearCartButton from '@/ui/buttons/clear-cart-button'
import * as Header from './order-info-header.styled'

// TODO Окончание существительного "товар".
const OrderInfoHeader = () => (
  <Header.Root>
    <div>
      <Header.Title>Ваш заказ</Header.Title>
      <Header.ProductsCount>
        {CartStore.totalPositions} товара
      </Header.ProductsCount>
    </div>
    <ClearCartButton title='Очистить корзину' withIcon />
  </Header.Root>
)

export default observer(OrderInfoHeader)
