export class StringTransformer {
  public capitalize(string: string): string {
    return string
      .split('')
      .map((char, i) => (i === 0 ? char.toUpperCase() : char.toLowerCase()))
      .join('')
  }
}
