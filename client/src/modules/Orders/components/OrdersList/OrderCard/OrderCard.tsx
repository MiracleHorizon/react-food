import { type FC, memo } from 'react'

import OrderCardHeader from './OrderCardHeader'
import OrderCardFooter from './OrderCardFooter'
import { useOrdersStore } from '@modules/Orders/store'
import { checkIsClient } from '@helpers/checkIsClient'
import type { OrderModel } from '@modules/Orders/models/Order'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import { maxDeviceWidth } from '@styles/responsiveness/devices'
import { Root } from './OrderCard.styled'

const OrderCard: FC<Props> = ({ className, ...order }) => {
  const selectOrder = useOrdersStore(state => state.selectOrder)
  const isSelected = useOrdersStore(state => state.isOrderSelected(order.id))

  const handleSelectOrder = () => {
    selectOrder(order)

    if (!checkIsClient()) return

    const isTablet = window.matchMedia(`(${maxDeviceWidth.tablet})`).matches
    !isTablet &&
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
  }

  return (
    <Root
      className={className}
      isSelected={isSelected}
      onClick={handleSelectOrder}
    >
      <OrderCardHeader {...order} />
      <OrderCardFooter products={order.products} />
    </Root>
  )
}

export default memo(OrderCard)

type Props = OrderModel & EmotionClassNameProps
