import OrderButton from '@components/order/OrderButton'
import TotalOrderCost from './TotalOrderCost'
import { useMakeOrder } from '@hooks/useMakeOrder'
import { useSelectOrderCost } from '@hooks/selectors/useSelectOrderCost'
import { useSelectIsMinOrderCostExceeded } from '@hooks/selectors/useSelectIsMinOrderCostExceeded'
import { numberFormatter } from '@utils/NumberFormatter'
import { MIN_ORDER_COST } from '@constants/payment'
import { DEFAULT_CURRENCY_INTL_ARGS } from '@constants/intl'
import * as Footer from './PaySectionFooter.styled'

const PaySectionFooter = () => {
  const makeOrder = useMakeOrder()
  const isMinOrderCostExceeded = useSelectIsMinOrderCostExceeded()

  const orderCost = useSelectOrderCost()
  const formattedOrderCost = numberFormatter.formatCurrency({
    value: orderCost,
    ...DEFAULT_CURRENCY_INTL_ARGS
  })

  const minOrderCostShortage = MIN_ORDER_COST - orderCost

  return (
    <Footer.Root>
      {isMinOrderCostExceeded ? (
        <Footer.PayButton
          title='Оплатить'
          orderCost={formattedOrderCost}
          onClick={makeOrder}
          isDisabled={false}
          withoutCost
        />
      ) : (
        <OrderButton
          title={`Добавьте еще на ${minOrderCostShortage}`}
          orderCost={formattedOrderCost}
          isDisabled
          isTransparent
        />
      )}
      <TotalOrderCost />
    </Footer.Root>
  )
}

export default PaySectionFooter
