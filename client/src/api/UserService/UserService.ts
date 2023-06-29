import { AxiosService } from '@api/AxiosService'
import { ApiEndpoint } from '@models/ApiEndpoint'
import type { UserModel } from '@models/user/User'
import type { UserPersonalData } from '@models/user/UserPersonalData'
import type { UserServiceModel } from './types'

class UserService extends AxiosService implements UserServiceModel {
  constructor(endpoint: ApiEndpoint) {
    super({
      endpoint,
      withCredentials: true
    })
  }

  public async changePersonalData(
    userPersonalData: UserPersonalData
  ): Promise<UserModel> {
    try {
      const { data } = await this.api.post<UserModel>(
        'personal',
        userPersonalData
      )

      return data
    } catch (err) {
      throw err
    }
  }
}

export const userService = new UserService(ApiEndpoint.USERS)
