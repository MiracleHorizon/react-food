import { ProductPrice } from './product-price'
import { NumberFormatter } from '@/utils/number-formatter'
import { PRODUCT_IMAGE_FALLBACK } from '@/utils/constants'
import type { ProductModel } from './product.model'

export class Product {
  private readonly numberFormatter: NumberFormatter
  public readonly id: string
  public readonly tag: string
  public readonly title: string
  public readonly weight: number
  public readonly price: ProductPrice
  public readonly imagePath: string | null
  public count: number

  public get cost(): number {
    return this.price.price * this.count
  }

  public get totalWeight(): number {
    return this.weight * this.count
  }

  public get formattedWeight(): string {
    return this.numberFormatter.formatWeight({
      value: this.weight
    })
  }

  public get image(): string {
    return this.imagePath ?? PRODUCT_IMAGE_FALLBACK
  }

  constructor({
    id,
    tag,
    title,
    count,
    weight,
    imagePath,
    fullPrice,
    discountPercent
  }: ProductModel) {
    this.id = id
    this.tag = tag
    this.title = title
    this.count = count
    this.weight = weight
    this.imagePath = imagePath
    this.numberFormatter = new NumberFormatter('ru')
    this.price = new ProductPrice({
      fullPrice,
      discountPercent,
      numberFormatter: this.numberFormatter
    })
  }

  public incrementCount(): void {
    this.count += 1
  }

  public decrementCount(): void {
    this.count -= 1
  }
}
