import {
  USER_PASSWORD_MAX_LENGTH,
  USER_PASSWORD_MIN_LENGTH
} from '@/utils/constants'

export class ValidationMessage {
  public static getPasswordMessage(): string {
    const lengthPart = `The password must be a minimum of ${USER_PASSWORD_MIN_LENGTH} and a maximum of ${USER_PASSWORD_MAX_LENGTH} characters`
    const extraOptionsPart =
      'at least one uppercase letter, one lowercase letter, one number, and one special character.'

    return `${lengthPart}, and must contain ${extraOptionsPart}.`
  }

  public static getMinLengthMessage(
    fieldName: string,
    minLength: number
  ): string {
    return `${this.capitalize(
      fieldName
    )} length must be at least ${minLength} chars.`
  }

  public static getMaxLengthMessage(
    fieldName: string,
    maxLength: number
  ): string {
    return `${this.capitalize(
      fieldName
    )} length must exceed ${maxLength} chars.`
  }

  private static capitalize(word: string): string {
    return word
      .split('')
      .map((char, i) => (i === 0 ? char.toUpperCase() : char))
      .join('')
  }

  public static getMinValueMessage(minValue: number): string {
    return `Value must be greater than or equal ${minValue}.`
  }

  public static getMaxValueMessage(maxValue): string {
    return `Value must not be greater than ${maxValue}`
  }
}
