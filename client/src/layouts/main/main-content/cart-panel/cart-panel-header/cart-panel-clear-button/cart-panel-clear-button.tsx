import { observer } from 'mobx-react-lite'

import CartStore from '@/stores/Cart.store'
import ClearCartButton from '@/ui/buttons/clear-cart-button'

const CartPanelClearButton = () => (
  <>{!CartStore.isEmpty && <ClearCartButton title='Очистить' />}</>
)

export default observer(CartPanelClearButton)
