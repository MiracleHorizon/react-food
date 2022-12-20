import { z } from 'zod'

export const HeadPropsSchema = z.object({
  title: z.string()
})

export type HeadProps = z.infer<typeof HeadPropsSchema>
