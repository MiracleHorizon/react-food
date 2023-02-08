import { computed, makeObservable, observable, runInAction } from 'mobx'

import type { UserModel } from '@models/user.model'

const annotations = {
  _isAuth: observable,
  _user: observable,
  isAuth: computed,
  user: computed
}

class UserStore {
  private _isAuth: boolean = false
  private _user: UserModel | null = null

  public get isAuth(): boolean {
    return this._isAuth
  }

  public get user(): UserModel | null {
    return this._user
  }

  constructor() {
    makeObservable(this, annotations)
  }

  public signin(user: UserModel): void {
    runInAction(() => {
      this._isAuth = true
      this._user = user
    })
  }

  public signout(): void {
    runInAction(() => {
      this._isAuth = false
      this._user = null
    })
  }
}

export const useUserStore = new UserStore()
