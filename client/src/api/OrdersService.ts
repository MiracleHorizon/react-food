import axios from 'axios'

import { BaseService } from '@api/BaseService'
import type { OrderModel } from '@modules/Orders'
import type { CreateOrderDto } from '@models/order/CreateOrderDto'

class OrdersService extends BaseService {
  constructor(endpoint: string) {
    super(endpoint)
  }

  public async create(dto: CreateOrderDto): Promise<string> {
    try {
      const { data } = await axios.post<{ orderId: string }>(this.url, dto, {
        withCredentials: true
      })

      return data.orderId
    } catch (e) {
      throw e
    }
  }

  public async fetchAllUserOrders(): Promise<OrderModel[]> {
    try {
      const { data } = await axios.get<OrderModel[]>(this.url, {
        withCredentials: true
      })

      return data
    } catch (e) {
      throw e
    }
  }

  public async fetchUserOrderById(orderId: string): Promise<OrderModel> {
    try {
      const url = this.url + '/' + orderId
      const { data } = await axios.get<OrderModel>(url, {
        withCredentials: true
      })

      return data
    } catch (e) {
      throw e
    }
  }
}

export const ordersService = new OrdersService('orders')
