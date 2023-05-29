import { z } from 'zod'

import { ShowcaseProductSchema } from '../product/ShowcaseProduct'

export const ProductSubcategorySchema = z.object({
  id: z.string().cuid(),
  title: z.string(),
  description: z.string(),
  products: z.array(ShowcaseProductSchema),
  categoryId: z.string().cuid()
})

export type ProductSubcategoryModel = z.infer<typeof ProductSubcategorySchema>
