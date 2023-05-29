import {type FC, memo, useCallback, useMemo} from 'react'
import {useRouter} from 'next/router'

import {useSelectOrderCost} from '@hooks/selectors/useSelectOrderCost'
import {useSelectIsMinOrderCostExceeded} from '@hooks/selectors/useSelectIsMinOrderCostExceeded'
import {numberFormatter} from '@utils/NumberFormatter'
import {MIN_ORDER_COST} from '@constants/payment'
import {DEFAULT_CURRENCY_INTL_ARGS} from '@constants/intl'
import {Routes} from '@router/Routes.enum'
import * as Footer from './CartModalFooter.styled'

// TODO: Without cost, cost
const CartModalFooter: FC<Props> = props => {
  const router = useRouter()
  const isMinOrderCostExceeded = useSelectIsMinOrderCostExceeded()

  const orderCost = useSelectOrderCost()
  const formattedOrderCost = numberFormatter.formatCurrency({
    value: orderCost,
    ...DEFAULT_CURRENCY_INTL_ARGS
  })

  const minOrderCostShortage = MIN_ORDER_COST - orderCost
  const formattedMinOrderCostShortage = numberFormatter.formatCurrency({
    value: minOrderCostShortage,
    ...DEFAULT_CURRENCY_INTL_ARGS
  })

  const navigateToCart = useCallback(() => router.push(Routes.CART), [router])

  const orderButtonProps = useMemo(() => {
    return isMinOrderCostExceeded
      ? {
          title: 'Верно, к оплате',
          isDisabled: false,
          onClick: navigateToCart
        }
      : {
          title: `Добавьте еще на ${formattedMinOrderCostShortage}`,
          isDisabled: true
        }
  }, [navigateToCart, isMinOrderCostExceeded, formattedMinOrderCostShortage])

  return (
    <Footer.Root {...props}>
      <Footer.OrderButton
        {...orderButtonProps}
        orderCost={formattedOrderCost}
        withoutCost
      />
      <Footer.Cost>{formattedOrderCost}</Footer.Cost>
    </Footer.Root>
  )
}

export default memo(CartModalFooter)

interface Props {
  isScrollOnTop: boolean
  isScrollOnBottom: boolean
}