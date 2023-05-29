import { useRouter } from 'next/router'

import OrderButton from '@components/order/OrderButton'
import MinOrderCostShortage from './MinOrderCostShortage'
import { useSelectOrderCost } from '@hooks/selectors/useSelectOrderCost'
import { useSelectIsMinOrderCostExceeded } from '@hooks/selectors/useSelectIsMinOrderCostExceeded'
import { numberFormatter } from '@utils/NumberFormatter'
import { DEFAULT_CURRENCY_INTL_ARGS } from '@constants/intl'
import { MIN_ORDER_COST } from '@constants/payment'
import { Routes } from '@router/Routes.enum'

const OrderInfo = () => {
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

  const handleNavigateToCart = () => router.push(Routes.CART)

  return (
    <div>
      {isMinOrderCostExceeded ? (
        <OrderButton
          title='Верно, к оплате'
          orderCost={formattedOrderCost}
          onClick={handleNavigateToCart}
          isDisabled={false}
        />
      ) : (
        <>
          <MinOrderCostShortage />
          <OrderButton
            title={`Добавьте еще на ${formattedMinOrderCostShortage}`}
            orderCost={formattedOrderCost}
            isDisabled
            isTransparent
          />
        </>
      )}
    </div>
  )
}

export default OrderInfo
