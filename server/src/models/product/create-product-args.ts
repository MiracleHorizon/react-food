import { CreateProductDto } from '@/resources/product/dto/create-product.dto'

export interface CreateProductArgs {
  productSubcategoryId: string
  dto: CreateProductDto
}
