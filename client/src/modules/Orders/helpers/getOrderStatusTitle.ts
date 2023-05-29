import { OrderStatus } from '../models/OrderStatus'

export const getOrderStatusTitle = (status: OrderStatus): string => {
  switch (status) {
    case OrderStatus.ASSEMBLY:
      return 'Собирается'
    case OrderStatus.ON_THE_WAY:
      return 'В пути'
    case OrderStatus.DELIVERED:
      return 'Доставлен'
    case OrderStatus.CANCELED:
      return 'Отменен'
    default:
      return 'Собирается'
  }
}
