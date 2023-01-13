import { z } from 'zod'

export const NavigationCategorySchema = z.object({
  id: z.string().cuid(),
  title: z.string().min(3).max(30),
  imageUrl: z.string().url().or(z.null()),
  description: z.string().optional()
})

export type NavigationCategory = z.infer<typeof NavigationCategorySchema>
