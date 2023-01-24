import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'

import CartStore from '@/stores/Cart.store'
import OrderButton from './order-button'
import OrderCostShortage from './order-cost-shortage'
import { Routes } from '@/types/Routes'

const OrderInfo = () => {
  const router = useRouter()

  const handleGoToCart = () => router.push(Routes.CART)

  return (
    <div>
      {CartStore.minOrderCostExceeded ? (
        <OrderButton
          title='Верно, к оплате'
          cost={CartStore.getFormattedTotalCost()}
          disabled={false}
        />
      ) : (
        <>
          <OrderCostShortage />
          <OrderButton
            title={`Добавьте еще на ${CartStore.getFormattedOrderCostShortage()}`}
            cost={CartStore.getFormattedTotalCost()}
            disabled={true}
            onClick={handleGoToCart}
          />
        </>
      )}
    </div>
  )
}

export default observer(OrderInfo)
