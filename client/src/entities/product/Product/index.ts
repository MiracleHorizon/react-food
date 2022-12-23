import type { ProductModel } from '@/models/product/ProductModel'
import { PRODUCT_IMAGE_FALLBACK } from '@/utils/constants'

export abstract class Product implements ProductModel {
  public readonly id: string
  public readonly tag: string
  public readonly title: string
  public readonly price: number
  public readonly weight: number
  public readonly imageUrl: string | null

  protected constructor({ id, tag, title, price, weight, imageUrl }: ProductModel) {
    this.id = id
    this.tag = tag
    this.title = title
    this.price = price
    this.weight = weight
    this.imageUrl = imageUrl
  }

  public getImageUrl(): string {
    return this.imageUrl || PRODUCT_IMAGE_FALLBACK
  }

  public getWeight(): string {
    // TODO Доработать
    return this.weight >= 1000 ? `${this.weight / 1000} кг` : `${this.weight} г`
  }
}
