import { defineStore } from 'pinia'

interface ThemeState {
  primary: string
  secondary: string
  accent: string
}

const STORAGE_KEY = 'lms-theme'

export const useThemeStore = defineStore('theme', {
  state: (): ThemeState => ({
    primary: '#2563eb',
    secondary: '#1f2937',
    accent: '#f97316'
  }),
  actions: {
    setTheme(payload: Partial<ThemeState>) {
      this.primary = payload.primary ?? this.primary
      this.secondary = payload.secondary ?? this.secondary
      this.accent = payload.accent ?? this.accent
      this.applyTheme()
      if (process.client) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.$state))
      }
    },
    applyTheme() {
      if (!process.client) return
      const root = document.documentElement
      root.style.setProperty('--primary-color', this.primary)
      root.style.setProperty('--secondary-color', this.secondary)
      root.style.setProperty('--accent-color', this.accent)
    },
    hydrate() {
      if (process.client) {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (raw) {
          const saved = JSON.parse(raw) as ThemeState
          this.primary = saved.primary
          this.secondary = saved.secondary
          this.accent = saved.accent
        }
        this.applyTheme()
      }
    }
  }
})
