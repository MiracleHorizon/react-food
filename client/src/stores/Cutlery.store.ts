import { makeAutoObservable } from 'mobx'

import CartStore from '@/stores/Cart.store'

class CutleryStore {
  private _count = 0
  private readonly _countPerOrderRestriction = 4

  public get count(): number {
    return this._count
  }

  public get isAdded(): boolean {
    return this.count > 0
  }

  public get isMaxCount(): boolean {
    return this._count === this._countPerOrderRestriction
  }

  public get isCutleryRequired(): boolean {
    return CartStore.isIncludesReadyMeal
  }

  constructor() {
    makeAutoObservable(this)
  }

  public addToOrder(): void {
    this._count = 1
  }

  public incrementCount(): void {
    if (this._count + 1 > this._countPerOrderRestriction) return

    this._count += 1
  }

  public decrementCount(): void {
    if (this._count === 0) return

    this._count -= 1
  }
}

export default new CutleryStore()
