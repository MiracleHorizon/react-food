export const reduceNumberArray = (
  array: number[],
  baseValue?: number
): number => array.reduce((acc, num) => acc + num, baseValue ?? 0)
