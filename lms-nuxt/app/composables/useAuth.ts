import { useAuthStore } from '~/stores/auth'

export const useAuth = () => {
  const authStore = useAuthStore()
  const login = (role: Parameters<typeof authStore.login>[0]) => authStore.login(role)
  const logout = () => authStore.logout()

  return {
    authStore,
    login,
    logout
  }
}
