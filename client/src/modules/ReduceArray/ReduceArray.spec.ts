import { describe, test } from '@jest/globals'

import { ReduceArray } from './index'

describe('С помощью метода Array.reduce() модуль обрабатывает массивы', () => {
  test(`Метод reduceNumberArray должен вернуть сложенные числа из передаваемого массива`, () => {
    expect(ReduceArray.reduceNumberArray([1, 2, 3])).toBe(6)
    expect(ReduceArray.reduceNumberArray([0, 0, 0])).toBe(0)
    expect(ReduceArray.reduceNumberArray([-10, 38, 0])).toBe(28)
  })
})
