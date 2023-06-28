import type { AddProductDto } from '../dto/AddProduct.dto'

export interface AddProductArgs {
  cartId: string
  userId: string
  dto: AddProductDto
}
