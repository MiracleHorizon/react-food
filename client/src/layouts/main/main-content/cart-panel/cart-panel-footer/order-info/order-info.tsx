import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'

import OrderCostShortage from './order-cost-shortage'
import OrderButton from '@ui/buttons/order-button'
import { useCartStore } from '@stores/cart.store'
import { Routes } from '@router/routes.enum'

const OrderInfo = () => {
  const router = useRouter()

  const handleGoToCart = () => router.push(Routes.CART)

  return (
    <div>
      {useCartStore.isMinOrderCostExceeded ? (
        <OrderButton
          title='Верно, к оплате'
          cost={useCartStore.formattedTotalCost}
          onClick={handleGoToCart}
          disabled={false}
        />
      ) : (
        <>
          <OrderCostShortage />
          <OrderButton
            title={`Добавьте еще на ${useCartStore.formattedOrderCostShortage}`}
            cost={useCartStore.formattedTotalCost}
            transparentDisableColor
            disabled
          />
        </>
      )}
    </div>
  )
}

export default observer(OrderInfo)
