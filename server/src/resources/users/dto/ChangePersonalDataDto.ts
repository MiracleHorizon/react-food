import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator'

// TODO: Validation
export class ChangePersonalDataDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsPhoneNumber('RU')
  @IsNotEmpty()
  phoneNumber: string
}
