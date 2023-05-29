import dynamic from 'next/dynamic'

import { useCartStore } from '@stores/cartStore'
import * as Content from './CartContent.styled'

const EmptyCart = dynamic(import('../EmptyCart'), {
  ssr: true
})
const DeliverySection = dynamic(import('./DeliverySection'), {
  ssr: true
})
const ProductsSection = dynamic(import('./ProductsSection'), {
  ssr: true
})
const PaySection = dynamic(import('./PaySection'), {
  ssr: true
})

const CartContent = () => {
  const isCartEmpty = useCartStore(state => state.isEmpty())

  if (isCartEmpty) {
    return <EmptyCart />
  }

  return (
    <Content.Root>
      <Content.LeftSide>
        <DeliverySection />
        <ProductsSection />
      </Content.LeftSide>
      <Content.RightSide>
        <PaySection />
      </Content.RightSide>
    </Content.Root>
  )
}

export default CartContent
