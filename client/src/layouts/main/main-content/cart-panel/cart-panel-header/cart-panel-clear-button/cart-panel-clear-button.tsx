import { observer } from 'mobx-react-lite'

import ClearCartButton from '@/components/cart/clear-cart-button'
import { useCartStore } from '@/stores/cart.store'

const CartPanelClearButton = () => (
  <>
    {!useCartStore.isEmpty && <ClearCartButton title='Очистить' withConfirm />}
  </>
)

export default observer(CartPanelClearButton)
