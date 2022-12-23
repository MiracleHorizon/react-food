import { IsArray } from 'class-validator'

import { CreateProductDto } from '../../product/dto/create-product.dto'

export class AddManyProductsDto {
  // TODO Сделать полную корректную валидацию
  @IsArray()
  data: CreateProductDto[]
}
