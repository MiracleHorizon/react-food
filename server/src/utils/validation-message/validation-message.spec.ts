import { describe, expect, test } from '@jest/globals'

import { validationMessage } from './index'
import {
  USER_PASSWORD_MAX_LENGTH,
  USER_PASSWORD_MIN_LENGTH
} from '@/utils/constants'

describe('Тестирование класса ValidationMessage', () => {
  test(`Метод getPasswordMessage должен вернуть корректное сообщение 
  валидации пароля.`, () => {
    const lengthPart = `The password must be a minimum of ${USER_PASSWORD_MIN_LENGTH} and a maximum of ${USER_PASSWORD_MAX_LENGTH} characters`
    const extraOptionsPart =
      'at least one uppercase letter, one lowercase letter, one number, and one special character.'

    expect(validationMessage.getPasswordMessage()).toBe(
      `${lengthPart}, and must contain ${extraOptionsPart}.`
    )
  })

  test(`Метод getMinLengthMessage должен вернуть сообщение в формате: 
  "{fieldName} length must be at least {minLengthValue}.". Также, сообщение
  должно быть в формате capitalize.`, () => {
    expect(validationMessage.getMinLengthMessage('password', 20)).toBe(
      'Password length must be at least 20 chars.'
    )
    expect(validationMessage.getMinLengthMessage('description', 15)).toBe(
      'Description length must be at least 15 chars.'
    )
    expect(validationMessage.getMinLengthMessage('login', 4)).toBe(
      'Login length must be at least 4 chars.'
    )
    expect(validationMessage.getMinLengthMessage('cvc', 3)).toBe(
      'Cvc length must be at least 3 chars.'
    )
  })

  test(`Метод getMaxLengthMessage должен вернуть сообщение в формате: 
  "{fieldName} length must be at least {maxLengthValue}.". Также, сообщение
  должно быть в формате capitalize.`, () => {
    expect(validationMessage.getMaxLengthMessage('password', 20)).toBe(
      'Password length must exceed 20 chars.'
    )
    expect(validationMessage.getMaxLengthMessage('description', 15)).toBe(
      'Description length must exceed 15 chars.'
    )
    expect(validationMessage.getMaxLengthMessage('login', 4)).toBe(
      'Login length must exceed 4 chars.'
    )
    expect(validationMessage.getMaxLengthMessage('cvc', 3)).toBe(
      'Cvc length must exceed 3 chars.'
    )
  })

  test(`Метод getMinValueMessage должен вернуть сообщение с его базовым 
  значением "Value must not be greater than" и добавить к нему передавемое
  ограничение минимального значения.`, () => {
    expect(validationMessage.getMinValueMessage(0)).toBe(
      'Value must be greater than or equal 0.'
    )
    expect(validationMessage.getMinValueMessage(-10)).toBe(
      'Value must be greater than or equal -10.'
    )
    expect(validationMessage.getMinValueMessage(1038)).toBe(
      'Value must be greater than or equal 1038.'
    )
    expect(validationMessage.getMinValueMessage(392)).toBe(
      'Value must be greater than or equal 392.'
    )
    expect(validationMessage.getMinValueMessage(-1230)).toBe(
      'Value must be greater than or equal -1230.'
    )
  })

  test(`Метод getMaxValueMessage должен вернуть сообщение с его базовым 
  значением "Value must not be greater than" и добавить к нему передавемое
  ограничение максимального значения.`, () => {
    expect(validationMessage.getMaxValueMessage(5)).toBe(
      'Value must not be greater than 5.'
    )
    expect(validationMessage.getMaxValueMessage(0)).toBe(
      'Value must not be greater than 0.'
    )
    expect(validationMessage.getMaxValueMessage(12)).toBe(
      'Value must not be greater than 12.'
    )
    expect(validationMessage.getMaxValueMessage(10000)).toBe(
      'Value must not be greater than 10000.'
    )
  })
})
