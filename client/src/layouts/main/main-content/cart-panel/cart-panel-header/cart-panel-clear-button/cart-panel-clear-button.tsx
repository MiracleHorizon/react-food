import { observer } from 'mobx-react-lite'

import ClearCartButton from '@/ui/buttons/clear-cart-button'
import { cartStore } from '@/stores/cart.store'

const CartPanelClearButton = () => (
  <>{!cartStore.isEmpty && <ClearCartButton title='Очистить' />}</>
)

export default observer(CartPanelClearButton)
