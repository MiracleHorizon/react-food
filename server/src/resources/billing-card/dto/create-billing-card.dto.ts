import {
  ArrayNotEmpty,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  MaxLength,
  MinLength
} from 'class-validator'

import { validationMessage } from '@/utils/validation-message'

export class CreateBillingCardDto {
  @IsArray()
  @IsNotEmpty()
  @MinLength(4, {
    each: true,
    message: ({ property, constraints }) =>
      'Each ' +
      validationMessage
        .getMinLengthMessage(property, constraints[0])
        .toLowerCase()
  })
  @MaxLength(4, {
    each: true,
    message: ({ property, constraints }) =>
      'Each ' +
      validationMessage
        .getMaxLengthMessage(property, constraints[0])
        .toLowerCase()
  })
  @ArrayNotEmpty()
  public number: number[]

  @IsNumber()
  @IsNotEmpty()
  @MinLength(3, {
    message: ({ property, constraints }) =>
      validationMessage.getMinLengthMessage(property, constraints[0])
  })
  @MaxLength(3, {
    message: ({ property, constraints }) =>
      validationMessage.getMaxLengthMessage(property, constraints[0])
  })
  public cvc: number

  @IsDateString()
  @IsNotEmpty()
  public expiredDate: string
}
