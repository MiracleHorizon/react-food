import { useSelectOrderCostDetails } from './useSelectOrderCostDetails'
import { MIN_ORDER_COST } from '@constants/payment'

export const useSelectIsMinOrderCostExceeded = () => {
  const { totalCost } = useSelectOrderCostDetails()
  return MIN_ORDER_COST - totalCost
}
