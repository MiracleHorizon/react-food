import { numberFormatter } from '@utils/NumberFormatter'
import { DEFAULT_CURRENCY_INTL_ARGS } from '@constants/intl'
import type { MainPriceData, ProductPriceModel } from './ProductPrice.types'

export class ProductPrice {
  public readonly fullPrice: number
  public readonly discountPercent: number

  constructor({ fullPrice, discountPercent }: ProductPriceModel) {
    this.fullPrice = fullPrice
    this.discountPercent = discountPercent
  }

  public get totalPrice(): number {
    return this.withDiscount ? this.calcTotalPrice() : this.fullPrice
  }

  public get withDiscount(): boolean {
    return this.discountPercent > 0
  }

  public get formattedTotalPrice(): string {
    return this.formatCurrency(this.totalPrice)
  }

  public get formattedFullPrice(): string {
    return this.formatCurrency(this.fullPrice)
  }

  public get mainPriceData(): MainPriceData {
    return {
      totalPrice: this.formattedTotalPrice,
      fullPrice: this.formattedFullPrice,
      withDiscount: this.withDiscount
    }
  }

  private formatCurrency(value: number): string {
    return numberFormatter.formatCurrency({
      value,
      ...DEFAULT_CURRENCY_INTL_ARGS
    })
  }

  private calcTotalPrice(): number {
    // TODO: Перенести логику на backend.
    const totalPrice = this.fullPrice - this.calcDiscountValue()
    return Math.ceil(totalPrice)
  }

  private calcDiscountValue(): number {
    const MAX_PERCENT = 100
    return (this.fullPrice / MAX_PERCENT) * this.discountPercent
  }
}
