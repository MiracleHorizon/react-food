import { AxiosService } from '@api/AxiosService'
import { ApiEndpoint } from '@models/ApiEndpoint'
import type { NavigationCategory } from '@models/NavigationCategory'
import type { EnvironmentServiceModel } from './types'

class EnvironmentService
  extends AxiosService
  implements EnvironmentServiceModel
{
  constructor(endpoint: ApiEndpoint) {
    super({ endpoint })
  }

  public async fetchNavigationCategories(): Promise<NavigationCategory[]> {
    try {
      const { data } = await this.api.get<NavigationCategory[]>('navigation')

      return data
    } catch (err) {
      throw err
    }
  }
}

export const environmentService = new EnvironmentService(
  ApiEndpoint.ENVIRONMENT
)
