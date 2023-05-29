import { Product } from './Product'
import type { CartProductModel } from '@models/product/CartProduct'

export class CartProduct extends Product {
  private _count: number
  public readonly productReferenceId: string

  constructor({ productReferenceId, count, ...baseProduct }: CartProductModel) {
    super(baseProduct)
    this._count = count
    this.productReferenceId = productReferenceId
  }

  public get count(): number {
    return this._count
  }

  public get cost(): number {
    return this.price.totalPrice * this._count
  }

  public get totalWeight(): number {
    return this.weight * this._count
  }

  public incrementCount(): void {
    this._count += 1
  }

  public decrementCount(): void {
    this._count -= 1
  }

  public getData(): CartProductModel {
    return {
      id: this.id,
      tag: this.tag,
      title: this.title,
      weight: this.weight,
      imagePath: this.imagePath,
      productReferenceId: this.productReferenceId,
      fullPrice: this.price.fullPrice,
      discountPercent: this.price.discountPercent,
      count: this.count
    }
  }
}
