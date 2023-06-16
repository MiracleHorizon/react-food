import { z } from 'zod'

const UserSchema = z.object({
  id: z.string().cuid(),
  email: z.string().email(),
  name: z.string(),
  cartId: z.string().cuid(),
  role: z.enum(['ADMIN', 'USER']),
  bonusCoins: z.number().min(0)
})

export type UserModel = z.infer<typeof UserSchema>
