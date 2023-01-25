import { observer } from 'mobx-react-lite'

import CartButton from '@/ui/buttons/cart-button'
import { cartStore } from '@/stores/cart.store'

const MainLayoutHeaderCartLabel = () => (
  <>
    {cartStore.totalCost > 0 && (
      <CartButton productsCost={cartStore.getFormattedTotalCost()} />
    )}
  </>
)

export default observer(MainLayoutHeaderCartLabel)
