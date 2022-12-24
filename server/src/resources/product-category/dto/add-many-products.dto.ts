import { ArrayNotEmpty, IsArray, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

import { CreateProductDto } from '@/resources/product/dto/create-product.dto'

export class AddManyProductsDto {
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateProductDto)
  data: CreateProductDto[]
}
