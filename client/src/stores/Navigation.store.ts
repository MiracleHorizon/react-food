import { makeAutoObservable } from 'mobx'

import type { NavigationCategory } from '@/models/navigation-category'

// TODO Удалить и перенести логику в компоненты
class NavigationStore {
  private categories: NavigationCategory[] = []

  constructor() {
    makeAutoObservable(this)
  }

  public getCategories(): NavigationCategory[] {
    return this.categories
  }

  public setCategories(categories: NavigationCategory[]): void {
    if (this.categories.length === 0) {
      this.categories = categories
    }
  }
}

const navigationStore = new NavigationStore()

export default navigationStore
