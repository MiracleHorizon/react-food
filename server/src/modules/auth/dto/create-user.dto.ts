import { IsNotEmpty, IsString } from 'class-validator'

import { AuthDto } from './auth.dto'

export class CreateUserDto extends AuthDto {
  @IsNotEmpty()
  @IsString()
  public role: UserRole
}

enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER'
}
