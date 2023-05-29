import axios from 'axios'

import { BaseService } from '@api/BaseService'
import type { UserCart } from '@models/UserCart'
import type { CartProductModel } from '@models/product/CartProduct'
import type { ShowcaseProductModel } from '@models/product/ShowcaseProduct' // TODO: Axios

// TODO: Axios
class CartService extends BaseService {
  constructor(endpoint: string) {
    super({ endpoint })
  }

  public async fetchUserCart(userId: string): Promise<UserCart> {
    try {
      // const { data } = await this.api.get<UserCart>(userId)
      const { data } = await axios.get<UserCart>(
        `${process.env.SERVER_API}/cart/${userId}`
      )
      return data
    } catch (e) {
      throw e
    }
  }

  public async clearUserCart(cartId: string): Promise<void> {
    try {
      await this.api.patch(cartId + '/clear')
    } catch (e) {
      throw e
    }
  }

  public async addProduct(
    cartId: string,
    product: Omit<ShowcaseProductModel, 'description' | 'subcategoryId'>
  ): Promise<CartProductModel> {
    try {
      const postData = {
        productReferenceId: product.id,
        ...product
      }
      const { data } = await this.api.post<CartProductModel>(
        cartId + '/add_product',
        postData
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
      await this.api.patch(cartId + '/increment/' + productId)
    } catch (e) {
      throw e
    }
  }

  public async decrementProductCount(
    cartId: string,
    productId: string
  ): Promise<void> {
    try {
      await this.api.patch(cartId + '/decrement/' + productId)
    } catch (e) {
      throw e
    }
  }
}

export const cartService = new CartService('cart')
