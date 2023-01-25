import { Range } from '@/models/range'

export interface BaseArguments<T>
  extends Omit<Intl.NumberFormatOptions, 'currency'> {
  value: T
}

type TimeUnit = 'hour' | 'minute' | 'second'

export interface RangeArguments extends Range, Intl.NumberFormatOptions {}

export interface FormatCurrencyArgs extends BaseArguments<number> {
  currency: string
}

export interface FormatCurrencyRangeArgs extends RangeArguments {
  currency: string
}

export interface FormatDistanceArgs extends BaseArguments<number> {
  unit: 'kilometer' | 'meter'
}

export interface FormatTimeArgs extends BaseArguments<number> {
  unit: TimeUnit
}

export interface FormatTimeRangeArgs extends RangeArguments {
  unit: TimeUnit
}
