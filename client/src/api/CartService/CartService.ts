import { AxiosService } from '@api/AxiosService'
import { ApiEndpoint } from '@models/ApiEndpoint'
import type { UserCart } from '@models/user/UserCart'
import type { CartProductModel } from '@models/product/CartProduct'
import type { ShowcaseProductModel } from '@models/product/ShowcaseProduct'
import type { CartServiceModel } from './types'

class CartService extends AxiosService implements CartServiceModel {
  constructor(endpoint: ApiEndpoint) {
    super({
      endpoint,
      withCredentials: true
    })
  }

  public async fetchUserCart(): Promise<UserCart> {
    try {
      const { data } = await this.api.get<UserCart>('user')

      return data
    } catch (err) {
      throw err
    }
  }

  public async clearUserCart(cartId: string): Promise<void> {
    try {
      await this.api.patch<void>(cartId + '/clear')
    } catch (err) {
      throw err
    }
  }

  public async addProduct(
    cartId: string,
    product: Omit<ShowcaseProductModel, 'description' | 'subcategoryId'>
  ): Promise<CartProductModel> {
    try {
      const { data } = await this.api.post<CartProductModel>(
        cartId + '/add_product',
        {
          productReferenceId: product.id,
          ...product
        }
      )

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
      await this.api.patch<void>(`${cartId}/increment/${productId}`)
    } catch (err) {
      throw err
    }
  }

  public async decrementProductCount(
    cartId: string,
    productId: string
  ): Promise<void> {
    try {
      await this.api.patch<void>(`${cartId}/decrement/${productId}`)
    } catch (err) {
      throw err
    }
  }
}

export const cartService = new CartService(ApiEndpoint.CART)
