import { BaseService } from '@/api/base-service'
import type { CartModel } from '@/models/cart.model'
import type { CartProductModel, ShowcaseProductModel } from '@/entities/product'

export class CartService extends BaseService {
  constructor() {
    super('cart')
  }

  public async fetchCart(cartId: string): Promise<CartModel> {
    try {
      const { data } = await this.api.get<CartModel>(cartId)

      return data
    } catch (e) {
      throw e
    }
  }

  public async clearCart(cartId: string): Promise<void> {
    try {
      await this.api.patch(`${cartId}/clear`)
    } catch (e) {
      throw e
    }
  }

  public async addProduct(
    cartId: string,
    product: Omit<ShowcaseProductModel, 'description' | 'subcategoryId'>
  ): Promise<CartProductModel> {
    try {
      const { data } = await this.api.post(`${cartId}/add_product`, {
        productReferenceId: product.id,
        ...product
      })

      return data
    } catch (e) {
      throw e
    }
  }

  public async incrementProductCount(
    cartId: string,
    productId: string
  ): Promise<void> {
    try {
      await this.api.patch(`${cartId}/increment/${productId}`)
    } catch (e) {
      throw e
    }
  }

  public async decrementProductCount(
    cartId: string,
    productId: string
  ): Promise<void> {
    try {
      await this.api.patch(`${cartId}/decrement/${productId}`)
    } catch (e) {
      throw e
    }
  }
}

export const cartService = new CartService()
