import { z } from 'zod'

export const ProductSchema = z.object({
  id: z.string().cuid(),
  tag: z.string(),
  title: z.string(),
  weight: z.number(),
  count: z.number().min(0),
  fullPrice: z.number().int().positive(),
  discountPercent: z.number().int().min(0),
  imagePath: z.string().url().or(z.null())
})

export type ProductModel = z.infer<typeof ProductSchema>
