import type { ProductCategoryModel } from '@/components/product-category'
import type { ProductSubcategoryModel } from '@/components/product-category/entity/models/product-subcategory.model'

export class ProductCategoryImpl implements ProductCategoryModel {
  public readonly id: string
  public readonly title: string
  public readonly subcategories: ProductSubcategoryModel[]

  constructor({ id, title, subcategories }: ProductCategoryModel) {
    this.id = id
    this.title = title
    this.subcategories = subcategories
  }

  public getId(): string {
    return this.id
  }

  public getTitle(): string {
    return this.title
  }

  public getSubcategories(): ProductSubcategoryModel[] {
    return this.subcategories
  }
}
