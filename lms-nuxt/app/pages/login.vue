<script setup lang="ts">
import { useAuth } from '~/composables/useAuth'
import type { UserRole } from '~/stores/auth'

definePageMeta({ layout: 'auth' })
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
  if (role === 'SA') router.push('/sa/dashboard')
  else if (role === 'CA') router.push('/ca/dashboard')
  else router.push('/learner/dashboard')
}
</script>

<template>
  <div class="card">
    <h2 style="margin:0 0 4px; font-size:38px;">Sign in</h2>
    <p class="page-subtitle">Select a role to enter the mock environment.</p>
    <div class="grid" style="gap:12px; margin-top:14px;">
      <button v-for="role in roles" :key="role.value" class="card" style="text-align:left; cursor:pointer;" @click="handleLogin(role.value)">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <strong style="font-size:24px;">{{ role.label }}</strong>
          <span class="tag">{{ role.value }}</span>
        </div>
        <p class="muted" style="font-size:20px; margin:6px 0 0;">{{ role.description }}</p>
      </button>
    </div>
  </div>
</template>
