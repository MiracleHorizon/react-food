import { ordersService } from '@/api/services/orders.service'
import { productCategoryService } from '@/modules/product-category'
import type { OrderParameters } from '@/stores/cart.store'
import type { NavigationCategory } from '@/models/navigation-category'

export interface EnvironmentData {
  deliveryParameters: OrderParameters
  navigationCategories: NavigationCategory[]
}

export const fetchEnvironmentData = async (): Promise<EnvironmentData> => {
  const deliveryParameters = await ordersService.fetchDeliveryParameters()
  const navigationCategories = await productCategoryService.fetchNavigation()

  return {
    deliveryParameters,
    navigationCategories
  }
}
