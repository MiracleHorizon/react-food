import { describe, expect, test } from '@jest/globals'

import { RuNounNumeralFormatter } from './RuNounNumeralFormatter'

describe(`Модуль RuNounNumeralFormatter отвечает за склонение существительного,
исходя из его количества. На вход он получает корень существительного и варианты
окончаний для формы "несколько (существительных)", "множество (существительных)"
необязательный параметр базового окончания`, () => {
  test('Существительное "товар"', () => {
    const productNumeralFormatter = new RuNounNumeralFormatter({
      nounRoot: 'товар',
      fewFormEnding: 'а',
      pluralFormEnding: 'ов'
    })

    expect(productNumeralFormatter.format(0)).toBe('0 товаров')
    expect(productNumeralFormatter.format(1)).toBe('1 товар')
    expect(productNumeralFormatter.format(3)).toBe('3 товара')
    expect(productNumeralFormatter.format(10)).toBe('10 товаров')
    expect(productNumeralFormatter.format(21)).toBe('21 товар')
    expect(productNumeralFormatter.format(32)).toBe('32 товара')
    expect(productNumeralFormatter.format(100)).toBe('100 товаров')
    expect(productNumeralFormatter.format(1000)).toBe('1000 товаров')
    expect(productNumeralFormatter.format(1001)).toBe('1001 товар')
    expect(productNumeralFormatter.format(1000000)).toBe('1000000 товаров')
    expect(productNumeralFormatter.format(312412213)).toBe('312412213 товаров')
  })

  test('Существительное "пользователь"', () => {
    const userNumeralFormatter = new RuNounNumeralFormatter({
      nounRoot: 'пользовател',
      baseEnding: 'ь',
      fewFormEnding: 'я',
      pluralFormEnding: 'ей'
    })

    expect(userNumeralFormatter.format(0)).toBe('0 пользователей')
    expect(userNumeralFormatter.format(1)).toBe('1 пользователь')
    expect(userNumeralFormatter.format(2)).toBe('2 пользователя')
    expect(userNumeralFormatter.format(4)).toBe('4 пользователя')
    expect(userNumeralFormatter.format(6)).toBe('6 пользователей')
    expect(userNumeralFormatter.format(99)).toBe('99 пользователей')
    expect(userNumeralFormatter.format(100)).toBe('100 пользователей')
    expect(userNumeralFormatter.format(400)).toBe('400 пользователей')
    expect(userNumeralFormatter.format(432)).toBe('432 пользователя')
    expect(userNumeralFormatter.format(789)).toBe('789 пользователей')
  })

  test('Существительное "машина"', () => {
    const carNumeralFormatter = new RuNounNumeralFormatter({
      nounRoot: 'машин',
      baseEnding: 'а',
      fewFormEnding: 'ы',
      pluralFormEnding: ''
    })

    expect(carNumeralFormatter.format(0)).toBe('0 машин')
    expect(carNumeralFormatter.format(1)).toBe('1 машина')
    expect(carNumeralFormatter.format(3)).toBe('3 машины')
    expect(carNumeralFormatter.format(8)).toBe('8 машин')
    expect(carNumeralFormatter.format(10)).toBe('10 машин')
    expect(carNumeralFormatter.format(21)).toBe('21 машина')
    expect(carNumeralFormatter.format(34)).toBe('34 машины')
    expect(carNumeralFormatter.format(100)).toBe('100 машин')
    expect(carNumeralFormatter.format(101)).toBe('101 машина')
    expect(carNumeralFormatter.format(600)).toBe('600 машин')
    expect(carNumeralFormatter.format(23990)).toBe('23990 машин')
    expect(carNumeralFormatter.format(23913382)).toBe('23913382 машины')
  })

  test('Существительное "человек"', () => {
    const humanNumeralFormatter = new RuNounNumeralFormatter({
      nounRoot: 'человек',
      fewFormEnding: 'а',
      pluralFormEnding: ''
    })

    expect(humanNumeralFormatter.format(0)).toBe('0 человек')
    expect(humanNumeralFormatter.format(1)).toBe('1 человек')
    expect(humanNumeralFormatter.format(2)).toBe('2 человека')
    expect(humanNumeralFormatter.format(4)).toBe('4 человека')
    expect(humanNumeralFormatter.format(6)).toBe('6 человек')
    expect(humanNumeralFormatter.format(29)).toBe('29 человек')
    expect(humanNumeralFormatter.format(100)).toBe('100 человек')
    expect(humanNumeralFormatter.format(121)).toBe('121 человек')
    expect(humanNumeralFormatter.format(144)).toBe('144 человека')
    expect(humanNumeralFormatter.format(1000)).toBe('1000 человек')
  })
})
