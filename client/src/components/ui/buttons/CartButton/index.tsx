import { observer } from 'mobx-react-lite'
import Link from 'next/link'

import CartSvg from '@/ui/svg/CartSvg'
import CartStore from '@/stores/Cart.store'
import { RUBLE_SIGN } from '@/utils/constants'
import * as Button from './CartButton.styles'

const CartButton = observer(() => (
  <Link href='/cart'>
    <Button.Root>
      <span>
        {CartStore.getTotalPrice()} {RUBLE_SIGN}
      </span>
      <Button.Divider />
      <Button.CartBlock>
        <CartSvg />
        <span>{CartStore.getTotalProductsCount()}</span>
      </Button.CartBlock>
    </Button.Root>
  </Link>
))

export default CartButton
