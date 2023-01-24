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

import { validationMessage } from '@/modules/ValidationMessage'

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  public deliveryAddress: string

  @IsNumber()
  @IsNotEmpty()
  @Min(0, {
    message: ({ value }) => validationMessage.getMinValueMessage(value)
  })
  @Max(10, {
    message: ({ value }) => validationMessage.getMaxValueMessage(value)
  })
  public cutleryCount: number

  @IsArray()
  @ArrayNotEmpty()
  // TODO CartProduct[]
  public productsData: any[]

  @IsNumber()
  @IsNotEmpty()
  @Min(1, {
    message: ({ value }) => validationMessage.getMinValueMessage(value)
  })
  public totalCost: number

  @IsNumber()
  @IsNotEmpty()
  @Min(1, {
    message: ({ value }) => validationMessage.getMinValueMessage(value)
  })
  public productsCost: number

  @IsNumber()
  @IsNotEmpty()
  @Min(0, {
    message: ({ value }) => validationMessage.getMinValueMessage(value)
  })
  public deliveryCost: number

  @IsNumber()
  @IsNotEmpty()
  @Min(0, {
    message: ({ value }) => validationMessage.getMinValueMessage(value)
  })
  public serviceFee: number

  @IsString()
  @IsOptional()
  @MaxLength(120, {
    message: ({ property, constraints }) =>
      validationMessage.getMaxLengthMessage(property, constraints[0])
  })
  public commentary?: string

  @IsString()
  @IsNotEmpty()
  public recipientName: string

  @IsPhoneNumber('RU')
  @IsNotEmpty()
  public recipientPhoneNumber: string
}
