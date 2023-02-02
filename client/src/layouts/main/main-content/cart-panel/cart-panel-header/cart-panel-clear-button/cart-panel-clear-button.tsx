import { observer } from 'mobx-react-lite'

import ClearCartButton from '@/components/cart/clear-cart-button'
import { cartStore } from '@/stores/cart.store'

const CartPanelClearButton = () => (
  <>{!cartStore.isEmpty && <ClearCartButton title='Очистить' withConfirm />}</>
)

export default observer(CartPanelClearButton)
