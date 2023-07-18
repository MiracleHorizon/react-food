import { useMemo } from 'react'

import { useSelectDeliveryCost } from '@stores/hooks/useSelectDeliveryCost'
import { numberFormatter } from '@utils/NumberFormatter'
import { SERVICE_FEE } from '@constants/payment'
import { DEFAULT_CURRENCY_INTL_ARGS } from '@constants/intl'
import * as Info from './OrderInfo.styled'

export const OrderInfo = () => {
  const deliveryCost = useSelectDeliveryCost()

  const orderInfo = useMemo(() => {
    return [
      {
        title: 'Доставка',
        value: numberFormatter.formatCurrency({
          value: deliveryCost,
          ...DEFAULT_CURRENCY_INTL_ARGS
        })
      },
      {
        title: 'Работа сервиса',
        value: numberFormatter.formatCurrency({
          value: SERVICE_FEE,
          ...DEFAULT_CURRENCY_INTL_ARGS
        })
      }
    ]
  }, [deliveryCost])

  return (
    <Info.Root>
      {orderInfo.map(({ title, value }) => (
        <Info.Item key={title}>
          <span>{title}</span>
          <span>{value}</span>
        </Info.Item>
      ))}
    </Info.Root>
  )
}
