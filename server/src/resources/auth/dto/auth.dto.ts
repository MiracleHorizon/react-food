import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength
} from 'class-validator'

import { ValidationMessage } from '@/modules/ValidationMessage'
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
      ValidationMessage.getMinLengthMessage(property, constraints[0])
  })
  @MaxLength(USER_PASSWORD_MAX_LENGTH, {
    message: ({ property, constraints }) =>
      ValidationMessage.getMaxLengthMessage(property, constraints[0])
  })
  @Matches(USER_PASSWORD_VALIDATION_REGEX, null, {
    message: ValidationMessage.getPasswordMessage
  })
  public password: string
}
