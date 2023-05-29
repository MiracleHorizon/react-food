import { CartProduct } from '@entities/CartProduct'
import type { CartProductModel } from '@models/product/CartProduct'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'

export interface CartProductHocComponentProps
  extends EmotionClassNameProps,
    Pick<CartProductModel, 'title' | 'count'>,
    Pick<CartProduct, 'formattedWeight' | 'price' | 'image'> {
  actions: {
    increment: () => Promise<void>
    decrement: () => Promise<void>
  }
}
