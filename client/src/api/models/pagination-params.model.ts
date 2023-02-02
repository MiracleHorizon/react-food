import { z } from 'zod'

export const PaginationParamsSchema = z.object({
  skip: z.number().int().min(0).optional().default(0),
  take: z.number().int().min(0).optional().default(0)
})

export type PaginationParams = z.infer<typeof PaginationParamsSchema>
