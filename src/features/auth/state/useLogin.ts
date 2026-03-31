import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/features/auth/state/authStore'
import { toast } from 'sonner'

export const useLogin = () => {
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login)

  const handleLogin = async (username: string) => {
    try {
      if (username !== 'teste123') {
        throw new Error('Usuário inválido')
      }

      await new Promise((resolve) => setTimeout(resolve, 2000))

      login(username)

      toast.success('Login realizado com sucesso!')

      navigate('/dashboard')
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Falha ao fazer login'

      toast.error(message)
    }
  }

  return { handleLogin }
}
