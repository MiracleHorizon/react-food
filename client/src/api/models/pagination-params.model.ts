import { z } from 'zod'

export const PaginationParamsSchema = z.object({
  skip: z.number().min(0).optional().default(0),
  take: z.number().min(0).optional().default(0)
})

export type PaginationParams = z.infer<typeof PaginationParamsSchema>
