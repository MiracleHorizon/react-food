import { StringTransformer } from '../StringTransformer'
import {
  USER_PASSWORD_MAX_LENGTH,
  USER_PASSWORD_MIN_LENGTH
} from '@/utils/constants'

class ValidationMessage {
  private readonly stringTransformer: StringTransformer

  constructor() {
    this.stringTransformer = new StringTransformer()
  }

  public getPasswordMessage(): string {
    const lengthPart = `The password must be a minimum of ${USER_PASSWORD_MIN_LENGTH} and a maximum of ${USER_PASSWORD_MAX_LENGTH} characters`
    const extraOptionsPart =
      'at least one uppercase letter, one lowercase letter, one number, and one special character.'

    return `${lengthPart}, and must contain ${extraOptionsPart}.`
  }

  public getMinLengthMessage(fieldName: string, minLength: number): string {
    return `${this.stringTransformer.capitalize(
      fieldName
    )} length must be at least ${minLength} chars.`
  }

  public getMaxLengthMessage(fieldName: string, maxLength: number): string {
    return `${this.stringTransformer.capitalize(
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

export const validationMessage = new ValidationMessage()
