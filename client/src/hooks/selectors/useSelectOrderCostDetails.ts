import { useUserStore } from '@stores/userStore'
import { useCartStore } from '@stores/cartStore'
import { useSelectDeliveryCost } from './useSelectDeliveryCost'
import { SERVICE_FEE } from '@constants/payment'
import type { OrderCostDetails } from '@models/order/OrderCostDetails'

export const useSelectOrderCostDetails = (): OrderCostDetails => {
  const user = useUserStore(state => state.user)
  const totalProductsCost = useCartStore(state => state.totalProductsCost())
  const deliveryCost = useSelectDeliveryCost()

  if (!user) {
    return {
      totalCost: 0,
      productsCost: 0,
      deliveryCost: 0
    }
  }

  return {
    totalCost: totalProductsCost + deliveryCost + SERVICE_FEE,
    productsCost: totalProductsCost,
    deliveryCost
  }
}
