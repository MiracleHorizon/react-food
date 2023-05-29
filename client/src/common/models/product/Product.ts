import { z } from 'zod'

export const ProductSchema = z.object({
  id: z.string().cuid(),
  tag: z.string(),
  title: z.string(),
  weight: z.number().int(),
  fullPrice: z.number(),
  discountPercent: z.number().int(),
  imagePath: z.string().url().or(z.null())
})

export type ProductModel = z.infer<typeof ProductSchema>
