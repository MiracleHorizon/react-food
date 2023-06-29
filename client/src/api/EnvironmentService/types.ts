import type { NavigationCategory } from '@models/NavigationCategory'

export interface EnvironmentServiceModel {
  fetchNavigationCategories(): Promise<NavigationCategory[]>
}
