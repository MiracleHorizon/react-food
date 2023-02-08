import { Product, ShowcaseProductModel } from '@entities/product'

export class ShowcaseProduct extends Product {
  public readonly description: string
  public readonly subcategoryId: string

  constructor({
    description,
    subcategoryId,
    ...baseProduct
  }: ShowcaseProductModel) {
    super(baseProduct)
    this.description = description
    this.subcategoryId = subcategoryId
  }
}
