import axios from 'axios'

import { BaseService } from '@api/BaseService'
import type { OrderModel } from '@modules/Orders/models/Order'

class OrdersService extends BaseService {
  constructor(endpoint: string) {
    super({ endpoint })
  }

  public async fetchAllUserOrders(): Promise<OrderModel[]> {
    try {
      const { data } = await axios.get<OrderModel[]>(
        `${process.env.SERVER_API}/orders`,
        {
          withCredentials: true
        }
      )
      return data
    } catch (e) {
      throw e
    }
  }
}

export const ordersService = new OrdersService('orders')
