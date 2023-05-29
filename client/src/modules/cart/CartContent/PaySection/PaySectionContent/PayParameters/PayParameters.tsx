import { useMemo } from 'react'

import PayParametersItem from './PayParametersItem'
import { useCartStore } from '@stores/cartStore'
import { useSelectDeliveryCost } from '@hooks/selectors/useSelectDeliveryCost'
import { numberFormatter } from '@utils/NumberFormatter'
import { DEFAULT_CURRENCY_INTL_ARGS } from '@constants/intl'
import { SERVICE_FEE } from '@constants/payment'

const PayParameters = () => {
  const productsCost = useCartStore(state => state.totalProductsCost())
  const deliveryCost = useSelectDeliveryCost()

  const parameters = useMemo(() => {
    return [
      {
        title: 'Стоимость продуктов',
        value: numberFormatter.formatCurrency({
          value: productsCost,
          ...DEFAULT_CURRENCY_INTL_ARGS
        })
      },
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
  }, [productsCost, deliveryCost])

  return (
    <ul>
      {parameters.map(parameter => (
        <PayParametersItem key={parameter.title} {...parameter} />
      ))}
    </ul>
  )
}

export default PayParameters
