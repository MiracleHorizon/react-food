import type { UserModel } from '@models/User'

export type UserStore = State & Computed & Action

interface State {
  user: UserModel | null
}

interface Computed {
  isAuth: () => boolean
}

interface Action {
  signin: (user: UserModel) => void
  signout: VoidFunction
}
