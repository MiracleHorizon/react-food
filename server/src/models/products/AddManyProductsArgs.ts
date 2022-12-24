import { CreateProductDto } from '@/resources/product/dto/create-product.dto'
import type { Res } from '@/models/Res'

export interface AddManyProductsArgs extends Res {
  productCategoryId: string
  productsData: CreateProductDto[]
}
