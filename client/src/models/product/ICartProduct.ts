import { IProduct } from '@/models/product/IProduct'

export interface ICartProduct extends IProduct {
  count: number
}
