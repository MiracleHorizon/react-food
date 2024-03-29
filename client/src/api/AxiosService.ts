import axios, { type AxiosInstance, type CreateAxiosDefaults } from 'axios'

import { SERVER_API } from '@constants/env'
import type { ApiEndpoint } from '@models/ApiEndpoint'

export abstract class AxiosService {
  protected readonly api: AxiosInstance

  protected constructor({ endpoint, ...createAxiosDefaults }: Constructor) {
    this.api = axios.create({
      baseURL: SERVER_API + '/' + endpoint,
      ...createAxiosDefaults
    })
  }
}

interface Constructor extends Omit<CreateAxiosDefaults, 'baseURL'> {
  endpoint: ApiEndpoint
}
