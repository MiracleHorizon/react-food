import { ProductPrice } from '@entities/ProductPrice'
import { numberFormatter } from '@utils/NumberFormatter'
import { PRODUCT_IMAGE_FALLBACK } from '@constants/images'
import type { ProductModel } from '@models/product/Product'

export abstract class Product {
  public readonly id: string
  public readonly title: string
  public readonly weight: number
  public readonly imagePath: string | null
  public readonly price: ProductPrice
  public readonly tag: string

  protected constructor({
    id,
    tag,
    title,
    weight,
    imagePath,
    fullPrice,
    discountPercent
  }: ProductModel) {
    this.id = id
    this.tag = tag
    this.title = title
    this.weight = weight
    this.imagePath = imagePath
    this.price = new ProductPrice({
      discountPercent,
      fullPrice
    })
  }

  public get image(): string {
    return this.imagePath ?? PRODUCT_IMAGE_FALLBACK
  }

  public get formattedWeight(): string {
    return numberFormatter.formatWeight({
      value: this.weight
    })
  }
}
