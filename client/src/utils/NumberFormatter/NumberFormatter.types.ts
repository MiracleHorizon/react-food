import type { Range } from '@app-types/Range'

type TimeUnit = 'hour' | 'minute' | 'second'

export interface BaseArguments<T>
  extends Omit<Intl.NumberFormatOptions, 'currency'> {
  value: T
}

export type RangeArgs = Range & Intl.NumberFormatOptions

export interface FormatCurrencyArgs extends BaseArguments<number> {
  currency: string
}

export interface FormatCurrencyRangeArgs extends RangeArgs {
  currency: string
}

export type FormatWeightArgs = Omit<BaseArguments<number>, 'unit'>

export interface FormatDistanceArgs extends BaseArguments<number> {
  unit: 'kilometer' | 'meter'
}

export interface FormatTimeArgs extends BaseArguments<number> {
  unit: TimeUnit
}

export interface FormatTimeRangeArgs extends RangeArgs {
  unit: TimeUnit
}
