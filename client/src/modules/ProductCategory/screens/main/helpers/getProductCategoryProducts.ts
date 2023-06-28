import type { ProductCategoryModel } from '@models/productCategory/ProductCategory'
import type { ShowcaseProductModel } from '@models/product/ShowcaseProduct'

export const getProductCategoryProducts = (
  productCategory: ProductCategoryModel
): ShowcaseProductModel[] => {
  return productCategory.subcategories
    .map(subcategory => subcategory.products)
    .reduce((acc, productsArray) => acc.concat(productsArray), [])
}
