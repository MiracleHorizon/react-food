import { useCartStore } from '@stores/cartStore'
import { useSelectOrderCostDetails } from '@hooks/selectors/useSelectOrderCostDetails'
import { numberFormatter } from '@utils/NumberFormatter'
import { DEFAULT_CURRENCY_INTL_ARGS } from '@constants/intl'
import { CartButton } from './CartLabel.styled'

// TODO: Конфликт названий
const CartLabel = () => {
  const { totalCost } = useSelectOrderCostDetails()

  return (
    <>
      {useCartStore(state => !state.isEmpty()) && (
        <CartButton
          cartCost={numberFormatter.formatCurrency({
            value: totalCost,
            ...DEFAULT_CURRENCY_INTL_ARGS
          })}
        />
      )}
    </>
  )
}

export default CartLabel
