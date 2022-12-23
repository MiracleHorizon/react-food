import { CreateProductDto } from '@/resources/product/dto/create-product.dto'

export interface CreateProductParams {
  productCategoryId: string
  productData: CreateProductDto
}
