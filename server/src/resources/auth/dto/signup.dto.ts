import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator'

import { validationMessage } from '@utils/ValidationMessage'
import {
  USER_PASSWORD_MAX_LENGTH,
  USER_PASSWORD_MIN_LENGTH
} from '@constants/validation'
import { UserRole } from '@resources/users/models/UserRole'

export class SignupDto {
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
  public password: string

  @IsString()
  @IsNotEmpty()
  @IsEnum(UserRole)
  @IsOptional()
  public role?: UserRole
}
