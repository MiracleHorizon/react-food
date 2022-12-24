import { CreateProductDto } from '@/resources/product/dto/create-product.dto'

export interface CreateProductArgs {
  productCategoryId: string
  productData: CreateProductDto
}
