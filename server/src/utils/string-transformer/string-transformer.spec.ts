import { describe, expect, test } from '@jest/globals'

import { StringTransformer } from './index'

describe('Тестирование класса StringTransformer.', () => {
  test('Метод capitalize() должен вернуть передаваемую строку в capitalize формате.', () => {
    expect(StringTransformer.capitalize('LOREM IPSUM DOLOR SIT AMET.')).toBe(
      'Lorem ipsum dolor sit amet.'
    )
    expect(StringTransformer.capitalize('hello, world!')).toBe('Hello, world!')
    expect(StringTransformer.capitalize('hElLo, WoRlD!')).toBe('Hello, world!')
    expect(StringTransformer.capitalize('')).toBe('')
    expect(StringTransformer.capitalize('O')).toBe('O')
    expect(StringTransformer.capitalize('1')).toBe('1')
  })
})
