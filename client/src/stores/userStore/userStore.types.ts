import type { UserModel } from '@models/user/User'
import type { DeliveryAddress } from '@models/user/DeliveryAddress'

export type UserStore = State & Computed & Action

interface State {
  user: UserModel | null
  addresses: DeliveryAddress[]
  selectedAddress: DeliveryAddress | null
}

interface Computed {
  isAuth: () => boolean
  isAddressesEmpty: () => boolean
}

interface Action {
  signin: (user: UserModel) => void
  signout: VoidFunction
  setAddresses: (addresses: DeliveryAddress[]) => void
  setSelectedAddress: (address: DeliveryAddress) => void
}
