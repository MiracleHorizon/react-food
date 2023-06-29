import type { UserModel } from '@models/user/User'
import type { UserPersonalData } from '@models/user/UserPersonalData'

export interface UserServiceModel {
  changePersonalData(userPersonalData: UserPersonalData): Promise<UserModel>
}
