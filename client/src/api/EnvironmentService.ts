import { BaseService } from './BaseService'
import type { NavigationCategory } from '@models/NavigationCategory'

class EnvironmentService extends BaseService {
  constructor(endpoint: string) {
    super({ endpoint })
  }

  public async fetchNavigationCategories(): Promise<NavigationCategory[]> {
    try {
      const { data } = await this.api.get<NavigationCategory[]>('navigation')
      return data
    } catch (e) {
      throw e
    }
  }
}

export const environmentService = new EnvironmentService('env')
