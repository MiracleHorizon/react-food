import { intlConfig } from '@/utils/configs/intl.config'
import type { ProductPriceModel } from './product-price.model'
import type { NumberFormatter } from '@/utils/number-formatter'

type Rounding = 'floor' | 'ceil' | 'round'

export class ProductPrice {
  private readonly numberFormatter: NumberFormatter
  public readonly fullPrice: number
  public readonly discountPercent: number

  public get price(): number {
    return this.withDiscount
      ? this.calculateDiscountPrice('ceil')
      : this.fullPrice
  }

  public get withDiscount(): boolean {
    return this.discountPercent > 0
  }

  public get formattedPrice(): string {
    return this.formatCurrency(this.price)
  }

  public get formattedFullPrice(): string {
    return this.formatCurrency(this.fullPrice)
  }

  constructor({
    fullPrice,
    discountPercent,
    numberFormatter
  }: ProductPriceModel & {
    numberFormatter: NumberFormatter
  }) {
    this.fullPrice = fullPrice
    this.discountPercent = discountPercent
    this.numberFormatter = numberFormatter
  }

  private formatCurrency(value: number): string {
    return this.numberFormatter.formatCurrency({
      ...intlConfig.currencyOptions,
      value
    })
  }

  private calculateDiscountPrice(rounding: Rounding): number {
    const price = this.fullPrice - this.calculateDiscount()

    switch (rounding) {
      case 'ceil':
        return Math.ceil(price)
      case 'round':
        return Math.round(price)
      case 'floor':
        return Math.floor(price)
    }
  }

  private calculateDiscount(): number {
    const MAX_PERCENT = 100
    return (this.fullPrice / MAX_PERCENT) * this.discountPercent
  }
}