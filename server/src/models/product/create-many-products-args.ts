import { CreateProductDto } from '@/resources/product/dto/create-product.dto'

export interface CreateManyProductsArgs {
  productSubcategoryId: string
  dtos: CreateProductDto[]
}
