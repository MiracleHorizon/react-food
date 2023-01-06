import axios from 'axios'

import type { CartProductModel } from '@/models/product/CartProductModel'

export default class CartService {
  private static api = axios.create({
    baseURL: process.env.MOCK_API_URL + '/cart'
  })

  public static async fetchCart(): Promise<CartProductModel[]> {
    try {
      const { data } = await this.api.get<CartProductModel[]>('')

      return data
    } catch (e) {
      throw e
    }
  }
}
