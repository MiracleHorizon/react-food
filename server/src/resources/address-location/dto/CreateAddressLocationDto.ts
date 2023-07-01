import { IsNotEmpty, IsString } from 'class-validator'

export class CreateAddressLocationDto {
  @IsString()
  @IsNotEmpty()
  public city: string

  @IsString()
  @IsNotEmpty()
  public street: string

  @IsString()
  @IsNotEmpty()
  public house: string
}
