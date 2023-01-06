import { z } from 'zod'

export const NavigationCategorySchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(3).max(30),
  imageUrl: z.string().url().or(z.null())
})

export type NavigationCategory = z.infer<typeof NavigationCategorySchema>
