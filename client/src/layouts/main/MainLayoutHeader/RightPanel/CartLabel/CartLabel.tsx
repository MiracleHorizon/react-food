import { useCartStore } from '@stores/cartStore'
import { useSelectOrderCost } from '@hooks/selectors/useSelectOrderCost'
import { numberFormatter } from '@utils/NumberFormatter'
import { DEFAULT_CURRENCY_INTL_ARGS } from '@constants/intl'
import { CartButton } from './CartLabel.styled' // TODO: Конфликт названий

// TODO: Конфликт названий
const CartLabel = () => {
  const orderCost = useSelectOrderCost()

  return (
    <>
      {useCartStore(state => !state.isEmpty()) && (
        <CartButton
          cartCost={numberFormatter.formatCurrency({
            value: orderCost,
            ...DEFAULT_CURRENCY_INTL_ARGS
          })}
        />
      )}
    </>
  )
}

export default CartLabel
