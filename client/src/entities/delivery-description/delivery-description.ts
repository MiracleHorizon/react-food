import { NumberFormatter } from '@utils/number-formatter'
import { intlConfig } from '@utils/configs/intl.config'
import type { DeliveryDescriptionModel } from './delivery-description.model'
import type { Range } from '@app-types/range'

export class DeliveryDescription {
  private readonly distance: number
  private readonly timeRange: Range
  private readonly costRange: Range
  private readonly freeCost: number
  private readonly serviceFee: number
  private readonly numberFormatter: NumberFormatter

  public get description(): string {
    return [
      this.formattedTimeRange,
      this.formattedDistance,
      `Доставка ${this.formattedCostRange}`
    ].join(' · ')
  }

  public get formattedDistance(): string {
    const METERS_PER_KILOMETER = 1000

    return this.numberFormatter.formatDistance({
      value: this.distance / METERS_PER_KILOMETER,
      unit: 'kilometer'
    })
  }

  public get formattedTimeRange(): string {
    return this.numberFormatter.formatTimeRange({
      ...this.timeRange,
      unit: 'minute'
    })
  }

  public get formattedCostRange(): string {
    return this.formatCurrencyRange(this.costRange)
  }

  public get formattedFreeCost(): string {
    return this.formatCurrency(this.freeCost)
  }

  public get formattedServiceFee(): string {
    return this.formatCurrency(this.serviceFee)
  }

  constructor({
    distance,
    timeRange,
    costRange,
    freeCost,
    serviceFee
  }: DeliveryDescriptionModel) {
    this.distance = distance
    this.timeRange = timeRange
    this.costRange = costRange
    this.freeCost = freeCost
    this.serviceFee = serviceFee
    this.numberFormatter = new NumberFormatter('ru')
  }

  private formatCurrency(value: number): string {
    return this.numberFormatter.formatCurrency({
      ...intlConfig.currencyOptions,
      value
    })
  }

  private formatCurrencyRange(range: Range): string {
    return this.numberFormatter.formatCurrencyRange({
      ...intlConfig.currencyOptions,
      ...range
    })
  }
}
