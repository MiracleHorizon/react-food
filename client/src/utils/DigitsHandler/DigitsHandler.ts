import { checkIsInteger } from '@helpers/checkIsInteger'

export class DigitsHandler {
  public static getLastOneNumberDigit(number: number): number {
    const digits = this.getNumberDigits(number)
    return digits.length > 1 ? digits.pop() ?? 0 : number
  }

  public static getTwoLastNumberDigits(number: number): number {
    const digits = this.getNumberDigits(number)
    return digits.length > 2
      ? +digits.slice(digits.length - 2).join('')
      : number
  }

  private static getNumberDigits(number: number): number[] {
    return number
      .toString()
      .split('')
      .filter(value => checkIsInteger(+value))
      .map(digit => +digit)
  }
}
