import { computed, makeObservable, observable } from 'mobx'

import { cartStore, CartStore } from '@/stores/cart.store'
import { DeliveryDescription } from '@/entities/delivery-description'
import { intlConfig } from '@/utils/configs/intl.config'

interface Constructor {
  location: string
}

const annotations = {
  description: observable,
  deliveryPrice: computed,
  formattedDeliveryPrice: computed,
  formattedMinOrderCost: computed,
  formattedMaxOrderCost: computed,
  formattedMaxOrderWeight: computed,
  formattedFreeDeliveryOrderCost: computed
}

// TODO: Разобраться с наследованием
class DeliveryStore extends CartStore {
  public readonly description = new DeliveryDescription({
    serviceFee: this.parameters.serviceFee,
    distance: this.parameters.deliveryDistance,
    timeRange: this.parameters.deliveryTimeRange,
    costRange: this.parameters.deliveryCostRange,
    freeCost: this.parameters.freeDeliveryOrderCost
  })

  public get deliveryPrice(): number {
    return cartStore.totalCost >= this.parameters.freeDeliveryOrderCost
      ? 0
      : 149
  }

  public get formattedDeliveryPrice(): string {
    return this.formatCurrency(this.deliveryPrice)
  }

  public get formattedMinOrderCost(): string {
    return this.formatCurrency(this.parameters.minOrderCost)
  }

  public get formattedMaxOrderCost(): string {
    return this.formatCurrency(this.parameters.maxOrderCost)
  }

  public get formattedMaxOrderWeight(): string {
    return this.numberFormatter.formatWeight({
      value: this.parameters.maxOrderWeight
    })
  }

  public get formattedFreeDeliveryOrderCost(): string {
    return this.formatCurrency(this.parameters.freeDeliveryOrderCost)
  }

  constructor(constructor: Constructor) {
    super(constructor)
    makeObservable(this, annotations)
  }

  protected override formatCurrency(value: number): string {
    return this.numberFormatter.formatCurrency({
      ...intlConfig.currencyOptions,
      withoutSpaces: true,
      value
    })
  }

  public getCostInformation() {
    const baseDeliveryPriceRange = this.numberFormatter.formatCurrencyRange({
      start: 100,
      end: this.parameters.freeDeliveryOrderCost - 1,
      ...intlConfig.currencyOptions
    })
    const formattedBaseDeliveryCost = this.formatCurrency(149)
    const formattedFreeDeliveryCost = this.formatCurrency(0)

    return [
      {
        title: `на заказ ${baseDeliveryPriceRange}`,
        value: formattedBaseDeliveryCost
      },
      {
        title: `на заказ от ${this.formattedFreeDeliveryOrderCost}`,
        value: formattedFreeDeliveryCost
      }
    ]
  }

  public getDetails() {
    return [
      {
        title: 'Минимальная стоимость заказа',
        value: this.formattedMinOrderCost
      },
      {
        title: 'Максимальная стоимость заказа',
        value: this.formattedMaxOrderCost
      },
      {
        title: 'Максимальный вес заказа',
        value: this.formattedMaxOrderWeight
      }
    ]
  }
}

export const deliveryStore = new DeliveryStore({
  location: 'ru'
})
