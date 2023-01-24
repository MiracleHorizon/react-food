import { observer } from 'mobx-react-lite'

import CartButton from '@/ui/buttons/cart-button'
import CartStore from '@/stores/Cart.store'

const MainLayoutHeaderCartLabel = () => (
  <>
    {CartStore.totalCost > 0 && (
      <CartButton productsCost={CartStore.getFormattedTotalCost()} />
    )}
  </>
)

export default observer(MainLayoutHeaderCartLabel)
