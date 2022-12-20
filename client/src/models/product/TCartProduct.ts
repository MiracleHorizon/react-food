import { z } from 'zod'

import { ProductSchema } from '@/models/product/TProduct'

export const CartProductSchema = ProductSchema.extend({
  count: z.number().min(0, {
    message: 'Значение должно быть больше или равно нулю.'
  })
})

export type TCartProduct = z.infer<typeof CartProductSchema>
