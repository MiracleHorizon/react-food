import type { CartProductModel } from '@entities/product'

export interface CartModel {
  id: string
  products: CartProductModel[]
}
