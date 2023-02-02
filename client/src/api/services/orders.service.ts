import { BaseService } from '../base-service'
import type { OrderParameters } from '@/stores/cart.store'

class OrdersService extends BaseService {
  constructor() {
    super('orders')
  }

  public async fetchOrderParameters(): Promise<OrderParameters> {
    try {
      const { data } = await this.api.get('parameters')

      return data
    } catch (e) {
      throw e
    }
  }
}

export const ordersService = new OrdersService()
