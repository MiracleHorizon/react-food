import { CreateProductDto } from '@resources/product/dto/CreateProduct.dto'

export interface CreateProductArgs {
  subcategoryId: string
  dto: CreateProductDto
}
