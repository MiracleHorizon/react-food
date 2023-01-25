import { NumberFormatter } from '@/utils/number-formatter'
import { PRODUCT_IMAGE_FALLBACK } from '@/utils/constants'
import type { ProductModel } from '@/entities/product'

export class Product implements ProductModel {
  private readonly numberFormatter = new NumberFormatter('ru')
  public readonly id: string
  public readonly tag: string
  public readonly title: string
  public readonly price: number
  public readonly weight: number
  public readonly imageUrl: string | null
  public count: number

  constructor({
    id,
    tag,
    title,
    price,
    weight,
    count,
    imageUrl
  }: ProductModel) {
    this.id = id
    this.tag = tag
    this.title = title
    this.price = price
    this.weight = weight
    this.imageUrl = imageUrl
    this.count = count
  }

  public getImageUrl(): string {
    return this.imageUrl ?? PRODUCT_IMAGE_FALLBACK
  }

  public getCost(): number {
    return this.price * this.count
  }

  // TODO Добавить в тесты
  public getFormattedPrice(): string {
    return this.numberFormatter.formatCurrency({
      value: this.price,
      currency: 'RUB',
      maximumSignificantDigits: 6
    })
  }

  // TODO Добавить в тесты
  public getFormattedWeight(): string {
    return this.numberFormatter.formatWeight({
      value: this.weight
    })
  }

  public getTotalWeight(): number {
    return this.weight * this.count
  }

  public incrementCount(): void {
    this.count += 1
  }

  public decrementCount(): void {
    this.count -= 1
  }
}
