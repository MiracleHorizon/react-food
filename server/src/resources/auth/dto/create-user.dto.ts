import {
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator'

import { AuthDto } from './auth.dto'
import { ValidationMessage } from '@/modules/ValidationMessage'
import { UserRole } from '@/models/user/UserRole'

export class CreateUserDto extends AuthDto {
  @IsString()
  @IsNotEmpty()
  @IsEnum(UserRole)
  public role: UserRole

  @IsString()
  @IsNotEmpty()
  @MinLength(4, {
    message: validationArguments =>
      ValidationMessage.getMinLengthMessage(
        validationArguments.property,
        validationArguments.value
      )
  })
  @MaxLength(24, {
    message: validationArguments =>
      ValidationMessage.getMaxLengthMessage(
        validationArguments.property,
        validationArguments.value
      )
  })
  public login: string
}
