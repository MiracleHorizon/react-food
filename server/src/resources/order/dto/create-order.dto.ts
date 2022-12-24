import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPhoneNumber,
  IsString,
  Max,
  Min
} from 'class-validator'

import { ValidationMessage } from '@/modules/ValidationMessage'

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  public deliveryAddress: string

  @IsNumber()
  @IsNotEmpty()
  @Min(0, {
    message: validationArguments =>
      ValidationMessage.getMinValueMessage(validationArguments.value)
  })
  @Max(10, {
    message: validationArguments =>
      ValidationMessage.getMaxValueMessage(validationArguments.value)
  })
  public cutleryCount: number

  @IsArray()
  @ArrayNotEmpty()
  // TODO CartProduct[]
  public productsData: any[]

  @IsNumber()
  @IsNotEmpty()
  @Min(0, {
    message: validationArguments =>
      ValidationMessage.getMinValueMessage(validationArguments.value)
  })
  public totalPrice: number

  @IsNumber()
  @IsNotEmpty()
  @Min(0, {
    message: validationArguments =>
      ValidationMessage.getMinValueMessage(validationArguments.value)
  })
  public productsPrice: number

  @IsNumber()
  @IsNotEmpty()
  @Min(0, {
    message: validationArguments =>
      ValidationMessage.getMinValueMessage(validationArguments.value)
  })
  public deliveryPrice: number

  @IsNumber()
  @IsNotEmpty()
  @Min(0, {
    message: validationArguments =>
      ValidationMessage.getMinValueMessage(validationArguments.value)
  })
  public serviceFee: number

  @IsPhoneNumber('RU')
  @IsNotEmpty()
  public recipientPhoneNumber: string

  @IsString()
  @IsNotEmpty()
  public recipientName: string
}
