import { CreateProductDto } from '@/modules/product/dto/create-product.dto'

export interface AddManyProductsParams {
  productCategoryId: string
  productsData: CreateProductDto[]
}
