import {
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator'

import { AuthDto } from './auth.dto'
import { validationMessage } from '@/utils/validation-message'
import { UserRole } from '@/models/user/UserRole'

export class CreateUserDto extends AuthDto {
  @IsString()
  @IsNotEmpty()
  @IsEnum(UserRole)
  public role: UserRole

  @IsString()
  @IsNotEmpty()
  @MinLength(4, {
    message: ({ property, constraints }) =>
      validationMessage.getMinLengthMessage(property, constraints[0])
  })
  @MaxLength(24, {
    message: ({ property, constraints }) =>
      validationMessage.getMaxLengthMessage(property, constraints[0])
  })
  public name: string
}
