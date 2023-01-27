import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'

import OrderButton from './order-button'
import OrderCostShortage from './order-cost-shortage'
import { cartStore } from '@/stores/cart.store'
import { Routes } from '@/types/Routes'

const OrderInfo = () => {
  const router = useRouter()

  const handleGoToCart = () => router.push(Routes.CART)

  return (
    <div>
      {cartStore.minOrderCostExceeded ? (
        <OrderButton
          title='Верно, к оплате'
          cost={cartStore.formattedTotalCost}
          disabled={false}
        />
      ) : (
        <>
          <OrderCostShortage />
          <OrderButton
            title={`Добавьте еще на ${cartStore.formattedOrderCostShortage}`}
            cost={cartStore.formattedTotalCost}
            disabled={true}
            onClick={handleGoToCart}
          />
        </>
      )}
    </div>
  )
}

export default observer(OrderInfo)
