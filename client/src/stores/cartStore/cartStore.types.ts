import type { CartProduct } from '@entities/CartProduct'
import type { CartProductModel } from '@models/product/CartProduct'
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
  initialize: (args: InitializeCartArgs) => void
  deinitialize: VoidFunction
  addProduct: (showcaseProduct: ShowcaseProductModel) => Promise<void>
  removeProduct: (productId: string) => void
  incrementProductCount: (productReferenceId: string) => Promise<void>
  decrementProductCount: (productReferenceId: string) => Promise<void>
  clearCart: () => Promise<void>
  getProductCount: (productReferenceId: string) => number
  isProductInCart: (productReferenceId: string) => boolean
}

interface InitializeCartArgs {
  userCartId: string
  products: CartProductModel[]
}
