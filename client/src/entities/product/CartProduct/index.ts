import { Product } from '../Product'
import { ICartProduct } from '@/models/product/ICartProduct'

export class CartProduct extends Product implements ICartProduct {
  public count: number

  constructor({ count, ...product }: ICartProduct) {
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
