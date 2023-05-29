import { useCartStore } from '@stores/cartStore'
import { useCutleryStore } from '@stores/cutleryStore'
import { useSelectOrderCost } from './useSelectOrderCost'
import { useSelectDeliveryCost } from './useSelectDeliveryCost'
import { SERVICE_FEE } from '@constants/payment'

export const useSelectOrderParams = () => {
  const cutleryCount = useCutleryStore(state => state.count)
  const productsCost = useCartStore(state => state.totalProductsCost())
  const deliveryCost = useSelectDeliveryCost()
  const orderCost = useSelectOrderCost()

  return {
    cost: orderCost,
    productsCost,
    deliveryCost,
    serviceFee: SERVICE_FEE,
    cutleryCount,
    deliveryTimeRange: {
      start: 20,
      end: 40
    }
  }
}
