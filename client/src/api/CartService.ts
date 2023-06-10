import { BaseService } from './BaseService'
import type { UserCart } from '@models/UserCart'
import type { CartProductModel } from '@models/product/CartProduct'
import type { ShowcaseProductModel } from '@models/product/ShowcaseProduct' // TODO: Права доступа для эндпоинтов

// TODO: Права доступа для эндпоинтов
class CartService extends BaseService {
  constructor(endpoint: string) {
    super(endpoint)
  }

  public async fetchUserCart(userId: string): Promise<UserCart> {
    try {
      const url = this.url + '/' + userId
      const response = await fetch(url)

      return response.json()
    } catch (e) {
      throw e
    }
  }

  public async clearUserCart(cartId: string): Promise<void> {
    try {
      const url = `${this.url}/${cartId}/clear`
      await fetch(url, {
        method: 'PATCH'
      })
    } catch (e) {
      throw e
    }
  }

  public async addProduct(
    cartId: string,
    product: Omit<ShowcaseProductModel, 'description' | 'subcategoryId'>
  ): Promise<CartProductModel> {
    try {
      const url = `${this.url}/${cartId}/add_product`
      const body = {
        productReferenceId: product.id,
        ...product
      }
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body)
      })

      return response.json()
    } catch (e) {
      throw e
    }
  }

  public async incrementProductCount(
    cartId: string,
    productId: string
  ): Promise<void> {
    try {
      const url = `${this.url}/${cartId}/increment/${productId}`
      await fetch(url, {
        method: 'PATCH'
      })
    } catch (e) {
      throw e
    }
  }

  public async decrementProductCount(
    cartId: string,
    productId: string
  ): Promise<void> {
    try {
      const url = `${this.url}/${cartId}/decrement/${productId}`
      await fetch(url, {
        method: 'PATCH'
      })
    } catch (e) {
      throw e
    }
  }
}

export const cartService = new CartService('cart')
