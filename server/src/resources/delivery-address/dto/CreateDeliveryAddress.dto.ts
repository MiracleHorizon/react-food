import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateDeliveryAddressDto {
  @IsString()
  @IsNotEmpty()
  public city: string

  @IsString()
  @IsNotEmpty()
  public street: string

  @IsString()
  @IsNumber()
  @IsNotEmpty()
  public house: string | number

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public office?: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public floor?: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public doorcode?: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public entrance?: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  public commentary?: string
}
