import dynamic from 'next/dynamic'
import { useCallback, useEffect, useState } from 'react'

import { useMakeOrder } from '@stores/hooks/useMakeOrder'
import { useOrderStore } from '@stores/orderStore'
import * as Content from './CartContent.styled'

const DeliverySection = dynamic(
  import('./DeliverySection').then(mod => mod.DeliverySection),
  { ssr: false }
)
const ProductsSection = dynamic(
  import('./ProductsSection').then(mod => mod.ProductsSection),
  { ssr: false }
)
const PaySection = dynamic(
  import('./PaymentSection').then(mod => mod.PaymentSection),
  { ssr: false }
)

export const CartContent = () => {
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
