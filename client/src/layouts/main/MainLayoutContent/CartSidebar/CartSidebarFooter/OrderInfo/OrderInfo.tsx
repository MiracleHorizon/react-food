import { useRouter } from 'next/router'

import OrderButton from '@components/order/OrderButton'
import MinOrderCostShortage from './MinOrderCostShortage'
import { useSelectOrderCostDetails } from '@stores/hooks/useSelectOrderCostDetails'
import { useSelectIsMinOrderCostExceeded } from '@stores/hooks/useSelectIsMinOrderCostExceeded'
import { numberFormatter } from '@utils/NumberFormatter'
import { DEFAULT_CURRENCY_INTL_ARGS } from '@constants/intl'
import { MIN_ORDER_COST } from '@constants/payment'
import { Routes } from '@router/Routes.enum'

const OrderInfo = () => {
  const router = useRouter()
  const isMinOrderCostExceeded = useSelectIsMinOrderCostExceeded()

  const { totalCost } = useSelectOrderCostDetails()
  const formattedOrderCost = numberFormatter.formatCurrency({
    value: totalCost,
    ...DEFAULT_CURRENCY_INTL_ARGS
  })

  const minOrderCostShortage = MIN_ORDER_COST - totalCost
  const formattedMinOrderCostShortage = numberFormatter.formatCurrency({
    value: minOrderCostShortage,
    ...DEFAULT_CURRENCY_INTL_ARGS
  })

  const navigateToCart = () => router.push(Routes.CART)

  return (
    <div>
      {isMinOrderCostExceeded ? (
        <OrderButton
          title='Верно, к оплате'
          orderCost={formattedOrderCost}
          onClick={navigateToCart}
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
