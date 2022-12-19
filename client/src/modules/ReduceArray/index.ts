export class ReduceArray {
  public static reduceNumberArray(array: number[]): number {
    return array.reduce((acc, el) => acc + el, 0)
  }
}
