import { OrderStatus } from '../models/OrderStatus'
import { colors } from '@styles/colors'

export const getOrderStatusTitleColor = (status: OrderStatus): string => {
  switch (status) {
    case OrderStatus.ASSEMBLY:
      return colors.black.primary
    case OrderStatus.ON_THE_WAY:
      return colors.black.primary
    case OrderStatus.DELIVERED:
      return colors.green.primary
    case OrderStatus.CANCELED:
      return colors.red.primary
    default:
      return colors.black.primary
  }
}
