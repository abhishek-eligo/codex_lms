import type { UserRole } from '~/stores/auth'

export const loginUser = async (role: UserRole) => {
  return {
    token: 'mock-token',
    role
  }
}
