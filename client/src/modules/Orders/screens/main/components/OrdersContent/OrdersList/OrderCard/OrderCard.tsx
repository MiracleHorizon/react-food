import { type FC, memo } from 'react'
import dynamic from 'next/dynamic'
import { useMediaQuery } from 'react-responsive'

import OrderCardHeader from './OrderCardHeader'
import OrderCardFooter from './OrderCardFooter'
import { useOrdersStore } from '@modules/Orders/screens/main/store'
import type { OrderModel } from '@modules/Orders/screens/main/models/Order'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import { breakpoints } from '@styles/responsiveness/breakpoints'
import { Content } from './OrderCard.styled'

// TODO: Loader
const SelectedOrder = dynamic(() => import('../../SelectedOrder'), {
  ssr: false
})

const OrderCard: FC<Props> = ({ className, ...order }) => {
  const isLaptopOrSmaller = useMediaQuery({ maxWidth: breakpoints.laptop })

  const selectOrder = useOrdersStore(state => state.selectOrder)
  const isSelected = useOrdersStore(state => state.isOrderSelected(order.id))

  const handleSelectOrder = () => {
    selectOrder(order)
    !isLaptopOrSmaller &&
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
  }

  return (
    <li className={className}>
      {(!isLaptopOrSmaller || !isSelected) && (
        <Content isSelected={isSelected} onClick={handleSelectOrder}>
          <OrderCardHeader {...order} />
          <OrderCardFooter products={order.products} />
        </Content>
      )}
      {isLaptopOrSmaller && isSelected && <SelectedOrder />}
    </li>
  )
}

export default memo(OrderCard)

type Props = OrderModel & EmotionClassNameProps
