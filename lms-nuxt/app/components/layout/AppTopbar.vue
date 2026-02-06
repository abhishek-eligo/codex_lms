<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const router = useRouter()

const onLogout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<template>
  <header class="topbar">
    <div>
      <strong>Enterprise Learning Workspace</strong>
      <div class="muted" style="font-size:12px;">{{ authStore.user?.name }} · {{ authStore.user?.company || 'Global Tenant' }}</div>
    </div>
    <div class="topbar-actions">
      <input class="input" placeholder="Search modules..." style="width: 240px;" />
      <span class="badge">{{ authStore.role }}</span>
      <button class="btn outline" @click="onLogout">Logout</button>
    </div>
  </header>
</template>
