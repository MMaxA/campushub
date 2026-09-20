import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from '../store/hooks'
import type { Role } from '../types/models'

export function ProtectedRoute({ roles }: { roles?: Role[] }) {
  const user = useAppSelector((state) => state.auth.user)
  const location = useLocation()
  if (!user) return <Navigate to="/login" replace state={{ from: location.pathname }} />
  if (roles && !roles.includes(user.role)) return <Navigate to="/" replace />
  return <Outlet />
}

