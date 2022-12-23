import { z } from 'zod'

import { ProductSchema } from '@/models/product/ProductModel'

export const CartProductSchema = ProductSchema.extend({
  count: z.number().min(0, {
    message: 'Значение должно быть больше или равно нулю.'
  })
})

export type CartProductModel = z.infer<typeof CartProductSchema>
