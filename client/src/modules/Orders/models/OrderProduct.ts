import type { CartProductModel } from '@models/product/CartProduct'

export type OrderProductModel = Omit<CartProductModel, 'productReferenceId'>
