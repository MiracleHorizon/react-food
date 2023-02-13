// import {
//   IsEmail,
//   IsEnum,
//   IsNotEmpty,
//   IsOptional,
//   IsString,
//   Matches,
//   MaxLength,
//   MinLength
// } from 'class-validator'
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength
} from 'class-validator'
// import {
//   USER_PASSWORD_MAX_LENGTH,
//   USER_PASSWORD_MIN_LENGTH,
//   USER_PASSWORD_VALIDATION_REGEX
// } from '@/utils/constants'
import { UserRole } from '@/models/user/UserRole'
import { validationMessage } from '@/utils/validation-message'
import {
  USER_PASSWORD_MAX_LENGTH,
  USER_PASSWORD_MIN_LENGTH
} from '@/utils/constants'

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
  // @Matches(new RegExp(USER_PASSWORD_VALIDATION_REGEX), {
  //   message: validationMessage.getPasswordMessage()
  // })
  public password: string

  @IsString()
  @IsNotEmpty()
  @IsEnum(UserRole)
  @IsOptional()
  public role?: UserRole
}
