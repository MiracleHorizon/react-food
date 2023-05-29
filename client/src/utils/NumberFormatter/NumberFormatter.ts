import type {
  FormatCurrencyArgs,
  FormatCurrencyRangeArgs,
  FormatDistanceArgs,
  FormatTimeArgs,
  FormatTimeRangeArgs,
  FormatWeightArgs
} from './NumberFormatter.types'

export class NumberFormatter {
  constructor(private readonly location: string) {}

  public formatCurrency({ value, ...options }: FormatCurrencyArgs): string {
    const formattedValue = Intl.NumberFormat(this.location, {
      style: 'currency',
      ...options
    }).format(value)
    return this.setThinSpaceBeforeValueSign(formattedValue)
  }

  public formatWeight({ value, ...options }: FormatWeightArgs): string {
    const GRAMS_PER_KILOGRAM = 1000
    const unit = value >= GRAMS_PER_KILOGRAM ? 'kilogram' : 'gram'

    return Intl.NumberFormat(this.location, {
      style: 'unit',
      unit,
      ...options
    }).format(value >= GRAMS_PER_KILOGRAM ? value / GRAMS_PER_KILOGRAM : value)
  }

  public formatDistance({ value, ...options }: FormatDistanceArgs): string {
    return Intl.NumberFormat(this.location, {
      style: 'unit',
      ...options
    }).format(value)
  }

  public formatTime({ value, ...options }: FormatTimeArgs): string {
    return Intl.NumberFormat(this.location, {
      style: 'unit',
      ...options
    }).format(value)
  }

  public formatCurrencyRange({
    start,
    end,
    ...options
  }: FormatCurrencyRangeArgs): string {
    const formattedStartValue = this.formatCurrency({
      value: start,
      ...options
    })
    const formattedEndValue = this.formatCurrency({
      value: end,
      ...options
    })

    return `${this.removeValueSign(
      formattedStartValue,
      start.toString().length
    )} - ${formattedEndValue}`
  }

  public formatTimeRange({
    start,
    end,
    ...options
  }: FormatTimeRangeArgs): string {
    const formattedStartValue = this.formatTime({
      value: start,
      ...options
    })
    const formattedEndValue = this.formatTime({
      value: end,
      ...options
    })

    return `${this.removeValueSign(
      formattedStartValue,
      start.toString().length
    )} - ${formattedEndValue}`
  }

  private setThinSpaceBeforeValueSign(value: string): string {
    const THIN_SPACE: string = ' '
    const splitValue = value.split('')
    const sign = splitValue.pop() ?? ''

    return splitValue.join('').trim() + THIN_SPACE + sign
  }

  private removeValueSign(value: string, valueLength: number): string {
    return value.replace('&nbsp;', '').slice(0, valueLength)
  }
}
