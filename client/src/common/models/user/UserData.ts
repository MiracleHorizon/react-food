import type { UserModel } from './User'
import type { UserCart } from './UserCart'

export interface UserData {
  user: UserModel
  cart: UserCart
}
