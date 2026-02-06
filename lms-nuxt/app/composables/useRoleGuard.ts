import type { UserRole } from '~/stores/auth'
import { useAuthStore } from '~/stores/auth'

export const useRoleGuard = () => {
  const authStore = useAuthStore()

  const hasAccess = (roles: UserRole[]) => {
    if (!authStore.role) return false
    return roles.includes(authStore.role)
  }

  return { hasAccess }
}
