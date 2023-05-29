import type { CartProductModel } from './product/CartProduct'

export interface UserCart {
  id: string
  products: CartProductModel[]
}
