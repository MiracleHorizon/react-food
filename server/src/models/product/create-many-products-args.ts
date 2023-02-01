import { CreateProductDto } from '@/resources/product/dto/create-product.dto'

export interface CreateManyProductsArgs {
  subcategoryId: string
  productsData: CreateProductDto[]
}
