import { defineStore } from 'pinia'

interface UserProfile {
  email: string
  firstName: string
  lastName: string
  language: string
  timeZone: string
}

export const useUserStore = defineStore('user', {
  state: (): UserProfile => ({
    email: 'user@lms.com',
    firstName: 'Alex',
    lastName: 'Johnson',
    language: 'en-US',
    timeZone: 'UTC'
  }),
  actions: {
    updateProfile(payload: Partial<UserProfile>) {
      Object.assign(this.$state, payload)
    }
  }
})
