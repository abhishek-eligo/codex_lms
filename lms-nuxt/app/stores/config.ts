import { defineStore } from 'pinia'

interface GlobalConfig {
  primaryColor: string
  logo: string
  favicon: string
  dateFormat: string
  timeZone: string
  language: string
  currency: string
  marketplaceEnabled: boolean
  notificationsEnabled: boolean
}

const STORAGE_KEY = 'lms-config'

export const useConfigStore = defineStore('config', {
  state: (): GlobalConfig => ({
    primaryColor: '#2563eb',
    logo: '/logo.svg',
    favicon: '/favicon.svg',
    dateFormat: 'YYYY-MM-DD',
    timeZone: 'UTC',
    language: 'en-US',
    currency: 'USD',
    marketplaceEnabled: true,
    notificationsEnabled: true
  }),
  actions: {
    updateConfig(payload: Partial<GlobalConfig>) {
      Object.assign(this.$state, payload)
      if (process.client) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.$state))
      }
    },
    hydrate() {
      if (process.client) {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (raw) {
          Object.assign(this.$state, JSON.parse(raw) as GlobalConfig)
        }
      }
    }
  }
})
