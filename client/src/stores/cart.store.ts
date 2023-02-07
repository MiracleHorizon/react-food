import { action, computed, makeObservable, observable, runInAction } from 'mobx'

import { CartProduct, ShowcaseProductModel } from '@/entities/product'
import { cartService } from '@/api/services/cart.service'
import { ArrayReducer } from '@/utils/array-reducer'
import { NumberFormatter } from '@/utils/number-formatter'
import { InvalidOrderWeightException } from '@/exceptions/invalid-order-weight'
import { InvalidPaymentCostException } from '@/exceptions/invalid-payment-cost'
import { READY_MEAL_TAGS } from '@/utils/constants'
import { intlConfig } from '@/utils/configs/intl.config'
import type { CartModel } from '@/models/cart.model'
import type { Range } from '@/types/range'

interface Constructor {
  location: string
}

export interface OrderParameters {
  serviceFee: number
  minOrderCost: number
  maxOrderCost: number
  maxOrderWeight: number
  freeDeliveryOrderCost: number
  deliveryCostRange: Range
  deliveryTimeRange: Range
  deliveryDistance: number
}

const annotations = {
  cartId: observable,
  products: observable,
  isEmpty: computed,
  totalCost: computed,
  totalWeight: computed,
  totalPositions: computed,
  orderCostShortage: computed,
  formattedTotalCost: computed,
  formattedOrderCostShortage: computed,
  isMinOrderCostExceeded: computed,
  setParameters: action
}

export class CartStore {
  protected readonly numberFormatter: NumberFormatter
  public parameters: OrderParameters = {
    serviceFee: 39,
    minOrderCost: 1.5e3,
    maxOrderCost: 4e4,
    maxOrderWeight: 5e4,
    freeDeliveryOrderCost: 1e3,
    deliveryCostRange: { start: 0, end: 299 },
    deliveryTimeRange: { start: 30, end: 70 },
    deliveryDistance: 2.4e3
  }
  private cartId: string | null = null
  public products: CartProduct[] = []

  public get isEmpty(): boolean {
    return this.products.length === 0
  }

  public get totalCost(): number {
    return this.calculateTotalCost()
  }

  public get totalWeight(): number {
    return this.calculateTotalWeight()
  }

  public get totalPositions(): number {
    return this.products.length
  }

  public get orderCostShortage(): number {
    return !this.isMinOrderCostExceeded
      ? this.parameters.minOrderCost - this.totalCost
      : 0
  }

  public get formattedTotalCost(): string {
    return this.formatCurrency(this.totalCost)
  }

  public get formattedOrderCostShortage(): string {
    return this.formatCurrency(this.orderCostShortage)
  }

  public get isMinOrderCostExceeded(): boolean {
    return this.totalCost >= this.parameters.minOrderCost
  }

  public get withReadyMeal(): boolean {
    return this.products.some(product => READY_MEAL_TAGS.includes(product.tag))
  }

  constructor({ location }: Constructor) {
    makeObservable(this, annotations, {
      deep: true
    })
    this.numberFormatter = new NumberFormatter(location)
  }

  protected formatCurrency(value: number): string {
    return this.numberFormatter.formatCurrency({
      ...intlConfig.currencyOptions,
      value
    })
  }

  private calculateTotalCost(): number {
    return ArrayReducer.reduceNumberArray(
      this.products.map(product => product.cost)
    )
  }

  private calculateTotalWeight(): number {
    return ArrayReducer.reduceNumberArray(
      this.products.map(product => product.totalWeight)
    )
  }

  public initialize({ id, products }: CartModel): void {
    runInAction(() => {
      this.cartId = id
      this.products = products.map(product => new CartProduct(product))
    })
  }

  public deinitialize(): void {
    runInAction(() => {
      this.cartId = null
      this.products = []
    })
  }

  public setParameters(parameters: OrderParameters): void {
    this.parameters = parameters
  }

  public isProductInCart(productReferenceId: string): boolean {
    return this.products.some(
      product => product.productReferenceId === productReferenceId
    )
  }

  public getProductCount(productReferenceId: string): number {
    const product = this.products.find(
      product => product.productReferenceId === productReferenceId
    )
    return product?.count ?? 0
  }

  public async addProduct(
    showcaseProduct: ShowcaseProductModel
  ): Promise<void> {
    if (!this.cartId) return

    try {
      const cartProduct = await cartService.addProduct(
        this.cartId,
        showcaseProduct
      )
      runInAction(() => this.products.push(new CartProduct(cartProduct)))
    } catch (e) {
      throw e
    }
  }

  public async incrementProductCount(
    productReferenceId: string
  ): Promise<void> {
    if (!this.cartId) return

    for (const product of this.products) {
      if (product.productReferenceId !== productReferenceId) continue

      if (!this.isWeightAvailable(product.weight)) {
        throw new InvalidOrderWeightException()
      }

      if (!this.isCostAvailable(product.cost)) {
        throw new InvalidPaymentCostException()
      }

      try {
        await cartService.incrementProductCount(this.cartId, product.id)
        product.incrementCount()
      } catch {
        throw new Error('Произошла ошибка при увеличении количества продукта')
      }
    }

    runInAction(() => (this.products = [...this.products]))
  }

  private isWeightAvailable(newProductWeight: number): boolean {
    return this.totalWeight + newProductWeight <= this.parameters.maxOrderWeight
  }

  private isCostAvailable(newProductCost: number): boolean {
    return this.totalCost + newProductCost <= this.parameters.maxOrderCost
  }

  public async decrementProductCount(
    productReferenceId: string
  ): Promise<void> {
    if (!this.cartId) return

    for (const product of this.products) {
      if (product.productReferenceId !== productReferenceId) continue

      try {
        await cartService.decrementProductCount(this.cartId, product.id)
        product.decrementCount()

        if (product.count === 0) {
          runInAction(() => this.removeProduct(product.id))
        }
      } catch {
        throw new Error('Произошла ошибка при уменьшении количества продукта')
      }
    }

    runInAction(() => (this.products = [...this.products]))
  }

  private removeProduct(productId: string): void {
    this.products = this.products.filter(product => product.id !== productId)
  }

  public async clearCart(): Promise<void> {
    if (!this.cartId) {
      throw new Error('Произошла ошибка при попытке очистить корзину')
    }

    try {
      await cartService.clearCart(this.cartId)
      runInAction(() => (this.products.length = 0))
    } catch (e) {
      throw e
    }
  }
}

export const useCartStore = new CartStore({
  location: 'ru'
})
