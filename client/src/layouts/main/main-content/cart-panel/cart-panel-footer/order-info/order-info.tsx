import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'

import OrderButton from '@/ui/buttons/order-button'
import OrderCostShortage from './order-cost-shortage'
import { cartStore } from '@/stores/cart.store'
import { Routes } from '@/types/routes'

const OrderInfo = () => {
  const router = useRouter()

  const handleGoToCart = () => router.push(Routes.CART)

  return (
    <div>
      {cartStore.isMinOrderCostExceeded ? (
        <OrderButton
          title='Верно, к оплате'
          cost={cartStore.formattedTotalCost}
          onClick={handleGoToCart}
          disabled={false}
        />
      ) : (
        <>
          <OrderCostShortage />
          <OrderButton
            title={`Добавьте еще на ${cartStore.formattedOrderCostShortage}`}
            cost={cartStore.formattedTotalCost}
            transparentDisableColor
            disabled
          />
        </>
      )}
    </div>
  )
}

export default observer(OrderInfo)
