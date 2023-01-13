import { StringTransformer } from './index'

describe('Тестирование класса StringTransformer.', () => {
  const stringTransformer = new StringTransformer()

  test('Метод capitalize() должен вернуть передаваемую строку в capitalize формате.', () => {
    expect(stringTransformer.capitalize('LOREM IPSUM DOLOR SIT AMET.')).toBe(
      'Lorem ipsum dolor sit amet.'
    )
    expect(stringTransformer.capitalize('hello, world!')).toBe('Hello, world!')
    expect(stringTransformer.capitalize('hElLo, WoRlD!')).toBe('Hello, world!')
    expect(stringTransformer.capitalize('')).toBe('')
    expect(stringTransformer.capitalize('O')).toBe('O')
    expect(stringTransformer.capitalize('1')).toBe('1')
  })
})
