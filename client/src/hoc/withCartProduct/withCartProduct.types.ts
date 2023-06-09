import type { FunctionComponent, NamedExoticComponent } from 'react'

import { CartProduct } from '@entities/CartProduct'
import type { CartProductModel } from '@models/product/CartProduct'
import type { EmotionClassNameProps } from '@app-types/EmotionClassNameProps'

export interface Props extends EmotionClassNameProps {
  WrappedComponent: WrappedComponent
  productData: CartProductModel
}

type WrappedComponent =
  | NamedExoticComponent<CartProductHocProps>
  | FunctionComponent<CartProductHocProps>

export interface CartProductHocProps
  extends EmotionClassNameProps,
    Pick<CartProductModel, 'title' | 'count'>,
    Pick<CartProduct, 'formattedWeight' | 'price' | 'image'> {
  actions: Actions
}

interface Actions {
  increment: VoidFunction
  decrement: VoidFunction
}
