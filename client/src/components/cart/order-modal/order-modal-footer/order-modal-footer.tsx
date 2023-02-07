import { FC, useCallback, useMemo } from 'react'
import { useRouter } from 'next/router'
import { observer } from 'mobx-react-lite'

import OrderButton from '@/ui/buttons/order-button'
import { useCartStore } from '@/stores/cart.store'
import { Routes } from '@router/routes.enum'
import * as Footer from './order-modal-footer.styled'

const OrderModalFooter: FC<Props> = props => {
  const router = useRouter()

  const handleGoToCart = useCallback(() => router.push(Routes.CART), [router])

  const orderButtonProps = useMemo(() => {
    return useCartStore.isMinOrderCostExceeded
      ? {
          title: 'Верно, к оплате',
          disabled: false,
          onClick: handleGoToCart
        }
      : {
          title: `Добавьте еще на ${useCartStore.formattedOrderCostShortage}`,
          disabled: true
        }
  }, [
    handleGoToCart,
    useCartStore.isMinOrderCostExceeded,
    useCartStore.formattedOrderCostShortage
  ])

  return (
    <Footer.Root {...props}>
      <OrderButton
        {...orderButtonProps}
        cost={useCartStore.formattedTotalCost}
        withoutCost
      />
      <Footer.Price>{useCartStore.formattedTotalCost}</Footer.Price>
    </Footer.Root>
  )
}

export default observer(OrderModalFooter)

interface Props {
  isScrollOnTop: boolean
  isScrollOnBottom: boolean
}
