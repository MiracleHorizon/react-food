import { z } from 'zod'

import { ShowcaseProductSchema } from '@/entities/product'

export const ProductSubcategorySchema = z.object({
  id: z.string().cuid(),
  title: z.string(),
  products: z.array(ShowcaseProductSchema),
  productCategoryId: z.string().cuid()
})

export type ProductSubcategoryModel = z.infer<typeof ProductSubcategorySchema>
