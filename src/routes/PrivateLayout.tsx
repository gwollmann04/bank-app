import { useAuthStore } from '@/features/auth/state/authStore'
import { Outlet, useNavigate } from 'react-router-dom'

export function PrivateLayout() {
  const navigate = useNavigate()
  const logout = useAuthStore((state) => state.logout)
  const user = useAuthStore((state) => state.user)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex items-center justify-between bg-white p-4 shadow-md">
        <h1 className="text-xl font-bold text-gray-700">Olá, {user || 'Usuário'}</h1>
        <button
          onClick={handleLogout}
          className="rounded bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
        >
          Logout
        </button>
      </header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  )
}
