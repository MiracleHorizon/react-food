import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Max,
  MaxLength,
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
  @Min(1, {
    message: validationArguments =>
      ValidationMessage.getMinValueMessage(validationArguments.value)
  })
  public totalCost: number

  @IsNumber()
  @IsNotEmpty()
  @Min(1, {
    message: validationArguments =>
      ValidationMessage.getMinValueMessage(validationArguments.value)
  })
  public productsCost: number

  @IsNumber()
  @IsNotEmpty()
  @Min(0, {
    message: validationArguments =>
      ValidationMessage.getMinValueMessage(validationArguments.value)
  })
  public deliveryCost: number

  @IsNumber()
  @IsNotEmpty()
  @Min(0, {
    message: validationArguments =>
      ValidationMessage.getMinValueMessage(validationArguments.value)
  })
  public serviceFee: number

  @IsString()
  @IsOptional()
  @MaxLength(120, {
    message: validationArguments =>
      ValidationMessage.getMaxLengthMessage(
        validationArguments.property,
        validationArguments.value
      )
  })
  public commentary?: string

  @IsString()
  @IsNotEmpty()
  public recipientName: string

  @IsPhoneNumber('RU')
  @IsNotEmpty()
  public recipientPhoneNumber: string
}
