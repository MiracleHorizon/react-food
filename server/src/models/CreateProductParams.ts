import { CreateProductDto } from '@/modules/product/dto/create-product.dto'

export interface CreateProductParams {
  productCategoryId: string
  productData: CreateProductDto
}
