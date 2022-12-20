import { z } from 'zod'

export const CutlerySchema = z.object({
  count: z.number().min(0, {
    message: 'Значение должно быть больше или равно нулю.'
  }),
  countPerOrderRestriction: z.number().min(0, {
    message: 'Значение должно быть больше или равно нулю.'
  })
})

export type CutleryParams = z.infer<typeof CutlerySchema>
