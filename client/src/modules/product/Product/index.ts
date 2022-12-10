import { IProduct } from '@/models/product/IProduct'
import { ProductCategory } from '@/models/product/ProductCategory'

export const PRODUCT_IMAGE_FALLBACK =
  'https://avatars.mds.yandex.net/get-bunker/50064/d72205e544198b757690858b7cf6245b7d8df050/orig'

export class Product implements IProduct {
  public readonly id: string
  public readonly tag: string
  public readonly title: string
  public readonly price: number
  public readonly weight: number
  public readonly category: ProductCategory
  public readonly imageUrl: string | null
  public readonly quantityInStock: number

  constructor({
    id,
    tag,
    title,
    price,
    weight,
    category,
    imageUrl,
    quantityInStock
  }: IProduct) {
    this.id = id
    this.tag = tag
    this.title = title
    this.price = price
    this.weight = weight
    this.category = category
    this.imageUrl = imageUrl
    this.quantityInStock = quantityInStock
  }

  public getImageUrl(): string {
    return this.imageUrl || PRODUCT_IMAGE_FALLBACK
  }
}
