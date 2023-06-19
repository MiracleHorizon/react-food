import type { UserRole } from './UserRole'
import type { UserPersonalData } from './UserPersonalData'

export interface UserModel extends UserPersonalData {
  id: string
  cartId: string
  role: UserRole
  bonusCoins: number
}
