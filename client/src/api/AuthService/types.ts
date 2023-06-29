import type { UserModel } from '@models/user/User'
import type { UserRole } from '@models/user/UserRole'
import type { SignupDto } from '@app-types/auth/SignupDto'
import type { SigninDto } from '@app-types/auth/SigninDto'

export interface AuthServiceModel {
  signup(dto: SignupDto): Promise<UserModel>
  signin(dto: SigninDto): Promise<UserModel>
  signout(): Promise<void>
  refresh(): Promise<UserModel>
  fetchRole(refreshToken: string): Promise<FetchRoleResponse>
}

export interface FetchRoleResponse {
  userRole: UserRole
}
