import { CartBanner } from '@ui/Banner'
import { useCartStore } from '@stores/cartStore'
import { numberFormatter } from '@utils/NumberFormatter'
import { DEFAULT_CURRENCY_INTL_ARGS } from '@constants/intl'
import { MIN_ORDER_COST } from '@constants/payment'
import * as Shortage from './MinOrderCostShortage.styled'

const MinOrderCostShortage = () => {
  const totalProductsCost = useCartStore(state => state.totalProductsCost())
  const shortage = numberFormatter.formatCurrency({
    value: MIN_ORDER_COST - totalProductsCost,
    ...DEFAULT_CURRENCY_INTL_ARGS
  })

  return (
    <Shortage.Root>
      <CartBanner />
      <Shortage.Title>Ещё {shortage} до минимального заказа</Shortage.Title>
    </Shortage.Root>
  )
}

export default MinOrderCostShortage
