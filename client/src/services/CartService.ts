import { ICartProduct } from '@/models/product/ICartProduct'

export class CartService {
  public static async fetchCart(): Promise<ICartProduct[]> {
    try {
      const url = `${process.env.MOCK_API_URL}/cart`
      const response = await fetch(url)

      return response.json()
    } catch (e) {
      throw new Error()
    }
  }
}
