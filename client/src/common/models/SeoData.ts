import { z } from 'zod'

export const SeoDataSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  keywords: z.array(z.string()).optional()
})

export type SeoData = z.infer<typeof SeoDataSchema>
