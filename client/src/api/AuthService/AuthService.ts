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
import type { UserData } from '@models/user/UserData'
import type { AuthServiceModel, FetchRoleResponse } from './types'

class AuthService extends AxiosService implements AuthServiceModel {
  constructor(endpoint: ApiEndpoint) {
    super({
      endpoint,
      withCredentials: true
    })
  }

  public async signup(dto: SignupDto): Promise<UserData> {
    try {
      const { data } = await this.api.post<UserData>('local/signup', dto)

      return data
    } catch (err) {
      throw err
    }
  }

  public async signin(dto: SigninDto): Promise<UserData> {
    try {
      const { data } = await this.api.post<UserData>('local/signin', dto)

      return data
    } catch (err) {
      throw err
    }
  }

  public async signout(): Promise<void> {
    try {
      await this.api.patch<void>('signout')
    } catch (err) {
      throw err
    }
  }

  public async refresh(): Promise<UserData> {
    try {
      const { data } = await this.api.post<UserData>('refresh')

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
    Cookie.remove(ACCESS_TOKEN_COOKIE_NAME)
    Cookie.remove(REFRESH_TOKEN_COOKIE_NAME)
  }
}

export const authService = new AuthService(ApiEndpoint.AUTH)
