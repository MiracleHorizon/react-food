import { isInteger } from '@helpers/isInteger'
import { DigitsHandler } from '../DigitsHandler'

interface Constructor {
  nounRoot: string
  fewFormEnding: string
  pluralFormEnding: string
  baseEnding?: string
}

export class RuNounNumeralFormatter {
  private readonly ZERO_NUMERAL: number = 0
  private readonly FEW_FORM_NUMERALS: number[] = [2, 3, 4]
  private readonly PLURAL_FORM_NUMERALS: number[] = [
    5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
  ]
  private readonly FEW_FORM_MIN_VALUE: number = this.FEW_FORM_NUMERALS[0]!
  private readonly PLURAL_FORM_MAX_VALUE: number =
    this.PLURAL_FORM_NUMERALS[this.PLURAL_FORM_NUMERALS.length - 1]!

  private readonly nounRoot: string
  private readonly fewFormEnding: string
  private readonly pluralFormEnding: string
  private readonly baseEnding: string

  constructor({
    nounRoot,
    fewFormEnding,
    pluralFormEnding,
    baseEnding
  }: Constructor) {
    this.nounRoot = nounRoot
    this.fewFormEnding = fewFormEnding
    this.pluralFormEnding = pluralFormEnding
    this.baseEnding = baseEnding ?? ''
  }

  public format(count: number): string {
    if (count > Number.MAX_SAFE_INTEGER) {
      throw new Error('An overly large count')
    }

    if (!isInteger(count)) {
      throw new Error('Number must be an integer')
    }

    return `${count} ${this.nounRoot}${this.getEnding(count)}`
  }

  // TODO: Getters
  private getEnding(count: number): string {
    const MAX_COUNT_NUMERAL_RESTRICTION: number = 100

    if (count < this.ZERO_NUMERAL) {
      throw new Error('Count cannot be less than zero')
    }

    if (count === this.ZERO_NUMERAL) {
      return this.pluralFormEnding
    }

    if (
      count >= this.FEW_FORM_MIN_VALUE &&
      count <= this.PLURAL_FORM_MAX_VALUE
    ) {
      return this.getEndingByNumeralForm(count)
    }

    if (
      count >= this.PLURAL_FORM_MAX_VALUE + 1 &&
      count < MAX_COUNT_NUMERAL_RESTRICTION
    ) {
      const lastCountDigit = DigitsHandler.getLastOneNumberDigit(count)
      return this.getEndingByNumeralForm(lastCountDigit)
    }

    if (count > MAX_COUNT_NUMERAL_RESTRICTION) {
      const lastCountNumeral = DigitsHandler.getTwoLastNumberDigits(count)
      return this.getEnding(lastCountNumeral)
    }

    if (
      count >= MAX_COUNT_NUMERAL_RESTRICTION &&
      count % MAX_COUNT_NUMERAL_RESTRICTION === 0
    ) {
      return this.getEndingByNumeralForm(this.ZERO_NUMERAL)
    }

    return this.baseEnding
  }

  private getEndingByNumeralForm(number: number): string {
    if (number === this.ZERO_NUMERAL) {
      return this.pluralFormEnding
    }

    if (this.isFewForm(number)) {
      return this.fewFormEnding
    }

    if (this.isPluralForm(number)) {
      return this.pluralFormEnding
    }

    return this.baseEnding
  }

  private isFewForm(number: number): boolean {
    return this.FEW_FORM_NUMERALS.includes(number)
  }

  private isPluralForm(number: number): boolean {
    return this.PLURAL_FORM_NUMERALS.includes(number)
  }
}
