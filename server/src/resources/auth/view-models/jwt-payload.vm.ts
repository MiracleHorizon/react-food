import { UserRole } from '@prisma/client'

export interface JwtPayloadVm {
  sub: string
  email: string
  role: UserRole
  iat: string
  exp: string
}
