import { makeAutoObservable } from 'mobx'

import type { NavigationCategory } from '@/models/NavigationCategory'

class ApplicationStore {
  private _navigationCategories: NavigationCategory[] = []

  public get navigationCategories(): NavigationCategory[] {
    return this._navigationCategories
  }

  constructor() {
    makeAutoObservable(this)
  }

  public setNavigationCategories(categories: NavigationCategory[]): void {
    if (this._navigationCategories.length === 0) {
      this._navigationCategories = categories
    }
  }
}

export default new ApplicationStore()
