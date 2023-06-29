import { AxiosError } from 'axios'
import Cookie from 'js-cookie'

import { AxiosService } from '@api/AxiosService'
import { ApiEndpoint } from '@models/ApiEndpoint'
import {
  ACCESS_TOKEN_COOKIE_NAME,
  REFRESH_TOKEN_COOKIE_NAME
} from '@constants/cookie'
import type { SignupDto } from '@app-types/auth/SignupDto'
import type { SigninDto } from '@app-types/auth/SigninDto'
import type { UserModel } from '@models/user/User'
import type {
  AuthServiceModel,
  FetchRoleResponse,
  SignupResponse
} from './types'

class AuthService extends AxiosService implements AuthServiceModel {
  constructor(endpoint: ApiEndpoint) {
    super({
      endpoint,
      withCredentials: true
    })
  }

  public async signup(dto: SignupDto): Promise<SignupResponse> {
    try {
      const { data } = await this.api.post<SignupResponse>('local/signup', dto)

      return data
    } catch (err) {
      throw err
    }
  }

  public async signin(dto: SigninDto): Promise<UserModel> {
    try {
      const { data } = await this.api.post<UserModel>('local/signin', dto)

      return data
    } catch (err) {
      throw err
    }
  }

  public async signout(): Promise<void> {
    try {
      await this.api<void>('signout', { method: 'PATCH' })
    } catch (err) {
      throw err
    }
  }

  public async refresh(): Promise<UserModel> {
    try {
      const { data } = await this.api.post<UserModel>('refresh')

      return data
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        this.handleResponseErrorStatus(err)
      }

      throw err
    }
  }

  public async fetchRole(refreshToken: string): Promise<FetchRoleResponse> {
    try {
      const response = await fetch(this.api.getUri() + 'role', {
        headers: {
          Cookie: `${REFRESH_TOKEN_COOKIE_NAME}=${refreshToken}`
        }
      })

      return response.json()
    } catch (err) {
      throw err
    }
  }

  private handleResponseErrorStatus(error: AxiosError): void {
    const status = error.response?.status
    if (status === 401 || status === 404) {
      this.clearAuthCookies()
    }
  }

  private clearAuthCookies(): void {
    Cookie.remove(REFRESH_TOKEN_COOKIE_NAME)
    Cookie.remove(ACCESS_TOKEN_COOKIE_NAME)
  }
}

export const authService = new AuthService(ApiEndpoint.AUTH)
