import type { CreateOrderDto } from '@models/order/CreateOrderDto'
import type { OrderModel } from '@modules/Orders'

export interface OrdersServiceModel {
  create(dto: CreateOrderDto): Promise<string>
  fetchAllUserOrders(): Promise<OrderModel[]>
  fetchUserOrderById(orderId: string): Promise<OrderModel>
}
