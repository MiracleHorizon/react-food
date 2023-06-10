import { BaseService } from './BaseService'
import { UserRole } from '@models/UserRole'
import { REFRESH_TOKEN_COOKIE_NAME } from '@constants/cookie'

import type { SignupDto } from '@app-types/auth/SignupDto'
import type { SigninDto } from '@app-types/auth/SigninDto'
import type { UserModel } from '@models/User'

class AuthService extends BaseService {
  constructor(endpoint: string) {
    super(endpoint)
  }

  public async signup(dto: SignupDto): Promise<UserModel> {
    try {
      const url = this.url + '/local/signup'
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(dto),
        credentials: 'include'
      })

      return response.json()
    } catch (e) {
      throw e
    }
  }

  public async signin(dto: SigninDto): Promise<UserModel> {
    try {
      const url = this.url + '/local/signin'
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(dto),
        credentials: 'include'
      })

      return response.json()
    } catch (e) {
      throw e
    }
  }

  public async signout(): Promise<void> {
    try {
      const url = this.url + '/signout'
      await fetch(url, {
        method: 'PATCH',
        credentials: 'include'
      })
    } catch (e) {
      throw e
    }
  }

  public async refresh(): Promise<UserModel> {
    try {
      const url = this.url + '/refresh'
      const response = await fetch(url, {
        method: 'POST',
        credentials: 'include'
      })

      return response.json()
    } catch (e) {
      throw e
    }
  }

  public async fetchRole(refreshToken: string): Promise<FetchRoleResponse> {
    try {
      const url = this.url + '/role'
      const response = await fetch(url, {
        headers: {
          Cookie: `${REFRESH_TOKEN_COOKIE_NAME}=${refreshToken}`
        }
      })

      return response.json()
    } catch (e) {
      throw e
    }
  }
}

interface FetchRoleResponse {
  userRole: UserRole
}

export const authService = new AuthService('auth')
