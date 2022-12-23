import { makeAutoObservable } from 'mobx'

import type { CutleryParams } from '@/entities/Cutlery/Cutlery.types'

export class Cutlery {
  private _count = 0
  private readonly _countPerOrderRestriction: number

  public get count(): number {
    return this._count
  }

  public get isAdded(): boolean {
    return this.count > 0
  }

  public get isMaxCount(): boolean {
    return this._count === this._countPerOrderRestriction
  }

  constructor({ count, countPerOrderRestriction }: CutleryParams) {
    makeAutoObservable(this)
    this._count = count
    this._countPerOrderRestriction = countPerOrderRestriction
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
