import { z } from 'zod'

export const loginSchema = z.object({
  username: z.string().min(3, 'Mínimo 3 caracteres')
})
