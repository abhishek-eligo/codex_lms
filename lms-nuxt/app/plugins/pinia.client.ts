import { useThemeStore } from '~/stores/theme'
import { useAuthStore } from '~/stores/auth'
import { useConfigStore } from '~/stores/config'

export default defineNuxtPlugin(() => {
  const themeStore = useThemeStore()
  const authStore = useAuthStore()
  const configStore = useConfigStore()

  themeStore.hydrate()
  authStore.hydrate()
  configStore.hydrate()
})
