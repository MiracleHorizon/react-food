import { AxiosService } from '@api/AxiosService'
import { ApiEndpoint } from '@models/ApiEndpoint'
import type { OrderModel } from '@modules/Orders'
import type { CreateOrderDto } from '@models/order/CreateOrderDto'
import type { OrdersServiceModel } from './types'

class OrdersService extends AxiosService implements OrdersServiceModel {
  constructor(endpoint: ApiEndpoint) {
    super({
      endpoint,
      withCredentials: true
    })
  }

  public async create(dto: CreateOrderDto): Promise<string> {
    try {
      const { data } = await this.api.post<{ orderId: string }>('', dto)

      return data.orderId
    } catch (err) {
      throw err
    }
  }

  public async fetchAllUserOrders(): Promise<OrderModel[]> {
    try {
      const { data } = await this.api.get<OrderModel[]>('')

      return data
    } catch (err) {
      throw err
    }
  }

  public async fetchUserOrderById(orderId: string): Promise<OrderModel> {
    try {
      const { data } = await this.api.get<OrderModel>(orderId)

      return data
    } catch (err) {
      throw err
    }
  }
}

export const ordersService = new OrdersService(ApiEndpoint.ORDERS)
