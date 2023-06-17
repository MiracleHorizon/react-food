import dynamic from 'next/dynamic'
import { useCallback, useEffect, useState } from 'react'

import { useMakeOrder } from '@hooks/useMakeOrder'
import { useOrderStore } from '@stores/orderStore'
import * as Content from './CartContent.styled'

const DeliverySection = dynamic(import('./DeliverySection'), { ssr: false })
const ProductsSection = dynamic(import('./ProductsSection'), { ssr: false })
const PaySection = dynamic(import('./PaySection'), { ssr: false })

const CartContent = () => {
  const [isOrdering, setIsOrdering] = useState(false)
  const deliveryAddressDetails = useOrderStore(
    state => state.deliveryAddressDetails
  )
  const { makeOrder } = useMakeOrder()

  const startOrdering = useCallback(() => setIsOrdering(true), [])

  const endOrdering = useCallback(() => setIsOrdering(false), [])

  useEffect(() => {
    if (!deliveryAddressDetails) return

    endOrdering()
    makeOrder(deliveryAddressDetails)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deliveryAddressDetails, endOrdering])

  return (
    <Content.Root>
      <Content.LeftSide>
        <DeliverySection isOrdering={isOrdering} endOrdering={endOrdering} />
        <ProductsSection />
      </Content.LeftSide>
      <Content.RightSide>
        <PaySection startOrdering={startOrdering} />
      </Content.RightSide>
    </Content.Root>
  )
}

export default CartContent
