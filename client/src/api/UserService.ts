import axios from 'axios'

import { BaseService } from '@api/BaseService'
import type { UserModel } from '@models/user/User'
import type { UserPersonalData } from '@models/user/UserPersonalData'

class UserService extends BaseService {
  constructor(endpoint: string) {
    super(endpoint)
  }

  public async changePersonalData(
    userPersonalData: UserPersonalData
  ): Promise<UserModel> {
    try {
      const url = this.url + '/personal'
      const { data } = await axios.post(url, userPersonalData, {
        withCredentials: true
      })

      return data
    } catch (e) {
      throw e
    }
  }
}

export const userService = new UserService('users')
