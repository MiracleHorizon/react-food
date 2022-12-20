import { z } from 'zod'

export const ProductSchema = z.object({
  id: z.string().uuid(),
  tag: z.string(),
  title: z.string(),
  price: z.number().min(1, {
    message: 'Значение должно быть больше единицы.'
  }),
  weight: z.number().min(1, {
    message: 'Значение должно быть больше единицы.'
  }),
  imageUrl: z
    .string()
    .url({
      message:
        'Если значение не равно null, тогда оно должно быть в формате url.'
    })
    .or(z.null())
})

export type TProduct = z.infer<typeof ProductSchema>
