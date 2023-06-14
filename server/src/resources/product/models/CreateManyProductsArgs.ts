import { CreateProductDto } from '@resources/product/dto/CreateProduct.dto'

export interface CreateManyProductsArgs {
  subcategoryId: string
  productsData: CreateProductDto[]
}
