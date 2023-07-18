import type { FC } from 'react'

import { OrderButton } from '@components/order/OrderButton'
import { TotalOrderCost } from './TotalOrderCost'
import { useSelectOrderCostDetails } from '@stores/hooks/useSelectOrderCostDetails'
import { useSelectIsMinOrderCostExceeded } from '@stores/hooks/useSelectIsMinOrderCostExceeded'
import { numberFormatter } from '@utils/NumberFormatter'
import { MIN_ORDER_COST } from '@constants/payment'
import { DEFAULT_CURRENCY_INTL_ARGS } from '@constants/intl'
import * as Footer from './PaymentSectionFooter.styled'

export const PaymentSectionFooter: FC<Props> = ({ startOrdering }) => {
  const isMinOrderCostExceeded = useSelectIsMinOrderCostExceeded()

  const { totalCost } = useSelectOrderCostDetails()
  const formattedOrderCost = numberFormatter.formatCurrency({
    value: totalCost,
    ...DEFAULT_CURRENCY_INTL_ARGS
  })

  const minOrderCostShortage = MIN_ORDER_COST - totalCost

  return (
    <Footer.Root>
      {isMinOrderCostExceeded ? (
        <Footer.PayButton
          title='Оплатить'
          orderCost={formattedOrderCost}
          onClick={startOrdering}
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

interface Props {
  startOrdering: VoidFunction
}
