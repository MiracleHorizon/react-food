import { makeAutoObservable } from 'mobx'

import { ProductCategoryModel } from '@/models/product/ProductCategoryModel'
import { ProductSubcategoryModel } from '@/models/product/ProductSubcategoryModel'

class ProductCategoryStore {
  private _id: string = ''
  private _title: string = ''
  private _productSubcategories: ProductSubcategoryModel[] = []

  public get id(): string {
    return this._id
  }

  public get title(): string {
    return this._title
  }

  public get productSubcategories(): ProductSubcategoryModel[] {
    return this._productSubcategories
  }

  public get category(): ProductCategoryModel {
    return {
      id: this._id,
      title: this._title,
      productSubcategories: this._productSubcategories
    }
  }

  constructor() {
    makeAutoObservable(this)
  }

  public setCategory({
    id,
    title,
    productSubcategories
  }: ProductCategoryModel): void {
    this._id = id
    this._title = title
    this._productSubcategories = productSubcategories
  }
}

export default new ProductCategoryStore()
