import { CreateProductDto } from '@/resources/product/dto/create-product.dto'

export interface AddManyProductsParams {
  productCategoryId: string
  productsData: CreateProductDto[]
}
