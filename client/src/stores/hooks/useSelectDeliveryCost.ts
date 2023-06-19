import { useCartStore } from '@stores/cartStore'
import { useDeliveryStore } from '@stores/deliveryStore'

export const useSelectDeliveryCost = () => {
  const totalProductsCost = useCartStore(state => state.totalProductsCost())
  const deliveryInfo = useDeliveryStore(state => state.deliveryInfo)

  if (!deliveryInfo) {
    return 0
  }

  return totalProductsCost < deliveryInfo.freeCostMark
    ? deliveryInfo.costRange.end
    : 0
}
