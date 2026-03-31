import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '@/features/auth/state/authStore'

export function PublicRoute() {
  const user = useAuthStore((state) => state.user)

  if (user) {
    return <Navigate to="/dashboard" replace />
  }

  return <Outlet />
}
