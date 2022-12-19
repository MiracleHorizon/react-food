import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator'

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  public city: string

  @IsString()
  @IsNotEmpty()
  public street: string

  @IsString()
  @IsNotEmpty()
  public house: string

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  public entrance: number

  @IsNumber()
  @IsNotEmpty()
  @Min(-1)
  public floor: number

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  public flatOrOffice: number

  @IsString()
  @IsNotEmpty()
  public type: AddressType
}

enum AddressType {
  PERSONAL = 'PERSONAL',
  FRIEND = 'FRIEND'
}
