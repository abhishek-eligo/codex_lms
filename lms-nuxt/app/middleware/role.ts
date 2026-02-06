import type { UserRole } from '~/stores/auth'
import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()
  const roles = (to.meta.roles ?? []) as UserRole[]
  if (roles.length && (!authStore.role || !roles.includes(authStore.role))) {
    return navigateTo('/login')
  }
})
