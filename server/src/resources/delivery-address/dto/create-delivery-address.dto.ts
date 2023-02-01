import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator'

import { validationMessage } from '@/utils/validation-message'

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
    message: ({ value }) => validationMessage.getMinValueMessage(value)
  })
  public entrance: number

  @IsInt()
  @IsNotEmpty()
  @Min(-1, {
    message: ({ value }) => validationMessage.getMinValueMessage(value)
  })
  public floor: number

  @IsInt()
  @IsNotEmpty()
  @Min(0, {
    message: ({ value }) => validationMessage.getMinValueMessage(value)
  })
  public flatOrOffice: number

  @IsInt()
  @IsOptional(undefined)
  public intercom?: number
}
