import { makeAutoObservable } from 'mobx'

import type { ProductModel } from '@/entities/product'
import { Product } from '@/entities/product'
import { ArrayReducer } from '@/utils/array-reducer'
import { NumberFormatter } from '@/utils/number-formatter'
import { InvalidPaymentCostException } from '@/exceptions/invalid-payment-cost'
import { InvalidOrderWeightException } from '@/exceptions/invalid-order-weight'
import { MIN_ORDER_COST, READY_MEAL_TAGS } from '@/utils/constants'
import { intlConfig } from '@/utils/configs/intl.config'

class CartStore {
  private _isCartDataLoading = true
  private _products: Product[] = []

  private readonly MAX_ORDER_WEIGHT_RESTRICTION = 3e4
  private readonly MAX_ORDER_PRICE_RESTRICTION = 5e4
  private readonly numberFormatter = new NumberFormatter('ru')

  public get isCartDataLoading(): boolean {
    return this._isCartDataLoading
  }

  public get products(): ProductModel[] {
    return this._products
  }

  public set products(products: ProductModel[]) {
    this._products = products.map(product => new Product(product))
  }

  public get totalPositions(): number {
    return this._products.length
  }

  public get totalCost(): number {
    return ArrayReducer.reduceNumberArray(
      this._products.map(product => product.getCost())
    )
  }

  public get isEmpty(): boolean {
    return this._products.length === 0
  }

  public get isIncludesReadyMeal(): boolean {
    return this.products
      .map(({ tag }) => READY_MEAL_TAGS.includes(tag))
      .includes(true)
  }

  public get minOrderCostExceeded(): boolean {
    return this.totalCost >= MIN_ORDER_COST
  }

  public get orderCostShortage(): number {
    return MIN_ORDER_COST - this.totalCost
  }

  constructor() {
    makeAutoObservable(this)
  }

  public initializeCart(products: ProductModel[]): void {
    this._isCartDataLoading = false
    this.products = products
  }

  public clear(): void {
    this._products.length = 0
  }

  public addProduct(product: ProductModel): void {
    this._products.push(new Product({ ...product, count: 1 }))
  }

  public removeProduct(productId: string): void {
    this._products = this._products.filter(product => product.id !== productId)
  }

  public isProductInCart(productId: string): boolean {
    return this._products.map(product => product.id).includes(productId)
  }

  public incrementProductCount(productId: string): void {
    this._products = this._products.map(product => {
      if (product.id !== productId) {
        return product
      }

      if (!this.isWeightAvailable(product.weight)) {
        throw new InvalidOrderWeightException()
      }

      if (!this.isCostAvailable(product.price)) {
        throw new InvalidPaymentCostException()
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

  private isCostAvailable(newProductPrice: number): boolean {
    const potentialCost = this.totalCost + newProductPrice
    return potentialCost <= this.MAX_ORDER_PRICE_RESTRICTION
  }

  public getTotalProductsWeight(): number {
    return ArrayReducer.reduceNumberArray(
      this._products.map(product => product.getTotalWeight())
    )
  }

  public getFormattedTotalCost(): string {
    return this.numberFormatter.formatCurrency({
      value: this.totalCost,
      ...intlConfig.currencyOptions
    })
  }

  public getFormattedOrderCostShortage(): string {
    return this.numberFormatter.formatCurrency({
      value: this.orderCostShortage,
      ...intlConfig.currencyOptions
    })
  }
}

export const cartStore = new CartStore()
