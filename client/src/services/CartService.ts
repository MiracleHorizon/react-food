import axios from 'axios'

import type { TCartProduct } from '@/models/product/TCartProduct'

const api = axios.create({
  baseURL: process.env.MOCK_API_URL + '/cart'
})

export default class CartService {
  public static async fetchCart(): Promise<TCartProduct[]> {
    try {
      const { data } = await api.get<TCartProduct[]>('')

      return data
    } catch (e) {
      throw new Error()
    }
  }
}
