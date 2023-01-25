import { NumberFormatter } from '@/utils/number-formatter'
import { intlConfig } from '@/utils/configs/intl.config'
import type { Range } from '@/models/range'
import type { DeliveryDescriptionModel } from './delivery-description.model'

export class DeliveryDescription {
  private readonly distance: number
  private readonly timeRange: Range
  private readonly costRange: Range
  private readonly freeCost: number
  private readonly serviceFee: number
  private readonly numberFormatter: NumberFormatter

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

  public getDistance(): string {
    const METERS_PER_KILOMETER = 1000

    return this.numberFormatter.formatDistance({
      value: this.distance / METERS_PER_KILOMETER,
      unit: 'kilometer'
    })
  }

  public getTimeRange(): string {
    return this.numberFormatter.formatTimeRange({
      ...this.timeRange,
      unit: 'minute'
    })
  }

  public getCostRange(): string {
    return this.numberFormatter.formatCurrencyRange({
      ...this.costRange,
      ...intlConfig.currencyOptions
    })
  }

  public getServiceFee(): string {
    return this.numberFormatter.formatCurrency({
      value: this.serviceFee,
      ...intlConfig.currencyOptions
    })
  }

  public getFreeCost(): string {
    return this.numberFormatter.formatCurrency({
      value: this.freeCost,
      ...intlConfig.currencyOptions
    })
  }

  public getDescription(): string {
    return [
      this.getTimeRange(),
      this.getDistance(),
      `Доставка ${this.getCostRange()}`
    ].join(' · ')
  }
}
