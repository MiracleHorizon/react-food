import type { ProductSubcategoryModel } from '@models/productCategory/ProductSubcategory'

export interface ProductSubcategoriesServiceModel {
  fetchOneSubcategory(subcategoryId: string): Promise<ProductSubcategoryModel>
}
