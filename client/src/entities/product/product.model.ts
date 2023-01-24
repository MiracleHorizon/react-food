import { z } from 'zod'

export const ProductSchema = z.object({
  id: z.string().cuid(),
  tag: z.string(),
  title: z.string(),
  price: z.number(),
  weight: z.number(),
  count: z.number().min(0),
  imageUrl: z.string().url().or(z.null())
})

export type ProductModel = z.infer<typeof ProductSchema>
