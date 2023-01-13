import { z } from 'zod'

import { ProductSubcategorySchema } from '@/models/product/ProductSubcategoryModel'

export const ProductCategorySchema = z.object({
  id: z.string().cuid(),
  title: z.string().min(3).max(30),
  productSubcategories: z.array(ProductSubcategorySchema)
})

export type ProductCategoryModel = z.infer<typeof ProductCategorySchema>
