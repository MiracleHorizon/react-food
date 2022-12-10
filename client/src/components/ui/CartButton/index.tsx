import { observer } from 'mobx-react-lite'

import CartSvg from '@/ui/svg/CartSvg'
import CartStore from '@/stores/CartStore'
import * as Button from './CartButton.styles'

const CartButton = observer(() => (
  <Button.Root>
    <span>{CartStore.getTotalPrice()} ₽</span>
    <Button.Divider />
    <Button.CartBlock>
      <CartSvg />
      <span>{CartStore.getTotalProducts()}</span>
    </Button.CartBlock>
  </Button.Root>
))

export default CartButton
