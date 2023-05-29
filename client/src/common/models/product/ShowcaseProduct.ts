import { z } from 'zod'

import { ProductSchema } from './Product'

export const ShowcaseProductSchema = ProductSchema.extend({
  description: z.string(),
  subcategoryId: z.string().cuid()
})

export type ShowcaseProductModel = z.infer<typeof ShowcaseProductSchema>
