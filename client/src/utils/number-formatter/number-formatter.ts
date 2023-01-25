import {
  BaseArguments,
  FormatCurrencyArgs,
  FormatCurrencyRangeArgs,
  FormatDistanceArgs,
  FormatTimeArgs,
  FormatTimeRangeArgs
} from './number-formatter.types'
import { SPACE_SIGN } from '@/utils/constants'

export class NumberFormatter {
  constructor(private readonly location: string) {}

  public formatCurrency({ value, ...options }: FormatCurrencyArgs): string {
    const formattedValue = Intl.NumberFormat(this.location, {
      style: 'currency',
      ...options
    }).format(value)

    return this.setThinSpaceBeforeSign(formattedValue)
  }

  public formatWeight({
    value,
    ...options
  }: Omit<BaseArguments<number>, 'unit'>): string {
    const GRAMS_PER_KILOGRAM = 1000
    const unit = value >= GRAMS_PER_KILOGRAM ? 'kilogram' : 'gram'

    return Intl.NumberFormat(this.location, {
      style: 'unit',
      unit,
      ...options
    }).format(value >= GRAMS_PER_KILOGRAM ? value / GRAMS_PER_KILOGRAM : value)
  }

  // TODO Добавить тесты.
  public formatDistance({ value, ...options }: FormatDistanceArgs): string {
    return Intl.NumberFormat(this.location, {
      style: 'unit',
      ...options
    }).format(value)
  }

  // TODO Добавить тесты.
  public formatTime({ value, ...options }: FormatTimeArgs): string {
    return Intl.NumberFormat(this.location, {
      style: 'unit',
      ...options
    }).format(value)
  }

  // TODO Добавить тесты.
  public formatCurrencyRange({
    start,
    end,
    ...options
  }: FormatCurrencyRangeArgs): string {
    const startValue = this.formatCurrency({
      value: start,
      ...options
    })
    const endValue = this.formatCurrency({
      value: end,
      ...options
    })

    return `${this.cutOutSign(
      startValue,
      start.toString().length
    )} - ${endValue}`
  }

  // TODO Добавить тесты.
  public formatTimeRange({
    start,
    end,
    ...options
  }: FormatTimeRangeArgs): string {
    const startValue = this.formatTime({
      value: start,
      ...options
    })
    const endValue = this.formatTime({
      value: end,
      ...options
    })

    return `${this.cutOutSign(
      startValue,
      start.toString().length
    )} - ${endValue}`
  }

  private cutOutSign(value: string, valueLength: number): string {
    return value.replace(SPACE_SIGN, '').slice(0, valueLength)
  }

  private setThinSpaceBeforeSign(value: string) {
    const THIN_SPACE_SIGN = ' '

    const splitValue = value.split('')
    const sign = splitValue.pop()

    return splitValue.join('').trim() + THIN_SPACE_SIGN + sign
  }
}
