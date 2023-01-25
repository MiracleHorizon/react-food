import { describe, expect, test } from '@jest/globals'

import { ArrayReducer } from './index'

describe(`С помощью метода Array.reduce() модуль ArrayReducer 
  обрабатывает различные массивы данных.`, () => {
  describe(`Метод reduceNumberArray должен вернуть сложенные числа из передаваемого 
  массива, при наличии опционального базового значения учитывая его.`, () => {
    test('Первый кейс.', () => {
      const num = ArrayReducer.reduceNumberArray([0, 0, 0])

      expect(num).toBe(0)
      expect(Boolean(num)).toBeFalsy()
    })

    test('Второй кейс.', () => {
      const num = ArrayReducer.reduceNumberArray([1, 2, 3])

      expect(num).not.toBeLessThan(6)
      expect(num).toBeGreaterThan(4)
      expect(num).toBeLessThanOrEqual(19)
      expect(num).toBeGreaterThanOrEqual(6)
      expect(num).toBe(6)
    })

    test('Третий кейс.', () => {
      const num = ArrayReducer.reduceNumberArray([-10, 38, 0])

      expect(num).toBeLessThan(30)
      expect(num).toBeGreaterThan(20)
      expect(num).toBe(28)
    })

    test('Четвёртый кейс.', () => {
      const num = ArrayReducer.reduceNumberArray([38, 19, 1], 93)

      expect(num).toBeGreaterThan(100)
      expect(num).toBeLessThan(200)
      expect(num).toBe(151)
      expect(num / 100).toBe(1.51)
    })

    test('Пятый кейс.', () => {
      const num = ArrayReducer.reduceNumberArray([0, 8, 31], -60)

      expect(num).toBeLessThan(0)
      expect(num).toBeGreaterThan(-30)
      expect(num).toBe(-21)
    })
  })
})
