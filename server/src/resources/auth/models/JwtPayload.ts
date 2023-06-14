import { UserRole } from '@prisma/client'

export interface JwtPayload {
  sub: string
  email: string
  role: UserRole
  iat: string
  exp: string
}
