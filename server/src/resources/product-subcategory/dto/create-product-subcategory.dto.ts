import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

import { validationMessage } from '@/modules/ValidationMessage'

export class CreateProductSubcategoryDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(4, {
    message: ({ property, constraints }) =>
      validationMessage.getMinLengthMessage(property, constraints[0])
  })
  @MaxLength(35, {
    message: ({ property, constraints }) =>
      validationMessage.getMaxLengthMessage(property, constraints[0])
  })
  public title: string

  @IsString()
  @IsNotEmpty()
  @MinLength(15, {
    message: ({ property, constraints }) =>
      validationMessage.getMinLengthMessage(property, constraints[0])
  })
  @MaxLength(150, {
    message: ({ property, constraints }) =>
      validationMessage.getMaxLengthMessage(property, constraints[0])
  })
  public description: string

  @IsString()
  @IsNotEmpty()
  public productCategoryId: string
}
