import axios from 'axios'

import { Routes } from '@/types/Routes'
import type { ProductModel } from '@/entities/product'

class CartService {
  private readonly api = axios.create({
    baseURL: process.env.MOCK_API_URL + Routes.CART
  })

  public async fetchCart(): Promise<ProductModel[]> {
    try {
      const { data } = await this.api.get<ProductModel[]>('')

      return data
    } catch (e) {
      throw e
    }
  }
}

export const cartService = new CartService()
