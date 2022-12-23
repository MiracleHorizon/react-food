import axios from 'axios'

import type { CartProductModel } from '@/models/product/CartProductModel'

const api = axios.create({
  baseURL: process.env.MOCK_API_URL + '/cart'
})

export default class CartService {
  public static async fetchCart(): Promise<CartProductModel[]> {
    try {
      const { data } = await api.get<CartProductModel[]>('')

      return data
    } catch (e) {
      throw new Error()
    }
  }
}
