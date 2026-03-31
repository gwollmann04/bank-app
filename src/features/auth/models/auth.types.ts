import type z from 'zod'
import type { loginSchema } from '../models/login.schema'

export type LoginFormData = z.infer<typeof loginSchema>

export type AuthState = {
  user: string | null
  login: (username: string) => void
  logout: () => void
}
