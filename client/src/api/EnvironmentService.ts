import { BaseService } from './BaseService'
import type { NavigationCategory } from '@models/NavigationCategory'

class EnvironmentService extends BaseService {
  constructor(endpoint: string) {
    super(endpoint)
  }

  public async fetchNavigationCategories(): Promise<NavigationCategory[]> {
    try {
      const url = this.url + '/navigation'
      const response = await fetch(url)

      return response.json()
    } catch (e) {
      throw e
    }
  }
}

export const environmentService = new EnvironmentService('env')
