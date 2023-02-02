import { useMemo } from 'react'
import { observer } from 'mobx-react-lite'

import { deliveryStore } from '@/stores/delivery.store'
import * as Info from './order-info.styled'

const OrderInfo = () => {
  const {
    description: { formattedServiceFee },
    formattedDeliveryPrice
  } = deliveryStore

  const info = useMemo(() => {
    return [
      { title: 'Доставка', value: formattedDeliveryPrice },
      { title: 'Работа сервиса', value: formattedServiceFee }
    ]
  }, [formattedDeliveryPrice, formattedServiceFee])

  return (
    <Info.Root>
      {info.map(({ title, value }) => (
        <Info.Item key={title}>
          <span>{title}</span>
          <span>{value}</span>
        </Info.Item>
      ))}
    </Info.Root>
  )
}

export default observer(OrderInfo)
