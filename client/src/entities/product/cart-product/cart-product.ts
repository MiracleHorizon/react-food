import { CartProductModel, Product } from '@/entities/product'

export class CartProduct extends Product {
  public readonly productReferenceId: string
  private _count: number

  public get count(): number {
    return this._count
  }

  public get cost(): number {
    return this.price.price * this._count
  }

  public get totalWeight(): number {
    return this.weight * this._count
  }

  constructor({ productReferenceId, count, ...baseProduct }: CartProductModel) {
    super(baseProduct)
    this.productReferenceId = productReferenceId
    this._count = count
  }

  public incrementCount(): void {
    this._count += 1
  }

  public decrementCount(): void {
    this._count -= 1
  }
}
