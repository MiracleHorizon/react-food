import { IsInt, IsNotEmpty, IsString } from 'class-validator'

import { AuthDto } from './auth.dto'

export class CreateUserDto extends AuthDto {
  @IsNotEmpty()
  @IsString()
  public role: 'ADMIN' | 'USER'

  @IsNotEmpty()
  @IsString()
  public city: string

  @IsNotEmpty()
  @IsString()
  public street: string

  @IsNotEmpty()
  @IsString()
  public house: string

  @IsNotEmpty()
  @IsInt()
  public entrance: number

  @IsNotEmpty()
  @IsInt()
  public floor: number

  @IsNotEmpty()
  @IsInt()
  public flatOrOffice: number
}
