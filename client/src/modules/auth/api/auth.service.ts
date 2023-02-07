import axios, { AxiosInstance } from 'axios'

import type { UserModel } from '@/models/user.model'
import type { UserRole } from '@/models/user-role'

interface SignupBody {
  email: string
  name: string
  password: string
}

interface SigninBody {
  email: string
  password: string
}

export interface Tokens {
  accessToken?: string
  refreshToken?: string
}

export class AuthService {
  private readonly api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.SERVER_API}/auth`,
      withCredentials: true
    })
  }

  public async signup(body: SignupBody): Promise<UserModel> {
    try {
      const { data } = await this.api.post('local/signup', body)

      return data
    } catch (e) {
      throw e
    }
  }

  public async signin(body: SigninBody): Promise<UserModel> {
    try {
      const { data } = await this.api.post('local/signin', body)

      return data
    } catch (e) {
      throw e
    }
  }

  public async signout(): Promise<void> {
    try {
      await this.api.patch('signout')
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
    } catch (e) {
      throw e
    }
  }

  public async fetchRole(refreshToken: string): Promise<{ role: UserRole }> {
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

export const authService = new AuthService()
