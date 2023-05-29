import { z } from 'zod'

import { ProductSubcategorySchema } from './ProductSubcategory'

export const ProductCategorySchema = z.object({
  id: z.string().cuid(),
  title: z.string().min(3).max(30),
  description: z.string(),
  imagePath: z.string().url().or(z.null()),
  subcategories: z.array(ProductSubcategorySchema)
})

export type ProductCategoryModel = z.infer<typeof ProductCategorySchema>
