import type { UserCart } from '@models/UserCart'
import type { CartProduct } from '@entities/CartProduct'
import type { ShowcaseProductModel } from '@models/product/ShowcaseProduct'

export type CartStore = State & Computed & Action

interface State {
  userCartId: string | null
  products: CartProduct[]
}

interface Computed {
  isEmpty: () => boolean
  totalProductsCost: () => number
  totalProductsWeight: () => number
  totalPositions: () => number
  withReadyMeal: () => boolean
}

interface Action {
  initialize: (userCart: UserCart) => void
  deinitialize: VoidFunction
  addProduct: (showcaseProduct: ShowcaseProductModel) => Promise<void>
  removeProduct: (productId: string) => void
  incrementProductCount: (productReferenceId: string) => Promise<void>
  decrementProductCount: (productReferenceId: string) => Promise<void>
  clearCart: VoidFunction
  getProductCount: (productReferenceId: string) => number
  isProductInCart: (productReferenceId: string) => boolean
}
