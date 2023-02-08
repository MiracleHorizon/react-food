import { observer } from 'mobx-react-lite'

import { useCartStore } from '@stores/cart.store'
import { StyledCartButton } from './cart-label.styled'

const MainLayoutHeaderCartLabel = () => (
  <>
    {!useCartStore.isEmpty && (
      <StyledCartButton productsCost={useCartStore.formattedTotalCost} />
    )}
  </>
)

export default observer(MainLayoutHeaderCartLabel)
