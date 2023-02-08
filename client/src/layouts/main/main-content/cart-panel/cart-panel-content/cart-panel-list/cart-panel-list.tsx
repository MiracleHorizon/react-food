import { observer } from 'mobx-react-lite'

import CartPanelItem from '../cart-panel-item'
import { useCartStore } from '@stores/cart.store'
import { StyledList } from './cart-panel-list.styled'

const CartPanelList = () => (
  <StyledList>
    {useCartStore.products.map(
      ({ price: { fullPrice, discountPercent }, count, ...product }) => (
        <CartPanelItem
          key={product.id}
          {...product}
          discountPercent={discountPercent}
          fullPrice={fullPrice}
          count={count}
        />
      )
    )}
  </StyledList>
)

export default observer(CartPanelList)
