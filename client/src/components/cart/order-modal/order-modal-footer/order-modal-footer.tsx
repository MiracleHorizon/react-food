import { FC, useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import { observer } from 'mobx-react-lite'

import OrderButton from '@/ui/buttons/order-button'
import { cartStore } from '@/stores/cart.store'
import { Routes } from '@/types/routes'
import * as Footer from './order-modal-footer.styled'

const OrderModalFooter: FC<Props> = props => {
  const router = useRouter()

  const handleGoToCart = useCallback(() => router.push(Routes.CART), [router])

  const orderButtonProps = useMemo(() => {
    return cartStore.isMinOrderCostExceeded
      ? {
          title: 'Верно, к оплате',
          disabled: false,
          onClick: handleGoToCart
        }
      : {
          title: `Добавьте еще на ${cartStore.formattedOrderCostShortage}`,
          disabled: true
        }
  }, [
    handleGoToCart,
    cartStore.isMinOrderCostExceeded,
    cartStore.formattedOrderCostShortage
  ])

  return (
    <Footer.Root {...props}>
      <OrderButton
        {...orderButtonProps}
        cost={cartStore.formattedTotalCost}
        withoutCost
      />
      <Footer.Price>{cartStore.formattedTotalCost}</Footer.Price>
    </Footer.Root>
  )
}

export default observer(OrderModalFooter)

interface Props {
  isScrollOnTop: boolean
  isScrollOnBottom: boolean
}
