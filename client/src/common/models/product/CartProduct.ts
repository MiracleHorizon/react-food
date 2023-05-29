import { z } from 'zod'

import { ProductSchema } from './Product'

export const CartProductSchema = ProductSchema.extend({
  productReferenceId: z.string().cuid(),
  count: z.number().int()
})

export type CartProductModel = z.infer<typeof CartProductSchema>
