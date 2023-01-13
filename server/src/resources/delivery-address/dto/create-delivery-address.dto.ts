import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator'

import { ValidationMessage } from '@/modules/ValidationMessage'

export class CreateDeliveryAddressDto {
  @IsString()
  @IsNotEmpty()
  public city: string

  @IsString()
  @IsNotEmpty()
  public street: string

  @IsString()
  @IsNotEmpty()
  public house: string

  @IsInt()
  @IsNotEmpty()
  @Min(1, {
    message: ({ value }) => ValidationMessage.getMinValueMessage(value)
  })
  public entrance: number

  @IsInt()
  @IsNotEmpty()
  @Min(-1, {
    message: ({ value }) => ValidationMessage.getMinValueMessage(value)
  })
  public floor: number

  @IsInt()
  @IsNotEmpty()
  @Min(0, {
    message: ({ value }) => ValidationMessage.getMinValueMessage(value)
  })
  public flatOrOffice: number

  @IsInt()
  @IsOptional(undefined)
  public intercom?: number
}
