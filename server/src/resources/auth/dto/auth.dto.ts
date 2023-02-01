import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength
} from 'class-validator'

import { validationMessage } from '@/utils/validation-message'
import {
  USER_PASSWORD_MAX_LENGTH,
  USER_PASSWORD_MIN_LENGTH,
  USER_PASSWORD_VALIDATION_REGEX
} from '@/utils/constants'

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  public email: string

  @IsString()
  @IsNotEmpty()
  @MinLength(USER_PASSWORD_MIN_LENGTH, {
    message: ({ property, constraints }) =>
      validationMessage.getMinLengthMessage(property, constraints[0])
  })
  @MaxLength(USER_PASSWORD_MAX_LENGTH, {
    message: ({ property, constraints }) =>
      validationMessage.getMaxLengthMessage(property, constraints[0])
  })
  @Matches(new RegExp(USER_PASSWORD_VALIDATION_REGEX), {
    message: validationMessage.getPasswordMessage()
  })
  public password: string
}
