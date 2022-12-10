import { ProductCategory } from '@/models/product/ProductCategory'

export interface IProduct {
  id: string
  tag: string
  title: string
  price: number
  weight: number
  imageUrl: string | null
  category: ProductCategory
  quantityInStock: number
}
