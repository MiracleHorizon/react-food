import { useCartStore } from '@/stores/cart.store'
import { useNavigationStore } from '@/layouts/main'
import type { EnvironmentData } from './fetch-environment-data'

export const initializeEnvironmentData = ({
  deliveryParameters,
  navigationCategories
}: EnvironmentData): void => {
  useCartStore.setParameters(deliveryParameters)
  useNavigationStore.setCategories(navigationCategories)
}
