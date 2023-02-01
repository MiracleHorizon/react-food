import { CreateProductDto } from '@/resources/product/dto/create-product.dto'

export interface CreateProductArgs {
  subcategoryId: string
  dto: CreateProductDto
}
