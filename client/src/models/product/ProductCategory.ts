import { z } from 'zod'

import { ProductSchema } from '@/models/product/TProduct'

export const ProductCategorySchema = z.object({
  id: z.string().uuid({
    message: 'Значение должно соответствовать стандарду uuid.'
  }),
  title: z.string(),
  products: z.array(ProductSchema)
})

export type ProductCategory = z.infer<typeof ProductCategorySchema>
