import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Min
} from 'class-validator'

import { ValidationMessage } from '@/modules/ValidationMessage'
import { MIN_PRODUCT_PRICE } from '@/utils/constants'

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  public title: string

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  public description?: string

  @IsNumber()
  @IsNotEmpty()
  @Min(MIN_PRODUCT_PRICE, {
    message: validationArguments =>
      ValidationMessage.getMinValueMessage(validationArguments.value)
  })
  public price: number

  @IsNumber()
  @IsNotEmpty()
  @Min(0, {
    message: validationArguments =>
      ValidationMessage.getMinValueMessage(validationArguments.value)
  })
  public weight: number

  @IsUrl()
  @IsNotEmpty()
  @IsOptional()
  public imageUrl?: string

  @IsString()
  @IsNotEmpty()
  public tag: string
}
