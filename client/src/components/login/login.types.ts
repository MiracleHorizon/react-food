import { z } from 'zod'

// TODO: Валидация пароль через regex.
const LoginDataSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4).max(24)
})

export type LoginData = z.infer<typeof LoginDataSchema>
