import type { CartProductModel } from '@models/product/CartProduct'
import type { ShowcaseProductModel } from '@models/product/ShowcaseProduct'

export interface CartServiceModel {
  clearUserCart(cartId: string): Promise<void>
  addProduct(
    cartId: string,
    product: Omit<ShowcaseProductModel, 'description' | 'subcategoryId'>
  ): Promise<CartProductModel>
  incrementProductCount(cartId: string, productId: string): Promise<void>
  decrementProductCount(cartId: string, productId: string): Promise<void>
}
