import axios from 'axios'

import { BaseService } from './BaseService'
import { UserRole } from '@models/UserRole'
import type { UserModel } from '@models/User'
import type { SigninDto } from '@app-types/auth/SigninDto'
import type { SignupDto } from '@app-types/auth/SignupDto' // TODO: this.api.getUri

// TODO: this.api.getUri
class AuthService extends BaseService {
  constructor(endpoint: string) {
    super({
      endpoint,
      withCredentials: true
    })
  }

  public async signup(dto: SignupDto): Promise<UserModel> {
    try {
      const { data } = await this.api.post<UserModel>('local/signup', dto)
      return data
    } catch (e) {
      throw e
    }
  }

  public async signin(dto: SigninDto): Promise<UserModel> {
    try {
      // const { data } = await this.api.post<UserModel>('/local/signin', dto)
      // return data
      const { data } = await axios.post(
        `${process.env.SERVER_API}/auth/local/signin`,
        dto,
        { withCredentials: true }
      )

      return data
    } catch (e) {
      throw e
    }
  }

  public async signout(): Promise<void> {
    try {
      await this.api.patch<void>('signout')
    } catch (e) {
      throw e
    }
  }

  public async refresh(): Promise<UserModel> {
    try {
      const { data } = await axios.post(
        `${process.env.SERVER_API}/auth/refresh`,
        null,
        {
          withCredentials: true
        }
      )

      return data
      // const { data } = await this.api.post<UserModel>('refresh')
      // return data
    } catch (e) {
      throw e
    }
  }

  public async serverRefresh(refreshToken: string) {
    try {
      const response = await fetch(this.api.getUri() + '/refresh', {
        method: 'POST',
        headers: {
          Cookie: `refreshToken=${refreshToken}`
        }
      })

      return response.json()
    } catch (e) {
      throw e
    }
  }

  public async fetchUserRole(
    refreshToken: string
  ): Promise<{ userRole: UserRole }> {
    try {
      const response = await fetch(`${this.api.getUri()}/role`, {
        headers: {
          Cookie: `refreshToken=${refreshToken}`
        }
      })
      return response.json()
    } catch (e) {
      throw e
    }
  }
}

export const authService = new AuthService('auth')
