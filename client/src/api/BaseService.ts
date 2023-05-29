import axios, { type AxiosInstance, type CreateAxiosDefaults } from 'axios'

import { SERVER_API } from '@constants/env'

export abstract class BaseService {
  protected readonly api: AxiosInstance

  protected constructor({ endpoint, ...createAxiosDefaults }: Constructor) {
    this.api = axios.create({
      baseURL: SERVER_API + '/' + endpoint,
      ...createAxiosDefaults
    })
  }
}

interface Constructor extends Omit<CreateAxiosDefaults, 'baseURL'> {
  endpoint: string
}
