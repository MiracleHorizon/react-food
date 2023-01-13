import { z } from 'zod'

import { ProductSchema } from '@/models/product/ProductModel'

export const ProductSubcategorySchema = z.object({
  id: z.string().cuid({
    message: 'Значение должно соответствовать стандарду cuid.'
  }),
  title: z.string(),
  products: z.array(ProductSchema)
})

export type ProductSubcategoryModel = z.infer<typeof ProductSubcategorySchema>
