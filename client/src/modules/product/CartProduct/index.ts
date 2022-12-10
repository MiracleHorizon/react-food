import { Product } from '@/modules/product/Product'
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

export class OrderWeightError extends Error {
  constructor() {
    super('Maximum order weight exceeded')
  }
}

export class PaymentLimitError extends Error {
  constructor() {
    super('Maximum payment limit exceeded')
  }
}

export class StockProductLimitError extends Error {
  constructor(productId: string, productTitle: string) {
    super(`
    There is no such quantity of this product 
    in stock: ${productTitle}; id: ${productId}
    `)
  }
}
