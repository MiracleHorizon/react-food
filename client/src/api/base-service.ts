import axios, { AxiosInstance } from 'axios'

export abstract class BaseService {
  protected readonly api: AxiosInstance

  protected constructor(endpoint: string) {
    this.api = axios.create({
      baseURL: process.env.SERVER_API + '/' + endpoint
    })
  }
}
