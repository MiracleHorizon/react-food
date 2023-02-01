import { z } from 'zod'

import { ProductSchema } from '@/entities/product/product.model'

export const ProductSubcategorySchema = z.object({
  id: z.string().cuid(),
  title: z.string(),
  products: z.array(ProductSchema),
  productCategoryId: z.string().cuid()
})

export type ProductSubcategoryModel = z.infer<typeof ProductSubcategorySchema>