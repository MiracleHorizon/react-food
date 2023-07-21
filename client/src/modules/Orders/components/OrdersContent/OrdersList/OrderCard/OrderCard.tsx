import { type FC, memo, useMemo } from 'react'
import dynamic from 'next/dynamic'
import { useMediaQuery } from 'react-responsive'

import { OrderCardHeader } from './OrderCardHeader'
import { OrderCardFooter } from './OrderCardFooter'
import { useOrdersStore } from '@modules/Orders/store'
import { OrderImpl } from '@modules/Orders/entities/Order'
import type { OrderModel } from '@modules/Orders/models/Order'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'
import { breakpoints } from '@styles/responsiveness/breakpoints'
import { Content } from './OrderCard.styled'

// TODO: Loader
const SelectedOrder = dynamic(
  () => import('../../SelectedOrder').then(mod => mod.SelectedOrder),
  { ssr: false }
)

export const OrderCard: FC<Props> = memo(({ className, ...orderData }) => {
  const isLaptopOrSmaller = useMediaQuery({ maxWidth: breakpoints.laptop })
  const orderImpl = useMemo(() => new OrderImpl(orderData), [orderData.id])

  const selectOrder = useOrdersStore(state => state.selectOrder)
  const isSelected = useOrdersStore(state =>
    state.isOrderSelected(orderData.id)
  )

  const handleSelectOrder = () => {
    selectOrder(orderData)
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
          <OrderCardHeader
            {...orderData}
            formattedDate={orderImpl.getFormattedDate()}
            statusColor={orderImpl.getStatusColor()}
            statusTitle={orderImpl.getStatusTitle()}
          />
          <OrderCardFooter products={orderData.products} />
        </Content>
      )}
      {isLaptopOrSmaller && isSelected && <SelectedOrder />}
    </li>
  )
})

type Props = OrderModel & EmotionClassNameProps
