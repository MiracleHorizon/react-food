import type { FC } from 'react'

import { SelectedOrderHeader } from './SelectedOrderHeader'
import { SelectedOrderAddress } from './SelectedOrderAddress'
import { SelectedOrderList } from './SelectedOrderList'
import { SelectedOrderPayment } from './SelectedOrderPayment'
import { useOrdersStore } from '@modules/Orders/store'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import { Root } from './SelectedOrder.styled'

// TODO: Scroll top
export const SelectedOrder: FC<EmotionClassNameProps> = props => {
  const selectedOrder = useOrdersStore(state => state.selectedOrder)

  if (!selectedOrder) {
    return null
  }

  return (
    <Root {...props}>
      <SelectedOrderHeader {...selectedOrder} />
      <SelectedOrderAddress deliveryAddress={selectedOrder.deliveryAddress} />
      <SelectedOrderList products={selectedOrder.products} />
      <SelectedOrderPayment {...selectedOrder} />
    </Root>
  )
}
