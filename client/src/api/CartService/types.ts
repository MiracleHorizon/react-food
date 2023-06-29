import type { UserCart } from '@models/user/UserCart'
import type { CartProductModel } from '@models/product/CartProduct'
import type { ShowcaseProductModel } from '@models/product/ShowcaseProduct'

export interface CartServiceModel {
  fetchUserCart(): Promise<UserCart>
  clearUserCart(cartId: string): Promise<void>
  addProduct(
    cartId: string,
    product: Omit<ShowcaseProductModel, 'description' | 'subcategoryId'>
  ): Promise<CartProductModel>
  incrementProductCount(cartId: string, productId: string): Promise<void>
  decrementProductCount(cartId: string, productId: string): Promise<void>
}
