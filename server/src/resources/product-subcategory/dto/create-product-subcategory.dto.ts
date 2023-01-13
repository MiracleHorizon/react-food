import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

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
  @IsNotEmpty()
  @MinLength(20, {
    message: validationArguments =>
      ValidationMessage.getMinLengthMessage(
        validationArguments.property,
        validationArguments.value
      )
  })
  @MaxLength(150, {
    message: validationArguments =>
      ValidationMessage.getMaxLengthMessage(
        validationArguments.property,
        validationArguments.value
      )
  })
  public description: string

  @IsString()
  @IsNotEmpty()
  public productCategoryId: string
}
