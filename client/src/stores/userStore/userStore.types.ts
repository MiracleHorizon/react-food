import type { UserModel } from '@models/user/User'
import type { UserAddress } from '@models/user/UserAddress'

export type UserStore = State & Computed & Action

interface State {
  user: UserModel | null
  addresses: UserAddress[]
  selectedAddress: UserAddress | null
}

interface Computed {
  isAuth: () => boolean
  isAddressesEmpty: () => boolean
}

interface Action {
  signin: (user: UserModel) => void
  signout: VoidFunction
  setAddresses: (addresses: UserAddress[]) => void
  setSelectedAddress: (address: UserAddress) => void
}
