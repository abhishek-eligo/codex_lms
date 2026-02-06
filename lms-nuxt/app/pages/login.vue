<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'
import type { UserRole } from '~/stores/auth'

definePageMeta({
  layout: 'auth'
})

const { login } = useAuth()
const router = useRouter()

const roles: Array<{ label: string; value: UserRole; description: string }> = [
  { label: 'Super Admin', value: 'SA', description: 'Platform owner & global configuration' },
  { label: 'Company Admin', value: 'CA', description: 'Manage company users, orders, and groups' },
  { label: 'Company User', value: 'CU', description: 'Employee learning workspace' },
  { label: 'Individual User', value: 'IU', description: 'Independent learner account' }
]

const handleLogin = (role: UserRole) => {
  login(role)
  if (role === 'SA') {
    router.push('/sa/dashboard')
  } else if (role === 'CA') {
    router.push('/ca/dashboard')
  } else {
    router.push('/learner/dashboard')
  }
}
</script>

<template>
  <div class="card">
    <h2 class="section-title">Sign in</h2>
    <p class="muted" style="margin-top: -8px;">Select a role to enter the mock environment.</p>
    <div class="grid" style="gap: 12px; margin-top: 16px;">
      <button v-for="role in roles" :key="role.value" class="card" style="text-align: left;" @click="handleLogin(role.value)">
        <div class="flex items-center justify-between">
          <strong>{{ role.label }}</strong>
          <span class="tag">{{ role.value }}</span>
        </div>
        <p class="muted" style="margin: 6px 0 0;">{{ role.description }}</p>
      </button>
    </div>
  </div>
</template>
