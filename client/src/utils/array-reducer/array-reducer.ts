export class ArrayReducer {
  public static reduceNumberArray(array: number[], baseValue?: number): number {
    return array.reduce((acc, el) => acc + el, baseValue ?? 0)
  }
}
