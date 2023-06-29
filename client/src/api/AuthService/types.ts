import type { UserData } from '@models/user/UserData'
import type { UserRole } from '@models/user/UserRole'
import type { SignupDto } from '@app-types/auth/SignupDto'
import type { SigninDto } from '@app-types/auth/SigninDto'

export interface AuthServiceModel {
  signup(dto: SignupDto): Promise<UserData>
  signin(dto: SigninDto): Promise<UserData>
  signout(): Promise<void>
  refresh(): Promise<UserData>
  fetchRole(refreshToken: string): Promise<FetchRoleResponse>
}

export interface FetchRoleResponse {
  userRole: UserRole
}
