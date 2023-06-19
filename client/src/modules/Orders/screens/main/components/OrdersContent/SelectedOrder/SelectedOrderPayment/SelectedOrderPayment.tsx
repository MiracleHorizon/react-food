import { type FC, useMemo } from 'react'

import { numberFormatter } from '@utils/NumberFormatter'
import { DEFAULT_CURRENCY_INTL_ARGS } from '@constants/intl'
import type { OrderModel } from '@modules/Orders/screens/main/models/Order'
import { SectionTitle } from '../SelectedOrder.styled'
import * as Payment from './SelectedOrderPayment.styled'

const SelectedOrderPayment: FC<Props> = ({
  totalCost,
  productsCost,
  deliveryCost,
  serviceFee
}) => {
  const items = useMemo(() => {
    return [
      { title: 'Стоимость товаров', value: productsCost },
      { title: 'Стоимость доставки', value: deliveryCost },
      { title: 'Сервисный сбор', value: serviceFee }
    ]
  }, [productsCost, deliveryCost, serviceFee])

  return (
    <section>
      <SectionTitle>Оплата</SectionTitle>
      <Payment.List>
        {items.map(({ title, value }) => (
          <Payment.ListItem key={title}>
            <span>{title}</span>
            <span>
              {numberFormatter.formatCurrency({
                value,
                ...DEFAULT_CURRENCY_INTL_ARGS
              })}
            </span>
          </Payment.ListItem>
        ))}
        <Payment.TotalCost>
          <span>Итого</span>
          <span>
            {numberFormatter.formatCurrency({
              value: totalCost,
              ...DEFAULT_CURRENCY_INTL_ARGS
            })}
          </span>
        </Payment.TotalCost>
      </Payment.List>
    </section>
  )
}

export default SelectedOrderPayment

type Props = Pick<
  OrderModel,
  'totalCost' | 'productsCost' | 'deliveryCost' | 'serviceFee'
>
