import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { AuthState } from '../models/auth.types'

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: (username) => set({ user: username }),
      logout: () => set({ user: null })
    }),
    {
      name: 'auth-storage'
    }
  )
)
