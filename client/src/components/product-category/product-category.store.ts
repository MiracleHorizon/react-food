import { makeAutoObservable } from 'mobx'

import { ProductCategoryImpl } from './entity/product-category'
import type { ProductCategoryModel } from './entity/models/product-category.model'

class ProductCategoryStore {
  private category: ProductCategoryImpl = {} as ProductCategoryImpl

  public get title(): string {
    return this.category.getTitle()
  }

  constructor() {
    makeAutoObservable(this)
  }

  public setCategory(categoryData: ProductCategoryModel): void {
    this.category = new ProductCategoryImpl(categoryData)
  }
}

const productCategoryStore = new ProductCategoryStore()

export default productCategoryStore
