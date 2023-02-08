import { makeAutoObservable } from 'mobx'

import { useCartStore } from '@stores/cart.store'

class CutleryStore {
  private count = 0
  // TODO Получать по условию.
  private readonly countPerOrderRestriction = 4

  public get isAdded(): boolean {
    return this.count > 0
  }

  public get isMaxCount(): boolean {
    return this.count === this.countPerOrderRestriction
  }

  public get isCutleryRequired(): boolean {
    return useCartStore.withReadyMeal
  }

  constructor() {
    makeAutoObservable(this)
  }

  public getCount(): number {
    return this.count
  }

  public add(): void {
    this.count = 1
  }

  public incrementCount(): void {
    if (this.count + 1 > this.countPerOrderRestriction) return

    this.count += 1
  }

  public decrementCount(): void {
    if (this.count === 0) return

    this.count -= 1
  }
}

export const useCutleryStore = new CutleryStore()
