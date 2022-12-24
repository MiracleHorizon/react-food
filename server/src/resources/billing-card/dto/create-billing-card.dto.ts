import {
  ArrayNotEmpty,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  MaxLength,
  MinLength
} from 'class-validator'
import { ValidationMessage } from '@/modules/ValidationMessage'

export class CreateBillingCardDto {
  @IsArray()
  @IsNotEmpty()
  @MinLength(4, {
    each: true,
    message: validationArguments =>
      'Each' +
      ValidationMessage.getMinLengthMessage(
        validationArguments.property,
        validationArguments.value
      ).toLowerCase()
  })
  @MaxLength(4, {
    each: true,
    message: validationArguments =>
      'Each' +
      ValidationMessage.getMaxLengthMessage(
        validationArguments.property,
        validationArguments.value
      ).toLowerCase()
  })
  @ArrayNotEmpty()
  public number: number[]

  @IsNumber()
  @IsNotEmpty()
  @MinLength(3, {
    message: validationArguments =>
      ValidationMessage.getMinLengthMessage(
        validationArguments.property,
        validationArguments.value
      )
  })
  @MaxLength(3, {
    message: validationArguments =>
      ValidationMessage.getMaxLengthMessage(
        validationArguments.property,
        validationArguments.value
      )
  })
  public cvc: number

  @IsDateString()
  @IsNotEmpty()
  public expiredDate: string
}
