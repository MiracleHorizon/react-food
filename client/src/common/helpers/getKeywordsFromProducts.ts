import type { ShowcaseProductModel } from '@models/product/ShowcaseProduct'

export const getKeywordsFromProducts = (
  products: ShowcaseProductModel[]
): string[] => {
  return products
    .map(product => [product.title, product.description])
    .reduce((acc, array) => acc.concat(array), [])
}
