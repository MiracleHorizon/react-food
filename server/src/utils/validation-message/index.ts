import { StringTransformer } from '@/utils/string-transformer'
import {
  USER_PASSWORD_MAX_LENGTH,
  USER_PASSWORD_MIN_LENGTH
} from '@/utils/constants'

interface Constructor {
  minUserPasswordLength: number
  maxUserPasswordLength: number
}

class ValidationMessage {
  private readonly minUserPasswordLength: number
  private readonly maxUserPasswordLength: number

  constructor({ minUserPasswordLength, maxUserPasswordLength }: Constructor) {
    this.minUserPasswordLength = minUserPasswordLength
    this.maxUserPasswordLength = maxUserPasswordLength
  }

  public getPasswordMessage(): string {
    const lengthPart = `The password must be a minimum of ${this.minUserPasswordLength} and a maximum of ${this.maxUserPasswordLength} characters`
    const extraOptionsPart =
      'at least one uppercase letter, one lowercase letter, one number, and one special character.'

    return `${lengthPart}, and must contain ${extraOptionsPart}.`
  }

  public getMinLengthMessage(fieldName: string, minLength: number): string {
    return `${StringTransformer.capitalize(
      fieldName
    )} length must be at least ${minLength} chars.`
  }

  public getMaxLengthMessage(fieldName: string, maxLength: number): string {
    return `${StringTransformer.capitalize(
      fieldName
    )} length must exceed ${maxLength} chars.`
  }

  public getMinValueMessage(minValue: number): string {
    return `Value must be greater than or equal ${minValue}.`
  }

  public getMaxValueMessage(maxValue): string {
    return `Value must not be greater than ${maxValue}.`
  }
}

export const validationMessage = new ValidationMessage({
  minUserPasswordLength: USER_PASSWORD_MIN_LENGTH,
  maxUserPasswordLength: USER_PASSWORD_MAX_LENGTH
})
