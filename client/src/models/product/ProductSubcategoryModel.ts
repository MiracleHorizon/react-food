import { z } from 'zod'

import { ProductSchema } from '@/models/product/ProductModel'

export const ProductSubcategorySchema = z.object({
  id: z.string().uuid({
    message: 'Значение должно соответствовать стандарду uuid.'
  }),
  title: z.string(),
  products: z.array(ProductSchema)
})

export type ProductSubcategoryModel = z.infer<typeof ProductSubcategorySchema>
