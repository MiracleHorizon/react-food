export class StringTransformer {
  public static capitalize(string: string): string {
    return string
      .split('')
      .map((char, i) => (i === 0 ? char.toUpperCase() : char.toLowerCase()))
      .join('')
  }
}
