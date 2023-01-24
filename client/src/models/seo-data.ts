import { z } from 'zod'

export const SeoDataSchema = z.object({
  title: z.string().optional()
})

export type SeoData = z.infer<typeof SeoDataSchema>
