import { Product } from '../Product'
import type { TCartProduct } from '@/models/product/TCartProduct'

export class CartProduct extends Product implements TCartProduct {
  public count: number

  constructor({ count, ...product }: TCartProduct) {
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
