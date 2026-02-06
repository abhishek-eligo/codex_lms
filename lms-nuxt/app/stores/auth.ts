import { defineStore } from 'pinia'

export type UserRole = 'SA' | 'CA' | 'CU' | 'IU'

interface UserProfile {
  id: string
  name: string
  email: string
  role: UserRole
  company?: string
}

interface AuthState {
  user: UserProfile | null
}

const STORAGE_KEY = 'lms-auth'

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null
  }),
  getters: {
    isAuthenticated: (state) => Boolean(state.user),
    role: (state) => state.user?.role ?? null
  },
  actions: {
    login(role: UserRole) {
      const profile: UserProfile = {
        id: 'user-001',
        name: role === 'SA' ? 'Super Admin' : role === 'CA' ? 'Company Admin' : 'Learner',
        email: 'user@lms.com',
        role,
        company: role === 'CA' || role === 'CU' ? 'Acme Corp' : undefined
      }
      this.user = profile
      if (process.client) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(profile))
      }
    },
    logout() {
      this.user = null
      if (process.client) {
        localStorage.removeItem(STORAGE_KEY)
      }
    },
    hydrate() {
      if (process.client) {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (raw) {
          this.user = JSON.parse(raw) as UserProfile
        }
      }
    }
  }
})
