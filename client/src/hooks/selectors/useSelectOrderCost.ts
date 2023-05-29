import { useUserStore } from '@stores/userStore'
import { useCartStore } from '@stores/cartStore'
import { useOrderStore } from '@stores/orderStore'
import { useSelectDeliveryCost } from './useSelectDeliveryCost'
import { SERVICE_FEE } from '@constants/payment'

export const useSelectOrderCost = (): number => {
  const user = useUserStore(state => state.user)
  const withBonusCoins = useOrderStore(state => state.withBonusCoins())
  const totalProductsCost = useCartStore(state => state.totalProductsCost())
  const deliveryCost = useSelectDeliveryCost()

  if (!user) {
    return 0
  }

  const orderCost = totalProductsCost + deliveryCost + SERVICE_FEE
  return withBonusCoins ? orderCost - user.bonusCoins : orderCost
}
