import type { UserModel } from '@models/User'

export interface UserStore {
  user: UserModel | null
  isAuth: () => boolean
  signin: (user: UserModel) => void
  signout: VoidFunction
}
