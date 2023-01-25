import type {
  ProductCategoryModel,
  ProductSubcategoryModel
} from '@/modules/product-category'
import type { ProductModel } from '@/entities/product'

export class ProductCategoryImpl implements ProductCategoryModel {
  public readonly id: string
  public readonly title: string
  public readonly description: string
  public readonly imageUrl: string | null
  public readonly subcategories: ProductSubcategoryModel[]

  constructor({
    id,
    title,
    description,
    imageUrl,
    subcategories
  }: ProductCategoryModel) {
    this.id = id
    this.title = title
    this.description = description
    this.imageUrl = imageUrl
    this.subcategories = subcategories
  }

  public getFirstProducts(): ProductModel[] {
    // TODO Сделать случайную перемешку.
    return this.subcategories
      .map(subcategory => subcategory.products.slice(0, 5))
      .reduce((acc, array) => acc.concat(array), [])
  }
}
