import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { cartService } from '@api/CartService'
import { CartProduct } from '@entities/CartProduct'
import { reduceNumberArray } from '@helpers/reduceNumberArray'
import { READY_MEAL_TAGS } from '@constants/food'
import type { CartStore } from './cartStore.types'

export const useCartStore = create(
  devtools<CartStore>((set, get) => ({
    // State
    userCartId: null,
    products: [],

    // Computed
    isEmpty: () => get().products.length === 0,
    totalProductsCost: () =>
      reduceNumberArray(get().products.map(product => product.cost)),
    totalProductsWeight: () =>
      reduceNumberArray(get().products.map(product => product.totalWeight)),
    totalPositions: () => get().products.length,
    withReadyMeal: () =>
      get().products.some(product => READY_MEAL_TAGS.includes(product.tag)),

    // Actions
    initialize: ({ userCartId, products }) =>
      set(() => ({
        userCartId,
        products: products.map(product => new CartProduct(product))
      })),
    deinitialize: () => set(() => ({ userCartId: null, products: [] })),
    addProduct: async showcaseProduct => {
      const userCartId = get().userCartId
      if (!userCartId) return

      try {
        const cartProduct = await cartService.addProduct(
          userCartId,
          showcaseProduct
        )
        set(state => ({
          products: [...state.products, new CartProduct(cartProduct)]
        }))
      } catch (e) {
        throw e
      }
    },
    removeProduct: productId =>
      set(state => ({
        products: state.products.filter(product => product.id !== productId)
      })),
    incrementProductCount: async productReferenceId => {
      // TODO: isPriceAvailable, isWeightAvailable
      const userCartId = get().userCartId
      if (!userCartId) return

      for (const product of get().products) {
        if (product.productReferenceId !== productReferenceId) continue

        try {
          await cartService.incrementProductCount(userCartId, product.id)
          product.incrementCount()
        } catch {
          throw new Error('Произошла ошибка при увеличении количества продукта')
        }
      }

      set({ products: get().products })
    },
    decrementProductCount: async productReferenceId => {
      const userCartId = get().userCartId
      if (!userCartId) return

      for (const product of get().products) {
        if (product.productReferenceId !== productReferenceId) continue

        try {
          await cartService.decrementProductCount(userCartId, product.id)
          product.decrementCount()

          if (product.count === 0) {
            get().removeProduct(product.id)
          }
        } catch {
          throw new Error('Произошла ошибка при уменьшении количества продукта')
        }
      }

      set({ products: get().products })
    },
    clearCart: async () => {
      const userCartId = get().userCartId
      if (!userCartId) {
        throw new Error('Произошла ошибка при попытке очистить корзину')
      }

      try {
        await cartService.clearUserCart(userCartId)
        set(() => ({ products: [] }))
      } catch (e) {
        throw e
      }
    },
    getProductCount: productReferenceId => {
      const product = get().products.find(
        product => product.productReferenceId === productReferenceId
      )
      return product?.count ?? 0
    },
    isProductInCart: productReferenceId =>
      get().products.some(
        product => product.productReferenceId === productReferenceId
      )
  }))
)
