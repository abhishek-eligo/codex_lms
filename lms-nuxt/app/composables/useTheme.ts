import { useThemeStore } from '~/stores/theme'

export const useTheme = () => {
  const themeStore = useThemeStore()
  return { themeStore }
}
