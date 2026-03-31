import type { FC } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { loginSchema } from '../models/login.schema'
import type { LoginFormData } from '../models/auth.types'
import { useLogin } from '../state/useLogin'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Field, FieldLabel, FieldError } from '@/components/ui/field'
import { Loader2 } from 'lucide-react'

const LoginForm: FC = () => {
  const { handleLogin } = useLogin()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: '' },
    mode: 'onChange'
  })

  const onSubmit = async (data: LoginFormData) => {
    await handleLogin(data.username)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Field>
        <FieldLabel>Username</FieldLabel>
        <Input
          {...register('username')}
          placeholder="Digite seu username"
          autoComplete="username"
          hasError={!!errors.username}
        />
        <FieldError className="text-red-500">{errors.username?.message}</FieldError>
      </Field>

      <Button type="submit" variant="form" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Entrar'}
      </Button>
    </form>
  )
}

export default LoginForm
