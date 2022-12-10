import { makeAutoObservable } from 'mobx'

import {
  CartProduct,
  OrderWeightError,
  PaymentLimitError,
  StockProductLimitError
} from '@/modules/product/CartProduct'
import { IProduct } from '@/models/product/IProduct'
import { ICartProduct } from '@/models/product/ICartProduct'

class CartStore {
  public products: CartProduct[] = []
  private MAX_ORDER_WEIGHT_RESTRICTION = 5e3
  private MAX_ORDER_PRICE_RESTRICTION = 5e4

  constructor() {
    makeAutoObservable(this)
  }

  public get isEmpty(): boolean {
    return this.products.length === 0
  }

  public setProducts(products: ICartProduct[]): void {
    this.products = products.map(product => new CartProduct(product))
  }

  public clearProducts(): void {
    this.products = []
  }

  public addProduct(product: IProduct): void {
    const cartProduct = new CartProduct({ ...product, count: 1 })

    this.products.push(cartProduct)
  }

  public removeProduct(productId: string): void {
    this.products = this.products.filter(product => product.id !== productId)
  }

  public incrementProductCount(productId: string): void {
    this.products.forEach(
      ({
        id,
        count,
        title,
        weight,
        price,
        quantityInStock,
        incrementCount
      }) => {
        if (id !== productId) return

        if (!this.isWeightAvailable(weight)) {
          throw new OrderWeightError()
        }

        if (!this.isPriceAvailable(price)) {
          throw new PaymentLimitError()
        }

        if (count + 1 > quantityInStock) {
          throw new StockProductLimitError(id, title)
        }

        incrementCount()
      }
    )
  }

  // TODO По-возможности вынести в отдельных класс
  private isWeightAvailable(productWeight: number): boolean {
    const potentialWeight = this.getTotalWeight() + productWeight

    return potentialWeight <= this.MAX_ORDER_WEIGHT_RESTRICTION
  }

  // TODO По-возможности вынести в отдельных класс
  private isPriceAvailable(productPrice: number): boolean {
    const potentialPrice = this.getTotalPrice() + productPrice

    return potentialPrice <= this.MAX_ORDER_PRICE_RESTRICTION
  }

  public decrementProductCount(productId: string): void {
    this.products.forEach(product => {
      if (product.id !== productId) return

      if (product.count - 1 > 0) {
        product.decrementCount()
      }

      if (product.count - 1 === 0) {
        this.removeProduct(productId)
      }
    })
  }

  public getTotalProducts(): number {
    return this.reduceArray(this.products.map(product => product.count))
  }

  public getTotalPrice(): number {
    return this.reduceArray(this.products.map(product => product.getTotalPrice()))
  }

  public getTotalWeight(): number {
    return this.reduceArray(this.products.map(product => product.getTotalWeight()))
  }

  private reduceArray(array: number[]): number {
    return array.reduce((acc, el) => acc + el, 0)
  }
}

export default new CartStore()
