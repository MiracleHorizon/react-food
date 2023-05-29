import { useSelectOrderCost } from './useSelectOrderCost'
import { MIN_ORDER_COST } from '@constants/payment'

export const useSelectIsMinOrderCostExceeded = () => {
  const orderCost = useSelectOrderCost()
  return MIN_ORDER_COST - orderCost
}
