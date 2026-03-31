import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '@/features/auth/state/authStore'

export function PrivateRoute() {
  const user = useAuthStore((state) => state.user)

  const isAuthenticated = !!user

  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
