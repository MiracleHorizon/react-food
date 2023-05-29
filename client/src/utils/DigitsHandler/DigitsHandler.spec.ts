import { describe, expect, test } from '@jest/globals'

import { DigitsHandler } from './DigitsHandler'

describe('Модуль NumeralsHandler отвечает за обработку числительных.', () => {
  test(`Метод getLastNumberOneDigitNumeral возвращает последнюю цифру
  числительного, если его длина больше 1 знака. В обратном случае будет возвращено 
  переданное числительное`, () => {
    expect(DigitsHandler.getLastOneNumberDigit(2)).toBe(2)
    expect(DigitsHandler.getLastOneNumberDigit(41)).toBe(1)
    expect(DigitsHandler.getLastOneNumberDigit(139)).toBe(9)
    expect(DigitsHandler.getLastOneNumberDigit(3318)).toBe(8)
    expect(DigitsHandler.getLastOneNumberDigit(483951597)).toBe(7)
  })

  test(`Метод getLastNumberTwoDigitsNumeral возвращает последнее двузначное
  числительное переданного значения, если оно длиннее двух знаков. В обратном
  случае будет возвращено переданное числительное`, () => {
    expect(DigitsHandler.getTwoLastNumberDigits(0)).toBe(0)
    expect(DigitsHandler.getTwoLastNumberDigits(1)).toBe(1)
    expect(DigitsHandler.getTwoLastNumberDigits(39)).toBe(39)
    expect(DigitsHandler.getTwoLastNumberDigits(111)).toBe(11)
    expect(DigitsHandler.getTwoLastNumberDigits(948)).toBe(48)
    expect(DigitsHandler.getTwoLastNumberDigits(7380193)).toBe(93)
  })
})
