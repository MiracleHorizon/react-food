import { ProductPrice } from './product-price/product-price'
import { NumberFormatter } from '@/utils/number-formatter'
import { PRODUCT_IMAGE_FALLBACK } from '@/utils/constants'
import type { ProductModel } from './product.model'

export abstract class Product {
  protected readonly numberFormatter: NumberFormatter
  public readonly id: string
  public readonly title: string
  public readonly weight: number
  public readonly imagePath: string | null
  public readonly price: ProductPrice
  public readonly tag: string

  public get image(): string {
    return this.imagePath ?? PRODUCT_IMAGE_FALLBACK
  }

  public get formattedWeight(): string {
    return this.numberFormatter.formatWeight({
      value: this.weight
    })
  }

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
    this.numberFormatter = new NumberFormatter('ru')
    this.price = new ProductPrice({
      numberFormatter: this.numberFormatter,
      discountPercent,
      fullPrice
    })
  }
}
