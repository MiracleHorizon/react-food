import { makeAutoObservable } from 'mobx'

import { CartProduct } from '@/entities/product/CartProduct'
import { ReduceArray } from '@/modules/ReduceArray'
import type { ProductModel } from '@/models/product/ProductModel'
import type { CartProductModel } from '@/models/product/CartProductModel'
import { InvalidPaymentPriceException } from '@/exceptions/InvalidPaymentPriceException'
import { InvalidOrderWeightException } from '@/exceptions/InvalidOrderWeightException'
import { READY_MEAL_TAGS } from '@/utils/constants'

class CartStore {
  private _isCartDataLoading = true
  private _products: CartProduct[] = []
  private readonly MAX_ORDER_WEIGHT_RESTRICTION = 3e4
  private readonly MAX_ORDER_PRICE_RESTRICTION = 5e4
  private readonly reduceArray = ReduceArray.reduceNumberArray

  public get isCartDataLoading(): boolean {
    return this._isCartDataLoading
  }

  public get products(): CartProduct[] {
    return this._products
  }

  public set products(products: CartProductModel[]) {
    this._products = products.map(product => new CartProduct(product))
  }

  public get totalPositions(): number {
    return this._products.length
  }

  public get totalProducts(): number {
    return this.reduceArray(this._products.map(product => product.count))
  }

  public get totalCost(): number {
    return this.reduceArray(this._products.map(product => product.getCost()))
  }

  public get isEmpty(): boolean {
    return this._products.length === 0
  }

  public get isIncludesReadyMeal(): boolean {
    return this.products
      .map(({ tag }) => READY_MEAL_TAGS.includes(tag))
      .includes(true)
  }

  constructor() {
    makeAutoObservable(this)
  }

  public initializeCart(products: CartProductModel[]): void {
    this._isCartDataLoading = false
    this.products = products
  }

  public clear(): void {
    this._products.length = 0
  }

  public addProduct(product: ProductModel): void {
    this._products.push(new CartProduct({ ...product, count: 1 }))
  }

  public removeProduct(productId: string): void {
    this._products = this._products.filter(product => product.id !== productId)
  }

  public incrementProductCount(productId: string): void {
    this._products = this._products.map(product => {
      if (product.id !== productId) {
        return product
      }

      if (!this.isWeightAvailable(product.weight)) {
        throw new InvalidOrderWeightException()
      }

      if (!this.isPriceAvailable(product.price)) {
        throw new InvalidPaymentPriceException()
      }

      product.incrementCount()

      return product
    })
  }

  // TODO Доработать
  public decrementProductCount(productId: string): void {
    this._products = this._products.map(product => {
      if (product.id !== productId) {
        return product
      }

      if (product.count - 1 >= 0) {
        product.decrementCount()
      }

      return product
    })

    this._products.forEach(
      ({ id, count }) => count === 0 && this.removeProduct(id)
    )
  }

  private isWeightAvailable(newProductWeight: number): boolean {
    const potentialWeight = this.getTotalProductsWeight() + newProductWeight
    return potentialWeight <= this.MAX_ORDER_WEIGHT_RESTRICTION
  }

  private isPriceAvailable(newProductPrice: number): boolean {
    const potentialPrice = this.totalCost + newProductPrice
    return potentialPrice <= this.MAX_ORDER_PRICE_RESTRICTION
  }

  public getTotalProductsCount(): number {
    return this.reduceArray(this._products.map(product => product.count))
  }

  public getTotalProductsWeight(): number {
    return this.reduceArray(
      this._products.map(product => product.getTotalWeight())
    )
  }
}

export default new CartStore()
