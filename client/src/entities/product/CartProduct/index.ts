import { Product } from '../Product'
import type { CartProductModel } from '@/models/product/CartProductModel'

export class CartProduct extends Product implements CartProductModel {
  public count: number

  constructor({ count, ...product }: CartProductModel) {
    super(product)
    this.count = count
  }

  public getTotalPrice(): number {
    return this.count * this.price
  }

  public getTotalWeight(): number {
    return this.count * this.weight
  }

  public incrementCount(): void {
    this.count += 1
  }

  public decrementCount(): void {
    this.count -= 1
  }
}
