import { SERVER_API } from '@constants/env'

export abstract class BaseService {
  private readonly baseUrl: string = SERVER_API
  protected readonly url: string

  protected constructor(endpoint: string) {
    this.url = this.baseUrl + '/' + endpoint
  }
}
