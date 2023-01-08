import {
  IsNotEmpty,
  IsString,
  IsUUID,
  MaxLength,
  MinLength
} from 'class-validator'

import { ValidationMessage } from '@/modules/ValidationMessage'

export class CreateProductSubcategoryDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3, {
    message: validationArguments =>
      ValidationMessage.getMinLengthMessage(
        validationArguments.property,
        validationArguments.value
      )
  })
  @MaxLength(30, {
    message: validationArguments =>
      ValidationMessage.getMaxLengthMessage(
        validationArguments.property,
        validationArguments.value
      )
  })
  public title: string

  @IsString()
  @IsUUID()
  @IsNotEmpty()
  public productCategoryId: string
}
