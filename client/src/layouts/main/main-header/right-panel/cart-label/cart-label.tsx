import { observer } from 'mobx-react-lite'

import CartButton from '@/components/cart/cart-button'
import { useCartStore } from '@/stores/cart.store'

const MainLayoutHeaderCartLabel = () => (
  <>
    {useCartStore.totalCost > 0 && (
      <CartButton productsCost={useCartStore.formattedTotalCost} />
    )}
  </>
)

export default observer(MainLayoutHeaderCartLabel)
