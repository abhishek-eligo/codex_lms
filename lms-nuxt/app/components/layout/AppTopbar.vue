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
  <header class="topbar flex items-center justify-between">
    <div>
      <strong>Welcome back</strong>
      <div class="muted" style="font-size: 12px;">
        {{ authStore.user?.name ?? 'Guest' }} · {{ authStore.user?.company ?? 'Global' }}
      </div>
    </div>
    <div class="flex items-center gap-4">
      <span class="badge" v-if="authStore.role">{{ authStore.role }}</span>
      <button class="btn outline" @click="onLogout">Logout</button>
    </div>
  </header>
</template>
