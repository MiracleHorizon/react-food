import { cartService } from '@/api/services/cart.service'
import { ordersService } from '@/api/services/orders.service'
import { productCategoryService } from '@/modules/product-category'
import type { CartModel } from '@/models/cart.model'
import type { OrderParameters } from '@/stores/cart.store'
import type { NavigationCategory } from '@/models/navigation-category'

export const baseMainLayoutApiRequest = async (
  cartId: string
): Promise<BaseMainLayoutApiRequest> => {
  const cart = await cartService.fetchCart(cartId)
  const navCategories = await productCategoryService.fetchNavCategories()
  const orderParameters = await ordersService.fetchOrderParameters()

  return {
    cart,
    navCategories,
    orderParameters
  }
}

export interface BaseMainLayoutApiRequest {
  cart: CartModel
  orderParameters: OrderParameters
  navCategories: NavigationCategory[]
}
